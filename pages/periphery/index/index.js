// pages/periphery/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		sellerInfo:[
			{
				// avatar:头像,nickname:昵称,commodityImage:商品图片,quantitySold:已出售数量
				id:1,
				avatar:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-avatar.jpg',
				userId:'',
				nickname:'五月天的Wmls',
				commodityImage:{
					image1:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image1.jpg',
					image2:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image2.jpg',
					image3:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image3.jpg'
				},
				quantitySold:98,
				title:'五月天周边',
				price:'38.00'
			},
			{
				// avatar:头像,nickname:昵称,commodityImage:商品图片,quantitySold:已出售数量
				id:2,
				avatar:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-avatar.jpg',
				userId:'',
				nickname:'五月天的Wmls',
				commodityImage:{
					image1:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image1.jpg',
					image2:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image2.jpg',
					image3:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image3.jpg',
				},
				quantitySold:98,
				title:'五月天周边',
				price:'38.00'
			},
			{
				// avatar:头像,nickname:昵称,commodityImage:商品图片,quantitySold:已出售数量
				id:3,
				avatar:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-avatar.jpg',
				userId:'',
				nickname:'五月天的Wmls',
				commodityImage:{
					image1:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image1.jpg',
					image2:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image2.jpg',
					image3:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image3.jpg',
				},
				quantitySold:98,
				title:'五月天周边',
				price:'38.00'
			},
			{
				// avatar:头像,nickname:昵称,commodityImage:商品图片,quantitySold:已出售数量
				id:4,
				avatar:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-avatar.jpg',
				userId:'',
				nickname:'五月天的Wmls',
				commodityImage:{
					image1:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image1.jpg',
					image2:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image2.jpg',
					image3:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image3.jpg',
				},
				quantitySold:98,
				title:'五月天周边',
				price:'38.00'
			},
			{
				// avatar:头像,nickname:昵称,commodityImage:商品图片,quantitySold:已出售数量
				id:5,
				avatar:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-avatar.jpg',
				userId:'',
				nickname:'五月天的Wmls',
				commodityImage:{
					image1:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image1.jpg',
					image2:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image2.jpg',
					image3:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image3.jpg',
				},
				quantitySold:98,
				title:'五月天周边',
				price:'38.00'
			},
			{
				// avatar:头像,nickname:昵称,commodityImage:商品图片,quantitySold:已出售数量
				id:6,
				avatar:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-avatar.jpg',
				userId:'',
				nickname:'五月天的Wmls',
				commodityImage:{
					image1:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image1.jpg',
					image2:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image2.jpg',
					image3:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image3.jpg',
				},
				quantitySold:98,
				title:'五月天周边',
				price:'38.00'
			},
		]
	},

	goToCommodity:function(e){
		var id = e.currentTarget.dataset.id
		var url = '/pages/periphery/commodity/commodity?id='+id
		wx.navigateTo({
			url: url,
		});
	},

	goToUser:function(e){
		var index = e.currentTarget.dataset.index
		// var userId = this.data.sellerInfo[index].userId
		var url = '/pages/personal/user/user'
		wx.navigateTo({
			url:url
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

		
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
		if (typeof this.getTabBar === 'function' &&
		  this.getTabBar()) {
			  this.getTabBar().updateSelected(1);
		}
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