// pages/personal/love/love.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		postList: [
			{
				postUrl:'',
				avatar: '',		//帖子楼主头像
				nickname: '',		//帖子楼主昵称
				time: '',				//帖子发布时间
				content: '',				//帖子内容
				cType: 'video',		//内容附带的内容的类型。比如 image 图片，video 视频，text，纯文本
				videoUrl: '',		//视频链接
				showed:'',			//是否展示了全文
				share:{
					shared:'',			//是否分享了
					shareSum:'',		//已被分享总数
				},
				comment:[],			//评论组
				good:{				//点赞组
					gooded:'',			//是否点赞了
					goodSum:''			//帖子已被点赞总数
				},
			},
			{
				postUrl:'',
				avatar: '',		//帖子楼主头像
				nickname: '',		//帖子楼主昵称
				time: '',				//帖子发布时间
				content: '',				//帖子内容
				cType: '',		//内容附带的内容的类型。比如 image 图片，video 视频，text，纯文本
				imageUrl:null,		//视频链接
				showed:'',			//是否展示了全文
				share:{
					shared:'',			//是否分享了
					shareSum:'',		//已被分享总数
				},
				comment:[],			//评论组
				good:{				//点赞组
					gooded:'',			//是否点赞了
					goodSum:''			//帖子已被点赞总数
				},
			}
		]
	},

	videoContext:null,
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.videoContext = wx.createVideoContext('postVideo', this);
		wx.setNavigationBarTitle({
			title: '我赞过的',
		});
		  
	},

	setImage:function(){
		var text = '星空\n'+
		'午夜前\n'+
		'你一個人的凌晨演唱會\n'+
		'\n'+
		'今天聽新聞說\n'+
		'今夜有半影月蝕\n'+
		'\n'+
		'月亮暗了一點\n'+
		'星辰是不是就會更亮一點？\n'+
		'\n'+
		'時間遠了一點\n'+
		'回憶是不是就會更淡一點？\n'+
		'\n'+
		'不是每個問題\n'+
		'都需要答案\n'+
		'\n'+
		'如果你還是堅持等待\n'+
		'某個答案\n'+
		'我以這首歌曲  陪你等待⋯⋯\n'
		var imageUrl = [
			{image:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/dynamic-dynamic-Axin-avatar.jpg'}
		]
		var comment = [{},{},{}]
		this.setData({
			'postList[1].cType': 'image',
			'postList[1].avatar': 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/dynamic-dynamic-Axin-avatar.jpg',
			'postList[1].nickname': '阿信',
			'postList[1].time': '6.6',
			'postList[1].content': text,
			'postList[1].imageUrl': imageUrl,
			'postList[1].showed': false,
			'postList[1].share.shared': false,
			'postList[1].share.shareSum': 99,
			'postList[1].good.gooded': true,
			'postList[1].good.goodSum': 99
		})
	},

	setVideo:function(){
		var text = '星空\n'+
		'午夜前\n'+
		'你一個人的凌晨演唱會\n'+
		'\n'+
		'今天聽新聞說\n'+
		'今夜有半影月蝕\n'+
		'\n'+
		'月亮暗了一點\n'+
		'星辰是不是就會更亮一點？\n'+
		'\n'+
		'時間遠了一點\n'+
		'回憶是不是就會更淡一點？\n'+
		'\n'+
		'不是每個問題\n'+
		'都需要答案\n'+
		'\n'+
		'如果你還是堅持等待\n'+
		'某個答案\n'+
		'我以這首歌曲  陪你等待⋯⋯\n'
		var comment = [{},{},{}]
		this.setData({
			'postList[0].cType': 'video',
			'postList[0].avatar': 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/dynamic-dynamic-Axin-avatar.jpg',
			'postList[0].nickname': '阿信',
			'postList[0].time': '6.6',
			'postList[0].content': text,
			'postList[0].videoUrl': 'http://t.cn/A62Rzjku?m=4512607862342698&u=1265020392',
			'postList[0].showed': false,
			'postList[0].share.shared': false,
			'postList[0].share.shareSum': 99,
			'postList[0].comment': comment,
			'postList[0].good.gooded': true,
			'postList[0].good.goodSum': 99,
		})
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		this.setImage();
		this.setVideo();
	},

	showAll:function(e){
		var index = e.currentTarget.dataset.index
		var showed = e.currentTarget.dataset.showed
		if(showed){
			showed = false
		}else{
			showed = true
		}
		var x = 'postList'+'['+index+'].showed'	//将要修改数组的值转换成字符串
		this.setData({
			[x]:showed
		})
	},

	// 监听用户转发
	onShareAppMessage:function(e){
		console.log(e)
		var _this = this
		var index = e.currentTarget.dataset.index
		return{
			title:'任意门',
			path:_this.data.postList[index].postUrl
		}
	},

	sharePost:function(){

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