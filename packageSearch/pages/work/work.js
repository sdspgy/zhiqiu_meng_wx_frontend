// packageSearch/pages/work/work.js
var utils = require('../../../utils/util.js');
var request = require('../../../utils/request.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    backTitle: '作品详情',
    backIcon: true,
    value: '',
    works: [{
      img: '../../../static/images/bi.png'
    }, {
      img: '../../../static/images/bi.png'
    }, {
      img: '../../../static/images/bi.png'
    }],
    user: {
      name: '北柒_知秋',
      url: '../../../static/images/bi.png'
    },
    comment: [{
      url: '../../../static/images/bi.png',
      name: '北柒_知秋',
      text: '不错哦不错哦不错哦不错哦不错哦不错哦不错哦不错哦不错哦不错哦不错哦'
    }, {
      url: '../../../static/images/bi.png',
      name: '北柒_知秋',
      text: '不错哦'
    }, {
      url: '../../../static/images/bi.png',
      name: '北柒_知秋',
      text: '不错哦'
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
   * 留言
   */
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },

  /**
   * 返回
   */
  back: function() {
    wx.navigateBack({
      delta: 1
    })
  }
})