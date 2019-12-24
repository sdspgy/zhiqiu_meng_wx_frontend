/**
 * @author zhiqiu
 * @describe 集中管理请求，仿造axios
 */

var utils = require('util.js');

const headUrl = 'http://127.0.0.1:9001/meng';
/**
 * 上传图片固定接口
 */
const imgurl = 'http://127.0.0.1:9001/meng/small/work/upload';

function uploadImg(filesPath) {
  return utils.axiosImg(imgurl, filesPath)
}

function text(data) {
  return utils.axios('post', headUrl + '/api/queryCreatives', data)
}

function uploadWork(data) {
  return utils.axios('post', headUrl + '/small/work/uploadWork', data)
}

module.exports = {
  headUrl,
  imgurl,
  uploadImg,
  text,
  uploadWork
}