// pages/welcome/welcome.js
var utils = require('../../utils/util.js');
var request = require('../../utils/request.js');
// var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
// var qqmapsdk;
import F2 from '@antv/wx-f2';
//获取应用实例
const app = getApp()

// const chooseLocation = requirePlugin('chooseLocation');

// let plugin = requirePlugin('routePlan');
// let key = 'RGXBZ-WKOKW-5F6RY-OVGZZ-64EGT-BOBTX'; //使用在腾讯位置服务申请的key
// let referer = '北柒书画-书法绘画'; //调用插件的app的名称
// let endPoint = JSON.stringify({ //终点
//   'name': '北京西站',
//   'latitude': 39.894806,
//   'longitude': 116.321592
// });
// wx.navigateTo({
//   url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint + '&navigation=' + 1
// });

// let plugin = requirePlugin("subway");
// let key = 'RGXBZ-WKOKW-5F6RY-OVGZZ-64EGT-BOBTX';//使用在腾讯位置服务申请的key;
// let referer = '北柒书画-书法绘画'; //调用插件的app的名称
// wx.navigateTo({
//   url: 'plugin://subway/index?key=' + key + '&referer=' + referer
// });

// const key = 'RGXBZ-WKOKW-5F6RY-OVGZZ-64EGT-BOBTX'; //使用在腾讯位置服务申请的key
// const referer = '北柒书画-书法绘画'; //调用插件的app的名称
// const location = JSON.stringify({
//   latitude: 39.89631551,
//   longitude: 116.323459711
// });
// const category = '生活服务,娱乐休闲';

// wx.navigateTo({
//   url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&category' + category
// });

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // add: '医院'
    autoplay: true,
    indicatorDots: true,
    interval: 10000,
    duration: 500,
    imgs: [{
        url: '../../static/images/logo.png'
      },
      {
        url: '../../static/images/logo.png'
      },
      {
        url: '../../static/images/logo.png'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 实例化API核心类
    // qqmapsdk = new QQMapWX({
    //   key: 'RGXBZ-WKOKW-5F6RY-OVGZZ-64EGT-BOBTX'
    // });

    // request.text('')
    //   .then((res) => {
    //     utils.showSuccess('success');
    //   });

    /**
     * 获取当前地址的经纬度，配合app.json
     */
    // wx.getLocation({
    //   type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    //   success(res) {
    //     const latitude = res.latitude 
    //     const longitude = res.longitude 
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
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    /**
    const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    // 调用接口
    qqmapsdk.search({
      keyword: '酒店',
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        console.log(res);
      }
    });
    */

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
  },

  /**
   * @programEvent
   */
  programEvent: function(info) {
    wx.switchTab({
      url: '../menu/home',
    })
  },

  imgEvent: function(info) {
    wx.previewImage({
      current: 'http://p1.pstatp.com/large/pgc-image/86c3def5b4b54c389f0ff57bc60a88b3', // 当前显示图片的http链接
      urls: ['http://p1.pstatp.com/large/pgc-image/86c3def5b4b54c389f0ff57bc60a88b3']
    })
  }

  /** 
    // 事件触发，调用接口
    nearby_search: function() {
      var _this = this;
      // 调用接口
      qqmapsdk.search({
        keyword: this.data.add, //搜索关键词
        location: '29.750486,107.265053', //设置周边搜索中心点
        success: function(res) { //搜索成功后的回调
          var mks = []
          for (var i = 0; i < res.data.length; i++) {
            mks.push({ // 获取返回结果，放到mks数组中
              title: res.data[i].title,
              id: res.data[i].id,
              latitude: res.data[i].location.lat,
              longitude: res.data[i].location.lng,
              iconPath: "../../static/images/point.png", //图标路径
              width: 20,
              height: 30
            })
          }
          _this.setData({ //设置markers属性，将搜索结果显示在地图中
            markers: mks
          })
        },
        fail: function(res) {
          console.log(res);
        },
        complete: function(res) {
          console.log(res);
        }
      });
    },
    */

  /** 
    //数据回填方法
    backfill: function(e) {
      var id = e.currentTarget.id;
      for (var i = 0; i < this.data.suggestion.length; i++) {
        if (i == id) {
          this.setData({
            backfill: this.data.suggestion[i].title
          });
        }
      }
    },
    */

  /**
    //触发关键词输入提示事件
    getsuggest: function(e) {
      var _this = this;
      //调用关键词提示接口
      qqmapsdk.getSuggestion({
        //获取输入框值并设置keyword参数
        keyword: e.detail.value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
        region: '涪陵', //设置城市名，限制关键词所示的地域范围，非必填参数
        success: function(res) { //搜索成功后的回调
          console.log(res);
          var sug = [];
          for (var i = 0; i < res.data.length; i++) {
            sug.push({ // 获取返回结果，放到sug数组中
              title: res.data[i].title,
              id: res.data[i].id,
              addr: res.data[i].address,
              city: res.data[i].city,
              district: res.data[i].district,
              latitude: res.data[i].location.lat,
              longitude: res.data[i].location.lng
            });
          }
          _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
            suggestion: sug
          });
        },
        fail: function(error) {
          console.error(error);
        },
        complete: function(res) {
          console.log(res);
        }
      });
    }
  */

})