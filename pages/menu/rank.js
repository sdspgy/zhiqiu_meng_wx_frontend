// pages/menu/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backTitle: '金榜',
    active: 0,

    titles: [{
        title: '作品榜',
        work: [{
          name: '上周浏览排名',
          works: [{
            url: '../../static/images/logo.png',
            author: '北柒-知秋',
            text: '688人浏览'
          }]
        }, {
          name: '上周获赞排名',
          works: [{
            url: '../../static/images/logo.png',
            author: '北柒-知秋',
            text: '688人浏览'
          }]
        }]
      },
      {
        title: '贡献榜',
        work: [{
            name: '上周签到之星',
            works: [{
                url: '../../static/images/logo.png',
                author: '北柒-知秋',
                text: '688人浏览'
              },

              {
                url: '../../static/images/logo.png',
                author: '北柒-知秋',
                text: '688人浏览'
              }
            ]
          }, {
            name: '上周勤劳之星',
            works: [{
              url: '../../static/images/logo.png',
              author: '北柒-知秋',
              text: '688人浏览'
            }]
          },
          {
            name: '上周努力之星',
            works: [{
              url: '../../static/images/logo.png',
              author: '北柒-知秋',
              text: '688人浏览'
            }]
          }
        ]
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    let works = [{
        url: '../../static/images/logo.png',
        author: '北柒-知秋',
        text: "8888人浏览"
      }, {
        url: '../../static/images/logo.png',
        author: '北柒-知秋',
        text: "8888人浏览"
      }, {
        url: '../../static/images/logo.png',
        author: '北柒-知秋',
        text: "8888人浏览"
      },
      {
        url: '../../static/images/logo.png',
        author: '北柒-知秋',
        text: "8888人浏览"
      }
    ];
    // let i = 0
    // for (i; i < 10; i++) {
    //   let s = {};
    //   s.url = '../../static/images/bieqi.png';
    //   s.author = '北柒-知秋';
    //   s.text = "8888人浏览";
    //   works.push = s;
    // }
    // debugger


    this.data.titles[0].work[0].works = works;
    this.data.titles[0].work[1].works = works;
    this.data.titles[1].work[0].works = works;
    this.data.titles[1].work[1].works = works;
    this.data.titles[1].work[2].works = works;
    this.setData({
      titles: this.data.titles
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
   * top切换
   */
  onChange(event) {
    wx.showToast({
      title: `${event.detail.name}`,
      icon: 'none'
    });
  }
})