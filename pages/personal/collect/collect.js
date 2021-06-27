// pages/personal/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomShareShow: '',
    collectPostList: [
      // Type:区分类型是图片的还是视频的 0是图片，1是视频
      // avatar：头像，nickname:微博名字，releaseTime：发布时间，releaseContent:发布内容
      // blogURL:微博链接，releaseImage:微博内容里的图片，releaseVideo：微博内容里的视频
      {
        //帖子前台数据
        showed: false,		//是否显示全文标识
        showBtn: false,		//是否显示全文显示全文按钮标识
        lineNum: 3,			//帖子最多显示行数
        //帖子后台数据
        userid: 'ddd',
        postid: '11',
        type: 0,
        avatar: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
        nickname: '阿信',
        time: '2020-05-20',
        text: '2020520\n' +
          '想找一張比較溫暖的照片陪伴大家\n' +
          '但只找到這張⋯⋯\n' +
          '\n' +
          '有人家裡需要我上門打掃的嗎？',
        image: [
          'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
          'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
          'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
          'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
          'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
          'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
        ],
        video: null,
        good: {
          gooded: false,	//是否点赞了
          goodSum: 99,		//点赞数
        },
        commentSum: 99,		//评论数
        shareSum: 99,		//分享转发数
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的收藏',
    });
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