// packageManage/pages/map/map.js
var utils = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    map: null,
    backIcon: true,
    backTitle: '地图',
    markers: [{
        iconPath: "../../../static/images/lamp.png",
        id: 0,
        title: '知秋',
        latitude: 29.750486,
        longitude: 107.265053,
        width: 20,
        height: 20
      },
      {
        iconPath: "../../../static/images/lamp.png",
        id: 1,
        title: '知秋',
        latitude: 13.750486,
        longitude: 97.265053,
        width: 20,
        height: 20
      }, {
        iconPath: "../../../static/images/lamp.png",
        id: 2,
        title: '知秋',
        latitude: 9.750486,
        longitude: 67.265053,
        width: 20,
        height: 20
      }, {
        iconPath: "../../../static/images/lamp.png",
        id: 3,
        title: '知秋',
        latitude: 39.750486,
        longitude: 17.265053,
        width: 20,
        height: 20
      }, {
        iconPath: "../../../static/images/lamp.png",
        id: 4,
        title: '知秋',
        latitude: 19.750486,
        longitude: 57.265053,
        width: 20,
        height: 20
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.map = wx.createMapContext('map', this)
  },

  /**
   * 获取当前地图中心的经纬度
   */
  getCenterLocation: function() {
    this.data.map.getCenterLocation({
      success: (res) => {
        utils.log(res.longitude)
        utils.log(res.latitude)
      }
    })
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
   * 返回上层
   */
  back: function() {
    wx.navigateBack({
      delta: 1
    })
  },

  regionchange(e) {
    this.getCenterLocation()
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },

  /**
   * 滑块
   */
  onChange(event) {
    wx.showToast({
      icon: 'none',
      title: `当前值：${event.detail}`
    });
  }
})