// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    sharebtn: [
      { lable: '微信好友', bgcolor: '#00c00b', icon: 'icon-weixin' },
      { lable: '朋友圈', bgcolor: '#6cca2c', icon: 'icon-pengyouquan' },
      { lable: 'QQ', bgcolor: '#0fb8f7', icon: 'icon-qq' },
      { lable: '空间', bgcolor: '#ffc53f', icon: 'icon-kongjian' },
      { lable: '微博', bgcolor: '#ff5257', icon: 'icon-weibo' },
      { lable: '复制链接', bgcolor: '#b9bdbe', icon: 'icon-fuzhi' },
      { lable: '更多', bgcolor: '#42d1bd', icon: 'icon-more' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "分享"
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})