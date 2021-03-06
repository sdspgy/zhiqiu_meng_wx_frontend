// pages/search/search.js
var utils = require('../../utils/util.js');
var request = require('../../utils/request.js');

const conf = {
  tagColor: ['primary', 'success', 'danger', 'warning']
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    conf: conf,
    backTitle: '搜索',
    backIcon: true,
    value: '',
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

  back: function() {
    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 输入框搜索
   */
  searchEvent: function(e) {

  },

  /**
   * 点击搜索
   */
  searchTap: function() {
    utils.redirectTo("../../packageSearch/pages/search/search")
  },

  /**
   * 历史
   */
  historyEvent: function(e) {

  },

  /**
   * 热门
   */
  hotEvent: function(e) {

  }
})