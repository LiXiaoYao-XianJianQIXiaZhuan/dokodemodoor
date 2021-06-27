const { values } = require("mobx-miniprogram")

// component/postList/postList.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		postList: {
			type:Array,
			value:null
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		bottomShareShow: '',
		postIndex: '',	//帖子索引
		clickSharePostIndex:''	//点击哪个帖子的标识
		
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		//square页面函数
		// 前往帖子详情页
		gotoPost: function (e) {
			var postid = e.currentTarget.dataset.postid
			wx.navigateTo({
				url: '/pages/postDetails/postDetails?postid=' + postid
			})
		},

		//显示全文点击事件
		showAll: function (e) {
			var index = e.currentTarget.dataset.index
			var showed = e.currentTarget.dataset.showed
			if (showed) {
				showed = false
			} else {
				showed = true
			}
			var x = 'post[' + index + '].showed'	//将要修改数组的值转换成字符串
			this.setData({
				[x]: showed
			})
		},
		
		//显示全文按钮显示事件
		showAllBtn: function () {
			var screenWidth = null
			var _this = this
			wx.getSystemInfo({
				success: (res) => {
					//获取屏幕宽度
					screenWidth = res.screenWidth
				},
			});
			let selQuery = wx.createSelectorQuery().in(this);
			for (var i in _this.data.post) {
				selQuery.select('.postList-text').boundingClientRect(data => {
					//获取屏幕宽度
					let height = data.height * 750 / screenWidth
					var lineNum = 'post[' + i + '].lineNum'
					var showBtn = 'post[' + i + '].showBtn'
					_this.setData({
						[lineNum]: 3,
						[showBtn]: height > 130 ? true : false
					})
				}).exec()
			}
		},

		shareTap: function (e) {
			this.setData({
				clickSharePostIndex:e.currentTarget.dataset.index
			})
			var bottomShareShow = this.data.bottomShareShow
			this.triggerEvent('getComponentData',{
				postShareIndex:this.data.clickSharePostIndex,
			})
			if (!bottomShareShow) {
				this.setData({
					'bottomShareShow': true
				})
			}else{
				this.setData({
					'bottomShareShow': false
				})
			}
		},

		share:function(){
			var postIndex = parseInt(this.data.clickSharePostIndex)
			var postid = this.properties.postList[postIndex].postid
			var shareSum = this.properties.postList[postIndex].shareSum
			shareSum = shareSum + 1
			var ss = 'postList[' + postIndex + '].shareSum'
			this.setData({
				[ss]: shareSum,
				'bottomShareShow': false
			})
		},

		collect: function () {
			var postIndex = parseInt(this.data.clickSharePostIndex)
			var postid = this.properties.postList[postIndex].postid
			var shareSum = this.properties.postList[postIndex].shareSum
			shareSum = shareSum + 1
			var ss = 'postList[' + postIndex + '].shareSum'
			this.setData({
				[ss]: shareSum,
				'bottomShareShow': false
			})
		},

		// 点赞
		goodTap: function (e) {
			// 添加点赞帖子至当前用户点赞表
			var index = e.currentTarget.dataset.index		//帖子的索引，查找点赞的是哪个帖子

			var goodSum = this.data.post[index].good.goodSum
			var gooded = this.data.post[index].good.gooded
			if (gooded) {
				gooded = false
				goodSum = goodSum - 1
				console.log('在用户点赞表里删除当前帖子')
			} else {
				gooded = true
				goodSum = goodSum + 1
				console.log('添加点赞帖子至当前用户点赞表')
			}
			var GOODSUM = 'post[' + index + '].good.goodSum'
			var GOODED = 'post[' + index + '].good.gooded'
			this.setData({
				[GOODSUM]: goodSum,
				[GOODED]: gooded
			})
		},

		lookImage: function (e) {
			var index = e.currentTarget.dataset.index
			var _this = this
			var postindex = e.currentTarget.dataset.postindex
			wx.previewImage({
				current: index,
				urls: _this.data.post[postindex].image,
			})

		},

		commentTap: function (e) {
			var postid = e.currentTarget.dataset.postid
			wx.navigateTo({
				url: '/pages/postDetails/postDetails?postid=' + postid + '&gotoComment=' + true
			})
		},

		gotoUser: function (e) {
			var userid = e.currentTarget.dataset.userid
			wx.navigateTo({
				url: '/pages/personal/user/user?userid=' + userid,
			});
		},
	},

	lifetimes:{
		ready(){
			this.showAllBtn();
		}
	}
})
