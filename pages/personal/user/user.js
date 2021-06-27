// pages/periphery/user/user.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		user:{
			follwed:false,
			cover:'http://qszf7nxlq.hn-bkt.clouddn.com/images/tabbar-index-default-icon.jpg',		//用户封面
			avatar:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-avatar.jpg',		//用户头像
			nickName:'五月天的Wmls',							//用户昵称
			fans:'55555',										//粉丝数
		},
		release:[
			{
				image:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image1.jpg',			//发布过的内容
				title:'五月天 周边',									//发布内容标题
				quantitySold:'98',										//已售数量
				price:'68.00',											//商品金额
				type:'商品'												//发布的内容类型
			},
			{
				image:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/periphery-seller-image1.jpg',			//发布过的内容
				title:'五月天 周边',									//发布内容标题
				quantitySold:'98',										//已售数量
				price:'68.00',											//商品金额
				type:'商品'												//发布的内容类型
			},
		]
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