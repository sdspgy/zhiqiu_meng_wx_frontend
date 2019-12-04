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

/**
 * 保留小数
 * @param info
 * @param num
 */
export const toFixed = (info, num) => {
  return info.toFixed(num);
}

/**
 * 取整
 * @param number 
 * @return int
 */
export const parseInt = (number) => {
  return parseInt(number);
}

/**
 * 向上取整
 * @param number 
 * @return int
 */
export const mathCeil = (number) => {
  return Math.ceil(number);
}

/**
 * 向下取整
 * @param number 
 * @return int
 */
export const mathFloor = (number) => {
  return Math.floor(number);
}

/**
 * 四舍五入
 * @param number 
 * @return int
 */
export const mathRound = (number) => {
  return Math.round(number);
}

/**
 * 取绝对值
 * @param info
 */
export const abs = info => {
  return Math.abs(info);
}

/**
 * 返回两者较大值
 * @param num1
 * @param num2
 */
export const max = (num1, num2) => {
  return Math.max(num1, num2);
}

/**
 * 返回两者较小值
 * @param num1
 * @param num2
 */
export const min = (num1, num2) => {
  return Math.min(num1, num2);
}

/**
 * 手机号加密中间4位
 * @param value 手机号
 */
export function handelMobile(value) {
  if (!value) return '';
  if (typeof value !== 'string') value = value.toString();
  return value.replace(/^(\d{3})\d*(\d{4})$/, '$1****$2');
}

/**
 * 是否对象
 * @param value 值
 */
export function isObj(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Object'
}

/**
 * 是否数组
 * @param value值
 */
export function isArray(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Array'
}

/**
 * 数组里是否包含某元素
 * @param arr
 * @param element
 */
export const isExist = (arr, element) => {
  return arr.indexOf(element) > -1 ? true : false;
}

/**
 * 数组合并
 * @param arr1
 * @param arr2
 */
export const arrConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
}

/**
 * substring(start,end)表示从start到end之间的字符串，包括start位置的字符但是不包括end位置的字符
 * @param info
 * @param start
 * @param end
 */
export const substring = (info, start, end) => {
  return info.substring(start, end);
}

/**
 * substr(start,length)表示从start位置开始，截取length长度的字符串
 * @param info
 * @param start
 * @param end
 */
export const substr = (info, start, length) => {
  return info.substr(start, length);
}

/**
 * 使用一个指定的分隔符把一个字符串分割存储到数组
 * @param info
 * @param sign 分隔符号
 */
export const split = (info, sign) => {
  return info.split(sign);
}

/**
 * 对象合并
 * @param object1
 * @param object2
 */
export const objectMerge = (object1, object2) => {
  return Object.assign({}, object1, object2);
}