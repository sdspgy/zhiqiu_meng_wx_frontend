// packageSearch/pages/upload/upload.js
var utils = require('../../../utils/util.js');
var request = require('../../../utils/request.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    backTitle: '上传',
    backIcon: true,
    title: '',
    fileList: [
      // {
      //   url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      //   name: '图片1'
      // },
      // // Uploader 根据文件后缀来判断是否为图片文件
      // // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      // {
      //   url: 'http://iph.href.lu/60x60?text=default',
      //   name: '图片2',
      //   isImage: true
      // }
    ]
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
  onChange(event) {
    console.log(event.detail.value);
    this.setData({
      title: event.detail.value
    })
  },

  /**
   * 标题图标
   */
  onClickIcon: function() {
    utils.showToast('用于搜索栏快速查找')
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
  // afterRead(event) {
  //   const {
  //     file
  //   } = event.detail;
  //   let files = event.detail.file;
  //   for (let index in files) {

  //   }
  //   // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
  //   wx.uploadFile({
  //     url: 'http://127.0.0.1:9001/meng/upload', // 仅为示例，非真实的接口地址
  //     filePath: files[0],
  //     name: 'file',
  //     header: {
  //       'Content-Type': 'multipart/form-data',
  //       // 'token': wx.getStorageSync("token")
  //     },
  //     success(res) {
  //       debugger
  //       // 上传完成需要更新 fileList
  //       // const {
  //       //   fileList = []
  //       // } = this.data;
  //       // fileList.push({ ...file,
  //       //   url: res.data
  //       // });
  //       // this.setData({
  //       //   fileList
  //       // });
  //     }
  //   });
  // },
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
    for (let key in files) {
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      let imgurl = files[key].url;
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
  },
  /**
   * 返回
   */
  back: function() {
    utils.back()
  }
})