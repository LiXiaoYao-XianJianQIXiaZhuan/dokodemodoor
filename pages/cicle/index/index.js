//Page Object
Page({
	data: {
		topTapIndex: 0,			//顶部标签索引
		indexContentIndex: 0,	//轮播图索引
		postShareIndex:null,	//当前分享帖子的索引
		squareDATA: null,		//广场帖子数据
		hotDATA:null,			//热门帖子数据
		focusDATA:null			//关注帖子数据
	},

	// 跳转到搜索页面
	search: function () {
		wx.navigateTo({
			url: ''
		})
	},

	//导航标题页切换
	indexChangeContent: function (e) {
		var index = e.currentTarget.dataset.item	//获取点击的是哪一个页面，广场，热门，还是关注或喜欢
		this.setData({
			indexContentIndex: index
		})
	},
	//内容页切换
	indexChangeTab: function (e) {
		var index = e.detail.current	//页面变换获取变换的页面标记
		this.setData({
			topTapIndex: index		//改变顶部标题栏
		})
	},
	// 跳转到发表动态详情页面
	fabiao: function () {
		wx.navigateTo({
			url: '/pages/cicle/report/report'
		})
	},
	// 获取从组件传过来的值
	getComponentData:function(e){
		this.setData({
			postShareIndex:e.detail.postShareIndex
		})
	},


	//options(Object)
	onLoad: function (options) {
		var squareDATA = [
			// Type:区分类型是图片的还是视频的 0是图片，1是视频
			// avatar：头像，nickname:微博名字，releaseTime：发布时间，releaseContent:发布内容
			// blogURL:微博链接，releaseImage:微博内容里的图片，releaseVideo：微博内容里的视频
			{
				//帖子前台数据
				showed: false,		//是否显示全文标识
				showBtn: false,		//是否显示全文显示全文按钮标识
				lineNum: 3,			//帖子最多显示行数
				//帖子后台数据
				userid: 'ddd',
				postid: '11',
				type: 0,
				avatar: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/dynamic-dynamic-Axin-avatar.jpg',
				nickname: '阿信',
				time: '2020-05-20',
				text: '2020520\n' +
					'想找一張比較溫暖的照片陪伴大家\n' +
					'但只找到這張⋯⋯\n' +
					'\n' +
					'有人家裡需要我上門打掃的嗎？',
				image: [
					'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg',
					'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg',
					'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg',
					'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg',
					'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg',
					'https://wx3.sinaimg.cn/mw690/001nBTAIgy1gpql76nkovj611x1kwh2y02.jpg',
				],
				video: null,
				good: {
					gooded: false,	//是否点赞了
					goodSum: 99,		//点赞数
				},
				commentSum: 99,		//评论数
				shareSum: 99,		//分享转发数
				star:'upvote',
			},
			{
				//帖子前台数据
				showed: false,
				showBtn: false,
				lineNum: 3,
				//帖子后台数据
				userid: 'wcx',
				postid: '12',
				type: 1,
				avatar: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
				nickname: '阿信',
				time: '2020-05-20',
				text: '2020520\n' +
					'想找一張比較溫暖的照片陪伴大家\n' +
					'但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯但只找到這張⋯⋯但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯\n' +
					'\n' +
					'有人家裡需要我上門打掃的嗎？',
				image: [],
				video: 'http://qszf7nxlq.hn-bkt.clouddn.com/video/%E6%81%8B%E7%88%B1ing.mp4',
				good: {
					gooded: false,	//是否点赞了
					goodSum: 99,		//点赞数
				},
				commentSum: 99,		//评论数
				shareSum: 99,		//分享转发数
			}
		]
		var hotDATA = [
			// Type:区分类型是图片的还是视频的 0是图片，1是视频
			// avatar：头像，nickname:微博名字，releaseTime：发布时间，releaseContent:发布内容
			// blogURL:微博链接，releaseImage:微博内容里的图片，releaseVideo：微博内容里的视频
			{
				//帖子前台数据
				showed: false,		//是否显示全文标识
				showBtn: false,		//是否显示全文显示全文按钮标识
				lineNum: 3,			//帖子最多显示行数
				//帖子后台数据
				userid: 'ddd',
				postid: '11',
				type: 0,
				avatar: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
				nickname: '阿信',
				time: '2020-05-20',
				text: '2020520\n' +
					'想找一張比較溫暖的照片陪伴大家\n' +
					'但只找到這張⋯⋯\n' +
					'\n' +
					'有人家裡需要我上門打掃的嗎？',
				image: [
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
				],
				video: null,
				good: {
					gooded: false,	//是否点赞了
					goodSum: 99,		//点赞数
				},
				commentSum: 99,		//评论数
				shareSum: 99,		//分享转发数
			},
			{
				//帖子前台数据
				showed: false,
				showBtn: false,
				lineNum: 3,
				//帖子后台数据
				userid: 'wcx',
				postid: '12',
				type: 1,
				avatar: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
				nickname: '阿信',
				time: '2020-05-20',
				text: '2020520\n' +
					'想找一張比較溫暖的照片陪伴大家\n' +
					'但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯但只找到這張⋯⋯但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯\n' +
					'\n' +
					'有人家裡需要我上門打掃的嗎？',
				image: [],
				video: 'http://qszf7nxlq.hn-bkt.clouddn.com/video/%E6%81%8B%E7%88%B1ing.mp4',
				good: {
					gooded: false,	//是否点赞了
					goodSum: 99,		//点赞数
				},
				commentSum: 99,		//评论数
				shareSum: 99,		//分享转发数
			}
		]
		var focusDATA = [
			// Type:区分类型是图片的还是视频的 0是图片，1是视频
			// avatar：头像，nickname:微博名字，releaseTime：发布时间，releaseContent:发布内容
			// blogURL:微博链接，releaseImage:微博内容里的图片，releaseVideo：微博内容里的视频
			{
				//帖子前台数据
				showed: false,		//是否显示全文标识
				showBtn: false,		//是否显示全文显示全文按钮标识
				lineNum: 3,			//帖子最多显示行数
				//帖子后台数据
				userid: 'ddd',
				postid: '11',
				type: 0,
				avatar: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
				nickname: '阿信',
				time: '2020-05-20',
				text: '2020520\n' +
					'想找一張比較溫暖的照片陪伴大家\n' +
					'但只找到這張⋯⋯\n' +
					'\n' +
					'有人家裡需要我上門打掃的嗎？',
				image: [
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
					'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
				],
				video: null,
				good: {
					gooded: false,	//是否点赞了
					goodSum: 99,		//点赞数
				},
				commentSum: 99,		//评论数
				shareSum: 99,		//分享转发数
			},
			{
				//帖子前台数据
				showed: false,
				showBtn: false,
				lineNum: 3,
				//帖子后台数据
				userid: 'wcx',
				postid: '12',
				type: 1,
				avatar: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
				nickname: '阿信',
				time: '2020-05-20',
				text: '2020520\n' +
					'想找一張比較溫暖的照片陪伴大家\n' +
					'但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯但只找到這張⋯⋯但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯\n' +
					'但只找到這張⋯⋯\n' +
					'\n' +
					'有人家裡需要我上門打掃的嗎？',
				image: [],
				video: 'http://qszf7nxlq.hn-bkt.clouddn.com/video/%E6%81%8B%E7%88%B1ing.mp4',
				good: {
					gooded: false,	//是否点赞了
					goodSum: 99,		//点赞数
				},
				commentSum: 99,		//评论数
				shareSum: 99,		//分享转发数
			}
		]
		this.setData({
			squareDATA:squareDATA,
			hotDATA:hotDATA,
			focusDATA:focusDATA
		})
	},
	onReady: function () {

	},
	//设置tabbar
	onShow: function () {
		if (typeof this.getTabBar === 'function' &&
			this.getTabBar()) {
				this.getTabBar().updateSelected(0);
		}
	},
	onHide: function () {
	},
	onUnload: function () {

	},
	onPullDownRefresh: function () {

	},
	onReachBottom: function () {

	},
	onShareAppMessage: function (res) {
		var flag = res.from;		//判断用户点的是右上角的分享还是按钮分享
		var postid = null;
		var postShareIndex = this.data.postShareIndex;
		if(this.data.topTapIndex === 0){
			postid = this.data.squareDATA[postShareIndex].postid
		}else if(this.data.topTapIndex === 1){
			postid = this.data.hotDATA[postShareIndex].postid
		}else{
			postid = this.data.hotDATA[postShareIndex].postid
		}
		var _path = '/pages/postDetails/postDetails?postid=' + postid;
		if(flag === 'button'){
			return{
				title:'给你分享了一个有趣的帖子',
				path:_path
			}
		}
	},
	onPageScroll: function () {

	},
	//item(index,pagePath,text)
	onTabItemTap: function (item) {

	}
});
