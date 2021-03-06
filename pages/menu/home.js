// pages/menu/home.js
var utils = require('../../utils/util.js');
var request = require('../../utils/request.js');
//获取应用实例
const app = getApp()

const conf = {
  logoUrl: 'http://cdn.mvptyz.cn/fbab612c-a370-4713-85f7-c9afd0c19afawx1be02a27b7657448.o6zAJs9grhpSbssoczI3GtKfnQVg.2UKhhbgqn1el358f9b53c51d811d08122b08cabff0fb.png',
  work_img_lazyoad: true
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    conf: conf,
    works: [],
    workLoadShow: false,
    sign: ['2', '3', '3', '6', '3'],
    news: ['北柒-知秋：刚刚打卡成功', '北柒-知秋：刚刚打6卡成功', '北柒-知6秋：刚刚打卡成功', '6北柒-知秋：刚刚打卡成功6'],

    autoplay: true,
    indicatorDots: true,
    vertical: true,
    interval: 5000,
    duration: 1000,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setTabBarStyle({
      borderStyle: "black",
    })

    if (app.globalData.isAuthor) {
      app.login()
    }

    let works = [];
    for (let i = 0; i < 10; i++) {
      let workObj = new Object();
      if (i % 3 == 0) {
        workObj.url = '../../static/images/mo.png';
        workObj.text = "北柒书画，书画给围观书画给围观书画给围观书画给围观书画给围观给围观围观";
        workObj.name = "北柒-知秋";
        workObj.workId = i;
      } else {
        workObj.url = '../../static/images/beiqi.png';
        workObj.text = '北柒书画';
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
   * 搜索框
   */
  searchEvent: function() {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  /**
   * 热 1
   * 新 0
   */
  newOrHotEvent: function(e) {

  },

  /**
   * 每个作品图片
   */
  workEvent: function(e) {
    wx.navigateTo({
      url: '../../packageSearch/pages/work/work'
    })
  },

  /**
   * 滑块底部
   */
  bottomEvent: function() {
    this.setData({
      workLoadShow: true
    })
    // let works = this.data.works;
    // works = this.data.works.concat(works);
    // this.setData({
    //   works: works,
    //   workLoadShow: false
    // })
  }

})