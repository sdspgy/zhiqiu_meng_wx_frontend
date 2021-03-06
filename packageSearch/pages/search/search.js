// packageSearch/pages/search/search.js
var utils = require('../../../utils/util.js');
var request = require('../../../utils/request.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backTitle: '搜索结果',
    backIcon: true,
    works: [{
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      }, {
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
    ],
    users: [{
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
      {
        url: '../../../static/images/logo.png'
      },
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
   * 作品点击
   */
  imgWorkEvent: function(info) {
    utils.navigateTo('../work/work')
  },

  /**
   * 用户点击
   */
  imgUserEvent: function(info) {
    utils.navigateTo('../people/people')
  },
  
  /**
   * 返回   
   */
  back: function() {
    utils.back()
  }
})