Page({
  data: { 
    loginStatus:false,
    userInfo:{
      username: '努力努力再努力',
      sign: '今天又是改论文的一天',
      imgUrl: 'http://qszf7nxlq.hn-bkt.clouddn.com/upload/avatar.jpg',
    },
    fans:'99',
    focus:'99',
    love:'99',
  },
  

  // 跳转到编辑资料详情页面
  information: function () {
    wx.navigateTo({
      url: '/pages/personal/information/information'
    })
  },
  // 跳转到个人账户页面
  account: function () {
    wx.navigateTo({
      url: '/pages/personal/account/account'
    })
  },
  // 跳转到我的收藏页面
  collect: function () {
    wx.navigateTo({
      url: '/pages/personal/collect/collect'
    })
  },
  // 跳转到意见反馈页面
  opinion: function () {
    wx.navigateTo({
      url: '/pages/personal/opinion/opinion'
    })
  },
  // 跳转到帮助中心详情页
  help: function () {
    // 第一种方式：保留当前页面，跳转后单击页面左上角箭头，返回上一个页面
    wx.navigateTo({
      url: '/pages/personal/help/help'
    })
  },
  // 跳转到粉丝详情页
  goToFans: function () {
    // 第一种方式：保留当前页面，跳转后单击页面左上角箭头，返回上一个页面
    wx.navigateTo({
      url: '/pages/personal/fans/fans'
    })
  },
  // 跳转到关注详情页
  goToFocus: function () {
    // 第一种方式：保留当前页面，跳转后单击页面左上角箭头，返回上一个页面
    wx.navigateTo({
      url: '/pages/personal/focus/focus'
    })
  },
  // 跳转到收藏详情页
  goToLove: function () {
    // 第一种方式：保留当前页面，跳转后单击页面左上角箭头，返回上一个页面
    wx.navigateTo({
      url: '/pages/personal/love/love'
    })
  },

  userLogin:function(){
    var avatar = new String;
    var nickname = new String;
    var gender = null;
    wx.getUserProfile({
      withCredentials: 'false',
      lang: 'zh_CN',
      desc:'用于用户登录',
      timeout:10000,
      success: (res) => {
        var userInfo = res.userInfo;
        avatar = userInfo.avatarUrl;
        nickname = userInfo.nickName;
        gender = userInfo.gender;
        wx.login({
          timeout:10000,
          success: (res) => {
            const code = res.code
            wx.request({
              url: 'http://127.0.0.1:8080/dokodemodoorServer/userLogin',
              data: {
                code:code,
                avatar:avatar,
                nickname:nickname,
                gender:gender
              },
              header: {'content-type':'application/json'},
              method: 'GET',
              dataType: 'json',
              responseType: 'text',
              success: (res) => {
                console.log(res);
              },
            });
          },
        });
      },
    });
  },
  
  onLoad:function(){
    const app = getApp();
    var loginStatus = app.globalData.loginStatus;
    this.setData({
      loginStatus:loginStatus
    })
      
  },

  //设置tabbar 
	onShow: function () {
		if (typeof this.getTabBar === 'function' &&
		  this.getTabBar()) {
        this.getTabBar().updateSelected(4);
		}
	},



})