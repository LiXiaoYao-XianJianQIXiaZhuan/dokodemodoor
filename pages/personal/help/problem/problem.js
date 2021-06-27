// pages/personal/help/problem/problem.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		text:'',		//问题标题
		question:'',		//用户提出的问题
		answer:''			//问题的回答
	},

	goToOpinion:function(){
		wx.navigateTo({
			url: '../../opinion/opinion',
		});
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var problem_id = options.problem_id
		this.setData({
			text:'我没有问题',
			question:'请问这个软件有问题吗？',
			answer:'这个软件没有问题',
		})
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