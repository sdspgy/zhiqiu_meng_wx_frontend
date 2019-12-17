// packageSearch/pages/people/people.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backTitle: '用户详情',
    backIcon: true,
    workLoadShow: false,
    works: [],
    user: {
      url: '../../../static/images/bi.png',
      name: '北柒_知秋',
      motto: '不错哦不错哦不不错哦不错哦不错哦不错哦'
    }
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
    wx.redirectTo({
      url: '../work/work'
    })
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