Page({
  data: {
    username: '精神小伙',
    gender: '男',
    imgUrl: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
    sign:''
  },

  // 选择头像：wx.chooseImage从本地相册选择图片或使用相机拍照。
  changeAvatar: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],      // 原图或压缩图
      sourceType: ['album', 'camera'],           // 相册或相机
      success: (res) => {
        console.log(res.tempFilePaths);
        // tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        this.setData({
          imgUrl: tempFilePaths
        })
      }
    })
  },

  // 跳转到“个人资料修改页面”，并携带参数
  jump: function () {
    var _this = this
    wx.navigateTo({
      // encodeURIComponent()函数能保留url作为参数时的特殊字符，以及用户输入的特殊符号，如“&、#、/”等。
      // 这些符号如果不处理，在传参时会被重新编码，造成隔断参数或变成空格丢失。
      // 在接收参数时需要解码
      url: '/pages/personal/modify/modify?username=' + encodeURIComponent(_this.data.username) + '&gender=' + encodeURIComponent(_this.data.gender) + '&sign=' + encodeURIComponent(_this.data.sign)
    })
  }
})