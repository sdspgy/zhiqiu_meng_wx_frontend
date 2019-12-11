// pages/menu/home.js

const conf = {
  logoUrl: '../../static/images/logo.png',
  work_img_lazyoad: true
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    conf: conf,
    works: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setTabBarStyle({
      borderStyle: "black",
    })

    let works = [];
    for (let i = 0; i < 100; i++) {
      let workObj = new Object();
      if (i % 2 == 0) {
        workObj.url = '../../static/images/bi.png';
      } else {
        workObj.url = '../../static/images/logo.png';
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
   * 搜索框Event
   */
  search: function(e) {
    wx.navigateTo({
      url: '../search/search',
    })
  }
})