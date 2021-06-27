//Page Object
Page({
  data: {
    nullImageSum:3,
    oImage:{
      image1:null,
      image2:null,
      image3:null,
    }
  },

  optionSubmit:function(e){
    console.log(e)
  },

  addImage:function(e){
    var index = e.currentTarget.dataset.index
    var _this = this
    var nullImageSum = this.data.nullImageSum
    wx.chooseImage({
      count: nullImageSum,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (result) => {
        console.log(result)
        var imagelist = result.tempFilePaths
        var length = imagelist.length
        _this.setData({
          'oImage.image1':imagelist[0],
          'oImage.image2':imagelist[1],
          'oImage.image3':imagelist[2],
          nullImageSum:nullImageSum - length
        })
      },
      fail: () => {},
      complete: () => {}
    });
      
      
  },
  //options(Object)
  onLoad: function(options) {
    
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  