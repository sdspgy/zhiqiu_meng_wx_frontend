// packageSearch/pages/upload/upload.js
var utils = require('../../../utils/util.js');
var request = require('../../../utils/request.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    backTitle: '上传',
    title: '',
    text: '',
    fileList: []
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
   * 标题
   */
  onChangeTitle(event) {
    this.setData({
      title: event.detail.value
    })
  },

  /**
   * 内容
   */
  onChangeText(event) {
    this.setData({
      text: event.detail.value
    })
  },

  /**
   * 标题图标
   */
  onClickIconTitle: function() {
    utils.showToast('用于搜索栏快速查找')
  },
  /**
   * 内容图标
   */
  onClickIconText: function() {
    utils.showToast('恰到好处的描述更吸引人哦')
  },

  beforeRead(event) {
    const {
      file,
      callback
    } = event.detail;
    for (let index in file) {
      let imgObject = new Object();
      imgObject.url = file[index].path;
      this.data.fileList.push(imgObject);
    }
    this.setData({
      fileList: this.data.fileList
    })
    // callback(file.type === 'image');
    callback(true)
  },
  afterRead(event) {},
  deleteImg(event) {
    utils.splice(this.data.fileList, event.detail.index)
    this.setData({
      fileList: this.data.fileList
    })
  },

  /**
   * 上传作品
   */
  workUpload: function() {
    let files = this.data.fileList;
    let filesPath = [];
    for (let key in files) {
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      let imgurl = files[key].url;
      filesPath.push(files[key].url);
      wx.uploadFile({
        url: request.imgurl, // 仅为示例，非真实的接口地址
        filePath: imgurl,
        name: 'file',
        header: {
          'Content-Type': 'multipart/form-data',
          // 'token': wx.getStorageSync("token")
        },
        success: (res) => {

        }
      });
    }
    this.setData({
      fileList: []
    })
    //除图片外的信息接口
    let data = {
      workName: this.data.title,
      workText: this.data.text,
      files: filesPath
    }
    request.uploadWork(data)
      .then((res) => {

      });

  }
})