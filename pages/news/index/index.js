// pages/news/index/index.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        buttonSelected: '',
        Message: {
            official: [],
            letter: [],
            ait: [],
            encourage: [],
            comment: [],
        }
    },

    // 按钮点击事件
    clickButton: function(e) {
        var type = e.currentTarget.dataset.type
        this.setData({
            buttonSelected: type
        })
    },

    //官方通知栏函数

    goToOfficialTest: function(e) {
        var info = e.currentTarget.dataset.list
        var sInfo = JSON.stringify(info)
        wx.navigateTo({
            url: '../official/text/text?sinfo=' + sInfo,
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var official = require('../official/official.js')
        var letter = require('../letter/letter.js')
        var ait = require('../ait/ait.js')
        var encourage = require('../encourage/encourage.js')
        var comment = require('../comment/comment.js')
        this.setData({
            'Message.official': official.officialData.officialMessage,
            'Message.letter': letter.letterData.letterMessage,
            'Message.ait': ait.aitData.aitMessage,
            'Message.encourage': encourage.encourageData.encourageMessage,
            'Message.comment': comment.commentData.commentMessage,
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
                this.getTabBar().updateSelected(3);
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})