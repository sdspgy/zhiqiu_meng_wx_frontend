/**
 * @author zhiqiu
 * @describe 集中管理请求，仿造axios
 */

var utils = require('util.js');

const headUrl = 'http://10.2.10.41:9001/meng';
/**
 * 上传图片固定接口
 */
const imgurl = 'http://10.2.10.41:9001/meng/small/work/upload';

function uploadImg(filesPath) {
  return utils.axiosImg(imgurl, filesPath)
}

function text(data) {
  return utils.axios('post', headUrl + '/api/queryCreatives', data)
}

function welcomeInfo(data) {
  return utils.axios('post', headUrl + '/open/welcome/info', data)
}

function uploadWork(data) {
  return utils.axios('post', headUrl + '/small/work/uploadWork', data)
}

module.exports = {
  headUrl,
  imgurl,
  uploadImg,
  text,
  welcomeInfo,
  uploadWork
}