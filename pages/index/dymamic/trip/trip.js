// pages/index/dymamic/trip/trip.js
var util = require("../../../../utils/date.js")
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		today:'',
		todayTrip:{
			time:'',
			place:'',
			title:''
		},
		trip:[]				//行程内容
	},

	getTime:function(){
		var time = util.formatTime(new Date())
		return time	
	},

	setTodayTrip:function(today){
		var trip = this.data.trip
		var todayTrip = this.data.todayTrip
		for(var i in trip){
			if(trip[i].time===today){
				todayTrip.time = trip[i].time
				todayTrip.place = trip[i].place
				todayTrip.title = trip[i].title
			}
		}
		this.setData({
			today:today,
			todayTrip:todayTrip
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var _this = this
		wx.setNavigationBarTitle({
			title: '五月天的行程',
		});
		wx.request({
			url: 'http://127.0.0.1:8080/dokodemodoorServer/getAllTrip',
			header: {
				'content-type':'application/x-www-form-urlencoded',
				'Accept':'application/json'
			},
			method: 'POST',
			success: (res) => {
				console.log('AllTrip:')
				console.log(res)
				_this.setData({
					trip:res.data.dataList
				})
				_this.setTodayTrip(_this.getTime())
			},
			fail: () => {},
			complete: () => {}
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