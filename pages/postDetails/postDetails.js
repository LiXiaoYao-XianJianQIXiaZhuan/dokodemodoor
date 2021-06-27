// pages/cicle/post-details/post-details.js
var util = require('../../utils/date.js')

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		bottomShareShow: false,	//分享按钮
		gotoComment: false,		//跳转至评论区
		requesting: false,		//定义是否正在请求数据,若在请求数据则不再请求数据，若没有在请求数据则可以请求
		//当前帖子数据
		post: {
			userid: 'hdx',
			postid: '11',
			type: 0,
			avatar: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/dynamic-dynamic-Axin-avatar.jpg',
			nickname: '阿信',
			time: '2020-05-20',
			text: '2020520\n' +
				'想找一張比較溫暖的照片陪伴大家\n' +
				'想找一張比較溫暖的照片陪伴大家\n' +
				'想找一張比較溫暖的照片陪伴大家\n' +
				'想找一張比較溫暖的照片陪伴大家\n' +
				'想找一張比較溫暖的照片陪伴大家\n' +
				'但只找到這張⋯⋯\n' +
				'\n' +
				'有人家裡需要我上門打掃的嗎？',
			image: [
				'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg',
				'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg',
				'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg',
				'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg',
				'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg',
				'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg',
			],
			video: null,
			good: {
				gooded: false,		//是否点赞了
				goodSum: 99,		//点赞数
			},
			commentSum: 99,			//评论数
			shareSum: 99,			//分享转发数
		},
		//评论的缓存
		reply: null,				//回复对象昵称
		comment: {
			// 前端数据
			showed: false,					//是否展示全部
			showBtn: false,					//展示全部按钮
			lineNum: 3,						//显示多少行
			inputValue: '',
			// 后台数据
			id: '',							//使用数据库时这项不需要手动填写
			userid: 'now_userid',			//当前用户userid
			avatar: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',	//当前用户头像
			nickname: '我也是阿信粉丝',		//当前用户昵称
			time: '',						//发布时间，按下发送键的那一刻计算
			type: null,						//图片评论还是视频评论	
			text: '',						//评论内容
			image: [],						//图片评论图片内容，上传至云端
			video: null,					//视频评论视频链接，上传至云端
			lastid: null					//回复的是哪个评论
		},

		//评论表
		commentList: [
			{
				showed: false,				//是否展示全部
				showBtn: false,				//展示全部按钮
				lineNum: 3,					//不展示全部时展示多少行
				id: 0,
				userid: 'DDD',
				avatar: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/dynamic-dynamic-Axin-avatar.jpg',
				nickname: '阿信',
				time: '2020.6.18',
				type: 0,
				text: '2020520\n' +
					'想找一張比較溫暖的照片陪伴大家\n' +
					'但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯\n' +
					'\n' +
					'有人家裡需要我上門打掃的嗎？',
				image: [
					'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg'
				],
				video: null,
				lastid: null
			},
			{
				showed: false,					//是否展示全部
				showBtn: false,					//展示全部按钮
				lineNum: 3,						//不展示全部时展示多少行
				id: 1,
				userid: 'Axin',
				avatar: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
				nickname: '我是阿信粉丝',
				time: '2020.6.18',
				type: 0,
				text: '阿信帅啊！',
				image: [
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/dynamic-dynamic-Axin-avatar.jpg'
				],
				video: null,
				lastid: 0
			}
		]
	},

	// 预览图片事件
	lookImage: function (e) {

		var index = e.currentTarget.dataset.index
		var type = e.currentTarget.dataset.type
		var _this = this

		if (type === 'post') {
			wx.previewImage({
				current: index,
				urls: _this.data.post.image,
			});
		} else {
			var commentindex = e.currentTarget.dataset.commentindex
			wx.previewImage({
				current: index,
				urls: _this.data.commentList[commentindex].image,
			});
		}
	},

	// 显示全文点击事件
	showAll: function (e) {
		var index = e.currentTarget.dataset.index
		var showed = e.currentTarget.dataset.showed
		if (showed) {
			showed = false
		} else {
			showed = true
		}
		var x = 'commentList[' + index + '].showed'	//将要修改数组的值转换成字符串
		this.setData({
			[x]: showed
		})
	},

	// 显示全文按钮是否显示事件
	showAllBtn: function () {
		var screenWidth = null
		var _this = this
		wx.getSystemInfo({
			success: (res) => {
				//获取屏幕宽度
				screenWidth = res.screenWidth
			},
		});
		for (var i in _this.data.commentList) {
			let selQuery = wx.createSelectorQuery();
			var selected = '#s' + i
			selQuery.select(selected).boundingClientRect(res => {
				//获取屏幕宽度
				let height = res.height * 750 / screenWidth
				var lineNum = 'commentList[' + res.dataset.index + '].lineNum'
				var showBtn = 'commentList[' + res.dataset.index + '].showBtn'
				_this.setData({
					[lineNum]: 3,
					[showBtn]: height > 130 ? true : false
				})
			}).exec()
		}
	},

	// 前往个人页面
	gotoUser: function (e) {
		var userid = e.currentTarget.dataset.userid
		wx.navigateTo({
			url: '/pages/personal/user/user?userid=' + userid,
		});
	},

	// 添加关注
	addfocus: function (e) {
		var userid = e.currentTarget.dataset.userid
		console.log("添加" + userid + "至当前用户的关注表")
	},

	// 分享按钮点击事件
	shareTap: function () {
		var bottomShareShow = this.data.bottomShareShow
		if (!bottomShareShow) {
			this.setData({
				bottomShareShow: true
			})
		}else{
			this.setData({
				bottomShareShow: false
			})
		}
	},

	// 收藏
	collect: function () {
		var postid = this.data.post.postid
		console.log('添加帖子' + postid + '到收藏列表')
		var shareSum = this.data.post.shareSum
		shareSum = shareSum + 1
		this.setData({
			'post.shareSum': shareSum,
			bottomShareShow: false
		})
	},

	// 点赞
	goodTap: function () {
		// 添加点赞帖子至当前用户点赞表
		console.log('添加点赞帖子至当前用户点赞表')
		var goodSum = this.data.post.good.goodSum
		var gooded = this.data.post.good.gooded
		if (gooded) {
			gooded = false
			goodSum = goodSum - 1
		} else {
			gooded = true
			goodSum = goodSum + 1
		}
		this.setData({
			'post.good.goodSum': goodSum,
			'post.good.gooded': gooded
		})
	},

	// 点击评论按钮
	commentTap: function () {
		this.scrollToComment(true)
	},

	scrollToComment: function (gotoComment) {
		if (gotoComment) {
			this.setData({
				gotoComment
			})
		}
	},

	// 下拉触底刷新
	dowmrefresh: function () {
		wx.showLoading({
			title: '加载中',
		})

		setTimeout(function () {
			wx.hideLoading()
		}, 2000)
		console.log('下拉刷新获取更多评论,一次请求一条评论')
	},

	//输入评论时
	edit: function (e) {
		//当输入框中有数值时，令发送按钮变蓝
		var text = e.detail.value
		this.setData({
			'comment.text': text
		})
	},

	//中途离开不编辑时
	pauseEditing: function (e) {
		console.log('中途离开不编辑时')
		console.log(e)
		var text = e.detail.value
		this.setData({
			'comment.text': text
		})
	},

	//点击完成按钮时
	finishEditing: function (e) {
		console.log('点击完成按钮时')
		console.log(e)
		var text = e.detail.value
		this.setData({
			'comment.text': text
		})
	},
	// 选择图片
	chooseImage: function () {
		//选择了视频就不能再选择图片
		var type = this.data.comment.type
		if (type == 1) {
			return
		}
		var _this = this
		var icount = 9 - _this.data.comment.image.length
		wx.chooseImage({
			count: icount,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				_this.setData({
					'comment.type': 0,
					'comment.image': res.tempFilePaths
				})
			},
		});
	},

	chooseVideo: function () {
		// 选择了图片就不能再选择视频
		var type = this.data.comment.type
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
					'comment.type': 1,
					'comment.video': res.tempFilePath
				})
			},
		});
	},

	sent: function () {
		var commentList = this.data.commentList
		var nullcomment = {
			// 前端数据
			showed: false,
			showBtn: false,
			lineNum: 3,
			inputValue: '',					//清空input输入框使用
			// 后台数据
			id: '',							//使用数据库时这项不需要手动填写
			userid: '',						//当前用户userid
			avatar: '',						//当前用户头像
			nickname: '',					//当前用户昵称
			time: '',						//发布时间，按下发送键的那一刻计算
			type: null,						//图片评论还是视频评论	
			text: '',						//评论内容
			image: [],						//图片评论图片内容，上传至云端
			video: null,					//视频评论视频链接，上传至云端
			lastid: null					//回复的是哪个评论
		}
		var comment = this.data.comment
		comment.id = commentList.length
		comment.userid = 'now_userid'
		comment.avatar = 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg'
		comment.nickname = '当前用户昵称'
		var TIME = util.formatTime(new Date())
		comment.time = TIME
		commentList.push(comment)
		this.setData({
			commentList: commentList,
			comment: nullcomment
		})
	},

	reply: function (e) {
		console.log(e)
		var commentid = e.currentTarget.dataset.commentid
		var index = e.currentTarget.dataset.index
		var nickname = this.data.commentList[index].nickname
		this.setData({
			reply: nickname,
			'comment.lastid': commentid
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		wx.setNavigationBarTitle({
			title: '帖子详情',
		});

		var postid = options.postid
		var gotoComment = options.gotoComment
		this.scrollToComment(gotoComment)
		this.showAllBtn()
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
	onShareAppMessage: function (res) {
		console.log(res)
		if (res.from === 'button') {
			var postid = this.data.post.postid
			var shareSum = this.data.post.shareSum
			shareSum = shareSum + 1
			this.setData({
				'post.shareSum': shareSum,
				bottomShareShow: false
			})
			return {
				title: '给你分享一个有趣的帖子',
				path: '/pages/cicle/post/post?postid=' + postid,
			}
		}
	}
})