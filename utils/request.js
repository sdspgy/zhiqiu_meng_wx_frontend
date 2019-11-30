/**
 * @author zhiqiu
 * @describe 集中管理请求，仿造axios
 */

var utils = require('util.js');

const headUrl = 'http://127.0.0.1:8081/report/';

export const text = (data) => {
  return utils.axios('post', headUrl + 'api/queryCreatives', data)
}