module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { __MODS__[modId].m.exports.__proto__ = m.exports.__proto__; Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; Object.defineProperty(m.exports, k, { set: function(val) { __MODS__[modId].m.exports[k] = val; }, get: function() { return __MODS__[modId].m.exports[k]; } }); }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1585379726460, function(require, module, exports) {

module.exports = writeFile
module.exports.sync = writeFileSync
module.exports._getTmpname = getTmpname // for testing
module.exports._cleanupOnExit = cleanupOnExit

var fs = require('graceful-fs')
var MurmurHash3 = require('imurmurhash')
var onExit = require('signal-exit')
var path = require('path')
var activeFiles = {}

// if we run inside of a worker_thread, `process.pid` is not unique
/* istanbul ignore next */
var threadId = (function getId () {
  try {
    var workerThreads = require('worker_threads')

    /// if we are in main thread, this is set to `0`
    return workerThreads.threadId
  } catch (e) {
    // worker_threads are not available, fallback to 0
    return 0
  }
})()

var invocations = 0
function getTmpname (filename) {
  return filename + '.' +
    MurmurHash3(__filename)
      .hash(String(process.pid))
      .hash(String(threadId))
      .hash(String(++invocations))
      .result()
}

function cleanupOnExit (tmpfile) {
  return function () {
    try {
      fs.unlinkSync(typeof tmpfile === 'function' ? tmpfile() : tmpfile)
    } catch (_) {}
  }
}

function writeFile (filename, data, options, callback) {
  if (options) {
    if (options instanceof Function) {
      callback = options
      options = {}
    } else if (typeof options === 'string') {
      options = { encoding: options }
    }
  } else {
    options = {}
  }

  var Promise = options.Promise || global.Promise
  var truename
  var fd
  var tmpfile
  /* istanbul ignore next -- The closure only gets called when onExit triggers */
  var removeOnExitHandler = onExit(cleanupOnExit(() => tmpfile))
  var absoluteName = path.resolve(filename)

  new Promise(function serializeSameFile (resolve) {
    // make a queue if it doesn't already exist
    if (!activeFiles[absoluteName]) activeFiles[absoluteName] = []

    activeFiles[absoluteName].push(resolve) // add this job to the queue
    if (activeFiles[absoluteName].length === 1) resolve() // kick off the first one
  }).then(function getRealPath () {
    return new Promise(function (resolve) {
      fs.realpath(filename, function (_, realname) {
        truename = realname || filename
        tmpfile = getTmpname(truename)
        resolve()
      })
    })
  }).then(function stat () {
    return new Promise(function stat (resolve) {
      if (options.mode && options.chown) resolve()
      else {
        // Either mode or chown is not explicitly set
        // Default behavior is to copy it from original file
        fs.stat(truename, function (err, stats) {
          if (err || !stats) resolve()
          else {
            options = Object.assign({}, options)

            if (options.mode == null) {
              options.mode = stats.mode
            }
            if (options.chown == null && process.getuid) {
              options.chown = { uid: stats.uid, gid: stats.gid }
            }
            resolve()
          }
        })
      }
    })
  }).then(function thenWriteFile () {
    return new Promise(function (resolve, reject) {
      fs.open(tmpfile, 'w', options.mode, function (err, _fd) {
        fd = _fd
        if (err) reject(err)
        else resolve()
      })
    })
  }).then(function write () {
    return new Promise(function (resolve, reject) {
      if (Buffer.isBuffer(data)) {
        fs.write(fd, data, 0, data.length, 0, function (err) {
          if (err) reject(err)
          else resolve()
        })
      } else if (data != null) {
        fs.write(fd, String(data), 0, String(options.encoding || 'utf8'), function (err) {
          if (err) reject(err)
          else resolve()
        })
      } else resolve()
    })
  }).then(function syncAndClose () {
    return new Promise(function (resolve, reject) {
      if (options.fsync !== false) {
        fs.fsync(fd, function (err) {
          if (err) fs.close(fd, () => reject(err))
          else fs.close(fd, resolve)
        })
      } else {
        fs.close(fd, resolve)
      }
    })
  }).then(function chown () {
    fd = null
    if (options.chown) {
      return new Promise(function (resolve, reject) {
        fs.chown(tmpfile, options.chown.uid, options.chown.gid, function (err) {
          if (err) reject(err)
          else resolve()
        })
      })
    }
  }).then(function chmod () {
    if (options.mode) {
      return new Promise(function (resolve, reject) {
        fs.chmod(tmpfile, options.mode, function (err) {
          if (err) reject(err)
          else resolve()
        })
      })
    }
  }).then(function rename () {
    return new Promise(function (resolve, reject) {
      fs.rename(tmpfile, truename, function (err) {
        if (err) reject(err)
        else resolve()
      })
    })
  }).then(function success () {
    removeOnExitHandler()
    callback()
  }, function fail (err) {
    return new Promise(resolve => {
      return fd ? fs.close(fd, resolve) : resolve()
    }).then(() => {
      removeOnExitHandler()
      fs.unlink(tmpfile, function () {
        callback(err)
      })
    })
  }).then(function checkQueue () {
    activeFiles[absoluteName].shift() // remove the element added by serializeSameFile
    if (activeFiles[absoluteName].length > 0) {
      activeFiles[absoluteName][0]() // start next job if one is pending
    } else delete activeFiles[absoluteName]
  })
}

function writeFileSync (filename, data, options) {
  if (typeof options === 'string') options = { encoding: options }
  else if (!options) options = {}
  try {
    filename = fs.realpathSync(filename)
  } catch (ex) {
    // it's ok, it'll happen on a not yet existing file
  }
  var tmpfile = getTmpname(filename)

  if (!options.mode || !options.chown) {
    // Either mode or chown is not explicitly set
    // Default behavior is to copy it from original file
    try {
      var stats = fs.statSync(filename)
      options = Object.assign({}, options)
      if (!options.mode) {
        options.mode = stats.mode
      }
      if (!options.chown && process.getuid) {
        options.chown = { uid: stats.uid, gid: stats.gid }
      }
    } catch (ex) {
      // ignore stat errors
    }
  }

  var fd
  var cleanup = cleanupOnExit(tmpfile)
  var removeOnExitHandler = onExit(cleanup)

  try {
    fd = fs.openSync(tmpfile, 'w', options.mode)
    if (Buffer.isBuffer(data)) {
      fs.writeSync(fd, data, 0, data.length, 0)
    } else if (data != null) {
      fs.writeSync(fd, String(data), 0, String(options.encoding || 'utf8'))
    }
    if (options.fsync !== false) {
      fs.fsyncSync(fd)
    }
    fs.closeSync(fd)
    if (options.chown) fs.chownSync(tmpfile, options.chown.uid, options.chown.gid)
    if (options.mode) fs.chmodSync(tmpfile, options.mode)
    fs.renameSync(tmpfile, filename)
    removeOnExitHandler()
  } catch (err) {
    if (fd) {
      try {
        fs.closeSync(fd)
      } catch (ex) {
        // ignore close errors at this stage, error may have closed fd already.
      }
    }
    removeOnExitHandler()
    cleanup()
    throw err
  }
}

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1585379726460);
})()
//# sourceMappingURL=index.js.map