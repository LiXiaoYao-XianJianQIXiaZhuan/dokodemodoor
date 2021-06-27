// pages/modify/modify.js
Page({
  data: {
    username: '',
    gender: '男',    // 默认值
    sign:''
  },

  // options：接收上一个页面携带过来的参数，取参时使用decodeURIComponent解码
  onLoad: function (options) {
    console.log(options);
    this.setData({
      username: decodeURIComponent(options.username),
      gender: decodeURIComponent(options.gender),
      sign: decodeURIComponent(options.sign)
    })
  },

  // 提交表单
  formSubmit: function (e) {
    console.log(e)
    var formData = e.detail.value;    // 获取表单数据
    // 获取当前页面栈。小程序的页面存储在页面栈中，当前页面在栈顶pages[pages.length-1]
    var pages = getCurrentPages();
    // 获取上一个页面
    var prePage = pages[pages.length - 2];
    // 调用上一个页面的setData()方法，更新为本页面修改的表单数据
    prePage.setData({
      username: formData.username,
      gender: formData.gender,
      sign: formData.sign
    })
    // 返回到上一个页面
    wx.navigateBack();
  }
})