module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { __MODS__[modId].m.exports.__proto__ = m.exports.__proto__; Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; Object.defineProperty(m.exports, k, { set: function(val) { __MODS__[modId].m.exports[k] = val; }, get: function() { return __MODS__[modId].m.exports[k]; } }); }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1585379726317, function(require, module, exports) {

const path = require('path');
const os = require('os');
const fs = require('graceful-fs');
const makeDir = require('make-dir');
const xdgBasedir = require('xdg-basedir');
const writeFileAtomic = require('write-file-atomic');
const dotProp = require('dot-prop');
const uniqueString = require('unique-string');

const configDir = xdgBasedir.config || path.join(os.tmpdir(), uniqueString());
const permissionError = 'You don\'t have access to this file.';
const makeDirOptions = {mode: 0o0700};
const writeFileOptions = {mode: 0o0600};

class Configstore {
	constructor(id, defaults, opts) {
		opts = opts || {};

		const pathPrefix = opts.globalConfigPath ?
			path.join(id, 'config.json') :
			path.join('configstore', `${id}.json`);

		this.path = path.join(configDir, pathPrefix);
		this.all = Object.assign({}, defaults, this.all);
	}

	get all() {
		try {
			return JSON.parse(fs.readFileSync(this.path, 'utf8'));
		} catch (err) {
			// Create dir if it doesn't exist
			if (err.code === 'ENOENT') {
				makeDir.sync(path.dirname(this.path), makeDirOptions);
				return {};
			}

			// Improve the message of permission errors
			if (err.code === 'EACCES') {
				err.message = `${err.message}\n${permissionError}\n`;
			}

			// Empty the file if it encounters invalid JSON
			if (err.name === 'SyntaxError') {
				writeFileAtomic.sync(this.path, '', writeFileOptions);
				return {};
			}

			throw err;
		}
	}

	set all(val) {
		try {
			// Make sure the folder exists as it could have been deleted in the meantime
			makeDir.sync(path.dirname(this.path), makeDirOptions);

			writeFileAtomic.sync(this.path, JSON.stringify(val, null, '\t'), writeFileOptions);
		} catch (err) {
			// Improve the message of permission errors
			if (err.code === 'EACCES') {
				err.message = `${err.message}\n${permissionError}\n`;
			}

			throw err;
		}
	}

	get size() {
		return Object.keys(this.all || {}).length;
	}

	get(key) {
		return dotProp.get(this.all, key);
	}

	set(key, val) {
		const config = this.all;

		if (arguments.length === 1) {
			for (const k of Object.keys(key)) {
				dotProp.set(config, k, key[k]);
			}
		} else {
			dotProp.set(config, key, val);
		}

		this.all = config;
	}

	has(key) {
		return dotProp.has(this.all, key);
	}

	delete(key) {
		const config = this.all;
		dotProp.delete(config, key);
		this.all = config;
	}

	clear() {
		this.all = {};
	}
}

module.exports = Configstore;

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1585379726317);
})()
//# sourceMappingURL=index.js.map