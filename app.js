//app.js
import utils from './utils/util.js';
import requests from './utils/request.js';
App({
  onLaunch: function(options) {
    //场景值
    utils.log('场景值：' + options.scene);
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    //判断是否已授权
    this.isAuthor();
  },

  login: function() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;
        if (code) {
          wx.getUserInfo({
            success: (res) => {
              wx.request({
                url: requests.headUrl + '/wx/sys/login',
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                method: 'post',
                data: {
                  encryptedData: res.encryptedData,
                  iv: res.iv,
                  code: code,
                },
                success: (e) => {
                  if (e.data.code === 200) {
                    wx.setStorageSync("token", e.data.token);
                  } else {
                    utils.log(e.data.msg)
                  }
                },
                fail: function() {
                  utils.log('请联系管理员')
                }
              })
            }
          })
        }
      }
    })
  },

  isAuthor: function() {
    wx.login({
      success: info => {
        const code = info.code;
        if (code) {
          wx.request({
            url: requests.headUrl + '/wx/sys/isAuthor',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            data: {
              code: code,
            },
            success: (e) => {
              if (e.data.isAuthor) {
                this.globalData.isAuthor = true;
              } else {
                utils.log(e.data.msg)
              }
            },
            fail: function() {
              utils.log('请联系管理员')
            }
          })
        }
      }
    })
  },

  getUserInfo: function() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  globalData: {
    userInfo: null,
    isAuthor: false
  }
})