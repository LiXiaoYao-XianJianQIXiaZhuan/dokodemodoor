// pages/news/official/text/text.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		type:'',		//消息类型
		newsImage:'',	//消息图片
		content:'誰說\n'+
		'2020沒有五月之約？\n'+
		'-\n'+
		'2020 . 5 . 31 pm 8:00]\n'+
		'五月天 [ 突然好想見到你 ]\n'+
		'Mayday live in the sky 線上演唱會\n'+
		'-\n'+
		'當我們唱起同一首歌，\n'+
		'你不再只是一個人。\n'+
		'更多訊息請關注：@相信音乐Bin-music',		//消息详细内容
		title:''		//消息标题
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var infoList = JSON.parse(options.sinfo)
		console.log(infoList)
		this.setData({
			type:infoList.type,
			title:infoList.content,
			newsImage:infoList.newsImage
		})
		wx.setNavigationBarTitle({
			title: infoList.type,
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