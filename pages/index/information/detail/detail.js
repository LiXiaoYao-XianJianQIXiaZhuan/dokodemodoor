// pages/index/information/detail/detail.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		
	},

	getInfomationData:function(newsid){
		console.log(newsid);
		var _this = this
		if(newsid != ""){
			wx.request({
				url: 'http://127.0.0.1:8080/dokodemodoorServer/getNewsById',
				data: {
					id:newsid
				},
				header: {'content-type':'application/json'},
				method: 'GET',
				dataType: 'json',
				responseType: 'text',
				success: (res) => {
					var information = res.data.data
					console.log(information);
					_this.setData({
						id:information.newsid,
						type:information.type,
						title:information.title,
						time:information.time,
						content:information.content,
						images:information.imageUrl,
						videoUrl:information.videoUrl
					})
				},
				fail: () => {},
				complete: () => {}
			});
			  
		}
	},
	// 查看大图
	lookImage:function(e){
		var imgUrl = this.data.images
		var index = e.currentTarget.dataset.imgIndex
		wx.previewImage({
			current: index,
			urls: imgUrl,
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var newsid = options.newsid
		this.getInfomationData(newsid);
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