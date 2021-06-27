// pages/index/dymamic/text/text.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		avatar: '',
		nickname: '',
		time: '',
		content: '',
		images: [],
		video: ''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options);
		var dynamicId = options.dynamicid
		var _this = this
		wx.request({
			url: 'http://127.0.0.1:8080/dokodemodoorServer/getMicroblog',
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				'Accept': 'application/json'
			},
			data: {
				id: dynamicId
			},
			method: 'POST',
			success: (res) => {
				var dynamic = res.data.data;
				_this.setData({
					avatar: dynamic.avatar,
					nickname: dynamic.nickname,
					time: dynamic.time,
					content: dynamic.content,
					images: dynamic.images,
					video: dynamic.video
				})
			},
		});
		wx.setNavigationBarTitle({
			title: '微博正文',
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