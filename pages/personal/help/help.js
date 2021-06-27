// pages/personal/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotProblem:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hotProblem = [
      {
        problem_id:'1',
        problem_text:'我没有问题'
      },
      {
        problem_id:'2',
        problem_text:'我没有问题'
      },
      {
        problem_id:'3',
        problem_text:'我没有问题'
      },
      {
        problem_id:'4',
        problem_text:'我没有问题'
      },
      {
        problem_id:'5',
        problem_text:'我没有问题'
      },
      {
        problem_id:'6',
        problem_text:'我没有问题'
      },
    ]
    this.setData({
      hotProblem:hotProblem
    })
  },

  seeProblem:function(e){
    var problem_id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../../personal/help/problem/problem?problem_id='+problem_id,
    });
      
  },

  seeFeedback:function(e){
    wx.navigateTo({
      url:'../../personal/help/feedback/feedback'
    })
  },

  writeFeedback:function(){
    wx.navigateTo({
			url: '../../personal/opinion/opinion',
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