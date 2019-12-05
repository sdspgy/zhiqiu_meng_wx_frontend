/**
 * @author zhiqiu
 * @describe 集中管理请求，仿造axios
 */

var utils = require('util.js');

const headUrl = 'http://127.0.0.1:9001/meng';

export const text = (data) => {
  return utils.axios('post', headUrl + '/api/queryCreatives', data)
}

module.exports = {
  headUrl
}