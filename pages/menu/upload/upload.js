// packageSearch/pages/upload/upload.js
var utils = require('../../../utils/util.js');
var request = require('../../../utils/request.js');
var COS = require('../../../utils/cos-wx-sdk-v5.js');
var cos = new COS({
  SecretId: 'AKIDkHYu1sxrvnPlAKKuJWUBhIgpjQzMaYTA',
  SecretKey: 'cz82nHoBRTFo79ueFbgVs1vZ7RVKtVt1',
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backTitle: '上传',
    title: '',
    errorTitle:'',
    text: '',
    isTrue:true,
    fileList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // cos.sliceUploadFile({

    //           Bucket: 'test-1250000000', // Bucket 格式：test-1250000000

    //           Region: 'ap-guangzhou',

    //           Key: 'txy.tp',

    //   FilePath: '/Users/hoolai/Desktop/诸葛亮.jpeg '

    // },

    //       function (err, data) {

    //             console.log(err, data);

    //       }

    // )
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
    utils.log(this.data.title
    )
  },
  focusTitle(){
    this.setData({
      errorTitle:''
    })
  },
  /**
   * 内容
   */
  onChangeText(event) {
    this.setData({
      text: event.detail.value
    })
    utils.log(this.data.title
    )
  },

  /**
   * 标题图标
   */
  onClickIconTitle: function() {
    utils.showToast('用于搜索栏快速查找')
  },
  clearTitle:function() {
    this.setData({
      title:''
    })
  },
  /**
   * 内容图标
   */
  onClickIconText: function() {
    utils.showToast('恰到好处的描述更吸引人哦')
  },
  clearText: function () {
    this.setData({
      text: ''
    })
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
    if(this.data.title.length <= 0){
      this.setData({
        errorTitle:'请填写必要内容'
      })
      return
    }
    let files = this.data.fileList;
    if(files.length <= 0){
      utils.showToast("请至少选择一张图片")
      return
    }
    let filesPath = [];
    for (let key in files) {
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      let imgurl = files[key].url;
      filesPath.push(files[key].url);
      wx.uploadFile({
        url: request.imgurl,
        filePath: imgurl,
        name: 'file',
        header: {
          'Content-Type': 'multipart/form-data',
          'token': wx.getStorageSync("token")
        },
        success: (res) => {
          utils.showSuccess("上传成功")
        },
        fail(err) {
          utils.showSuccess("上传失败")
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
    this.setData({
      title: '',
      text: ''
    })
  }
})