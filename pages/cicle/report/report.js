var utils = require("../../../utils/date.js")
//Page Object
Page({
  data: {
    inputValue:'',
    post:{
      userid: 'hdx',
			postid: '11',
			type: '',
			avatar: '/images/avatar.jpg',
			nickname: '阿信',
			time: '',
			text: '',
			image: [],
			video: null,
			good: {
				gooded: false,	//是否点赞了
				goodSum: 0,		//点赞数
			},
			commentSum: 0,		//评论数
			shareSum: 0,		//分享转发数
    }
  },

  chooseImage:function(){
    //选择了视频就不能再选择图片
		var type = this.data.post.type
		if (type == 1) {
			return
		}
		var _this = this
		var icount = 9 - _this.data.post.image.length
		wx.chooseImage({
			count: icount,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				_this.setData({
					'post.type': 0,
					'post.image': res.tempFilePaths
				})
			},
		});
  },

  //输入评论时
	edit: function (e) {
		//当输入框中有数值时，令发送按钮变蓝
		var text = e.detail.value
		this.setData({
			'post.text': text
		})
	},

	//中途离开不编辑时
	pauseEditing: function (e) {
		console.log('中途离开不编辑时')
		console.log(e)
		var text = e.detail.value
		this.setData({
			'post.text': text
		})
	},

	//点击完成按钮时
	finishEditing: function (e) {
		console.log('点击完成按钮时')
		console.log(e)
		var text = e.detail.value
		this.setData({
			'post.text': text
		})
  },
  
  chooseVideo: function () {
		// 选择了图片就不能再选择视频
		var type = this.data.post.type
		if (type == 0) {
			return
		}
		var _this = this
		wx.chooseVideo({
			sourceType: ['album', 'camera'],
			compressed: true,
			maxDuration: 15,
			success: (res) => {
				_this.setData({
					'post.type': 1,
					'post.video': res.tempFilePath
				})
			},
		});
  },
  
  publish:function(){
    //调用函数时，传入new Date() 参数，返回值是日期和时间
    var time = utils.formatTime(new Date())
    var post = this.data.post
    post.time = time
    console.log(post)
    wx.navigateBack({
      delta: 1
    });
  },

  //options(Object)
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '发布帖子',
    });
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  