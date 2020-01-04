// packageManage/pages/work/work.js
var utils = require('../../../utils/util.js');
var request = require('../../../utils/request.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    backTitle: '作品集',
    backIcon: true,
    workLoadShow: false,
    works: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let works = [];
    for (let i = 0; i < 30; i++) {
      let workObj = new Object();
      if (i % 3 == 0) {
        workObj.url = '../../../static/images/bi.png';
        workObj.text = "北柒书画";
        workObj.name = "北柒-知秋";
        workObj.workId = i;
      } else {
        workObj.url = '../../../static/images/logo.png';
        workObj.text = '北柒书画66北柒书画北柒书画北柒书画北柒书画北柒书画北北柒书画北柒书画北北柒书画北柒书画北北柒书画';
        workObj.name = "北柒-阿暖";
        workObj.workId = i;
      }
      works.push(workObj);
    }
    this.setData({
      works: works
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
   * 滑块底部
   */
  bottomEvent: function() {
    this.setData({
      workLoadShow: true
    })
  },

  workEvent: function() {
    wx.navigateTo({
      url: '../../../packageSearch/pages/work/work'
    })
  },

  /**
   * 返回
   */
  back: function() {
    utils.back()
  }
})