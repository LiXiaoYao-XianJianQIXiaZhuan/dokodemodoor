// pages/personal/focus/focus.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		focusList:[
			{
				userid:'',
				avatar:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/dynamic-dynamic-Axin-avatar.jpg',
				nickname:'阿信',
				followed:true
			},
			{
				userid:'',
				avatar:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/dynamic-dynamic-Axin-avatar.jpg',
				nickname:'阿信',
				followed:true
			}
		]
	},

	addFollowed:function(e){
		console.log(e)
		var userid = e.currentTarget.dataset.userid;
		
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