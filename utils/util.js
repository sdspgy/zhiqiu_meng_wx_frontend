/**
 * 
 * @param info
 * @return info
 * @log
 */
const log = info => {
  console.log('-----------------' + info + '-----------------')
}

/**
 * 
 * @author zhiqiu
 * @param method default 'post'
 * @param url 
 * @param data
 * @return res
 * @since ES6
 */
function axios(method, url, data) {
  this.showLoading;
  let p = new Promise((resolve, reject) => {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        // 'token': wx.getStorageSync("token")
      },
      method: method || 'post',
      data: data || '',
      success: (res) => {
        setTimeout(function() {
          wx.hideLoading();
        }, 100);
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      fail(err) {
        setTimeout(function() {
          wx.hideLoading();
        }, 100);
        reject(res)
      }
    })
  })
  return p;
}

/**
 * showSuccess
 */
function showSuccess(text) {
  wx.showToast({
    // title: text == undefined ? "success" : text,
    title: text || "success",
    icon: 'success',
    duration: 1000
  });
}

/**
 * showLoading
 */
function showLoading() {
  wx.showLoading({
    title: 'load...',
    mask: true
  });
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  log,
  axios,
  showSuccess,
  showLoading
}