// pages/menu/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backTitle: '分类',
    show: false,
    navbarTop: false,
    mainActiveIndex: 0,
    activeId: null,
    items: [{
        // 导航名称
        text: '字体',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [{
            // 名称
            text: '可选',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: true
          }, {
            // 名称
            text: '欧体',
            // id，作为匹配选中状态的标识
            id: 2
          },
          {
            text: '柳体',
            id: 3
          },
          {
            text: '颜体',
            id: 4
          },
          {
            text: '赵体',
            id: 5
          },
          {
            text: '金瘦体',
            id: 6
          }
        ]
      },
      {
        // 导航名称
        text: '名贴',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [{
            // 名称
            text: '可选',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: true
          }, {
            // 名称
            text: '《兰亭序》',
            // id，作为匹配选中状态的标识
            id: 2
          },
          {
            text: '《赤壁赋》',
            id: 3
          },
          {
            text: '《中秋帖》',
            id: 4
          },
          {
            text: '《伯远帖》',
            id: 5
          },
          {
            text: '《时晴帖》',
            id: 6
          }, {
            // 名称
            text: '《兰亭序》',
            // id，作为匹配选中状态的标识
            id: 2
          },
          {
            text: '《赤壁赋》',
            id: 3
          },
          {
            text: '《中秋帖》',
            id: 4
          },
          {
            text: '《伯远帖》',
            id: 5
          },
          {
            text: '《时晴帖》',
            id: 6
          }, , {
            // 名称
            text: '《兰亭序》',
            // id，作为匹配选中状态的标识
            id: 2
          },
          {
            text: '《赤壁赋》',
            id: 3
          },
          {
            text: '《中秋帖》',
            id: 4
          },
          {
            text: '《伯远帖》',
            id: 5
          },
          {
            text: '《时晴帖》',
            id: 6
          }
        ]
      }
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
   * 侧边栏show
   */
  onClickRight: function() {
    this.setData({
      show: true
    });
  },
  onClose() {
    this.setData({
      show: false
    });
  },

  /**
   * 侧边栏
   */
  onClickNav({
    detail = {}
  }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },
  onClickItem({
    detail = {}
  }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;

    this.setData({
      activeId
    });
  }
})