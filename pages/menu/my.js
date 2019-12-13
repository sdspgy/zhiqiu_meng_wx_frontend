// pages/menu/my.js
var utils = require('../../utils/util.js');
var request = require('../../utils/request.js');

const conf = {
  logoUrl: '../../static/images/logo.png'
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    conf: conf,
    topMain: [{
        title: '签到',
        text: '34',
        color: 'linear-gradient(#FF8247 0%, #FF8C69 80%)',
        icon: true
      },
      {
        title: '作品',
        text: '3',
        color: 'linear-gradient(#E066FF 0%, #DA70D6 80%)',
        icon: true
      },
      {
        title: '更多',
        text: '...',
        color: 'linear-gradient(#87CEFF 0%, #87CEFA 80%)',
        icon: false
      },
      {
        title: '关注',
        text: 'ds34',
        color: 'linear-gradient(#9F79EE 0%, #AB82FF 80%)',
        icon: true
      },

      {
        title: '粉丝',
        text: '344',
        color: 'linear-gradient(#00C5CD 0%, #00CED1 80%)',
        icon: true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 圆心
   */
  roundEvent: function(e) {

  }
})