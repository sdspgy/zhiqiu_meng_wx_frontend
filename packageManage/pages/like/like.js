// packageManage/pages/like/like.js
var utils = require('../../../utils/util.js');
var request = require('../../../utils/request.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backTitle: '人气',
    backIcon: true,
    active: 0,
    titles: [{
      title: '关注'
    }, {
      title: '粉丝'
    }]
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
   * top切换
   */
  onChange(event) {
    // wx.showToast({
    //   title: `${event.detail.name}`,
    //   icon: 'none'
    // });
    this.setData({
      active: event.detail.name
    })
  },

  likeButton: function(info) {

  },

  userImgButton: function(info) {

  },

  /**
   * 返回
   */
  back: function() {
    utils.back()
  }
})