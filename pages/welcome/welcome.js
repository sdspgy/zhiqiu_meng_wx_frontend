// pages/welcome/welcome.js
var utils = require('../../utils/util.js');
var request = require('../../utils/request.js');
import F2 from '@antv/wx-f2';
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    utils.log('welcome-------onLoad');
    // app.login();
    // request.text('')
    //   .then((res) => {
    //     utils.showSuccess('success');
    //   });

    // wx.getLocation({
    //   type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    //   success(res) {
    //     const latitude = res.latitude 
    //     const longitude = res.longitude 
    //     debugger
    //     wx.openLocation({
    //       latitude,
    //       longitude,
    //       scale: 18
    //     })
    //   }
    // })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    utils.log('welcome-------onReady');
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
   * @addEvent
   */
  addEvent: function(info) {
    wx.navigateTo({
      url: '../../packageManage/pages/map/map',
    })
  }
})