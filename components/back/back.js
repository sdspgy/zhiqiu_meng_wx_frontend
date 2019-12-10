/**
 * 自定义返回组件
 * @param backIcon 是否显示返回图标
 */
Component({

  //属性定义
  properties: {
    backIcon: { //属性名
      type: Boolean,
      value: false
    },
    backTitle: {
      type: String,
      value: ''
    }
  },

  methods: {
    back: function() {
      this.triggerEvent('back', {}, {});
    }
  }
})