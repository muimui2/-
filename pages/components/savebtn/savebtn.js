// pages/components/savebtn/savebtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    savemsg: function () {
      wx.showToast({
        title: '保存成功！',
        icon: 'success',
        duration: 2000
      })
    }
  }
})
