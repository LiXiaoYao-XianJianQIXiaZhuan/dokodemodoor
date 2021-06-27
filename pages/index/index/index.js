// pages/index/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //index页面的data
        topTapIndex: 0,
        indexContentIndex: 0,
        //dymanic页面的data
        trip: [ //行程内容
            //time：行程时间，place：行程地点，title：行程名称
        ],
        dynamic: [
            // avatar：头像，nickname:微博名字，releaseTime：发布时间，releaseContent:发布内容
            // blogURL:微博链接，releaseImage:微博内容里的图片，releaseVideo：微博内容里的视频
            //type类型说明：microBlog 发布的微博,hot微博热门,

        ],
        // works页面数据
        worksData: '',
        // information页面数据
        informationData: ''

    },

    


    //标题页切换
    indexChangeContent: function(e) {
        var index = e.currentTarget.dataset.item //获取点击的是哪一个页面，动态，作品，还是资讯
        this.setData({
            indexContentIndex: index
        })
    },
    //内容页切换
    indexChangeTab: function(e) {
        var index = e.detail.current //页面变换获取变换的页面标记
        this.setData({
            topTapIndex: index //改变顶部标题栏
        })
    },


    // dymamic页面的函数
    //跳转行程详细页面函数
    goToTrip: function() {
        var dymamic = require('../dymamic/dymamic.js')
        dymamic.goToTrip();
    },
    //获取行程页面数据函数
    setTrip: function() {
        var _this = this
        wx.request({
            url: 'http://localhost:8080/dokodemodoorServer/getAllTrip',
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            method: 'POST',
            success: (res) => {
                var dataList = res.data.dataList
                var trip = [];
                for (var i = 0; i < 3; i++) {
                    trip.push(dataList[i])
                }
                _this.setData({
                    trip: trip
                })
            },
            fail: () => {},
            complete: () => {}
        });
    },
    //跳转微博详情页面函数
    goToText: function(e) {
        console.log(e);
        var dynamicid = e.currentTarget.dataset.microblogid;
        wx.navigateTo({
            url: '../../index/dymamic/text/text?dynamicid=' + dynamicid,
        });
    },
    //查看图片大图
    showImage: function(e) {
        var image = e.currentTarget.dataset.image
        wx.previewImage({
            current: '',
            urls: [
                image
            ],
        });

    },
    //获取微博页面数据函数
    setDynamicData: function() {
        var _this = this
        var datalist = null;
        wx.request({
            url: 'http://127.0.0.1:8080/dokodemodoorServer/getAllMicroblog',
            data: {},
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            method: 'GET',
            success:function(res){
                datalist = res.data.dataList
                for(var i in datalist){
                    if(datalist[i].type === 'starUpvote'){
                        var s_microblog = datalist[i]
                        var m_id =  s_microblog.id;
                        wx.request({
                            url:'http://127.0.0.1:8080/dokodemodoorServer/getStarUpvoteByMicroblogid',
                            data:{
                                id:m_id,
                                type:'upvote'
                            },
                            header:{
                                'content-type': 'application/x-www-form-urlencoded',
                                'Accept': 'application/json'
                            },
                            method:'POST',
                            success:(res)=>{
                                var upvote_id = res.data.data.microblogid;
                                for(var j in datalist){
                                    if(datalist[j].id === upvote_id){
                                        var upvote_microblog = datalist[j];
                                        upvote_microblog['starNickname'] = res.data.data.nickname;
                                        upvote_microblog['starAvatar'] = res.data.data.avatar;
                                        upvote_microblog['upvoteTime'] = res.data.data.time;
                                        datalist[j] = upvote_microblog;
                                        _this.setData({
                                            dynamic:datalist
                                        })
                                    }
                                }
                            }
                        })
                    }else if(datalist[i].type ==='share'){
                        var s_microblog = datalist[i]
                        var m_id =  s_microblog.id;
                        wx.request({
                            url:'http://127.0.0.1:8080/dokodemodoorServer/getStarUpvoteByMicroblogid',
                            data:{
                                id:m_id,
                                type:'share'
                            },
                            header:{
                                'content-type': 'application/x-www-form-urlencoded',
                                'Accept': 'application/json'
                            },
                            method:'POST',
                            success:(res)=>{
                                var upvote_id = res.data.data.microblogid;
                                for(var j in datalist){
                                    if(datalist[j].id === upvote_id){
                                        var upvote_microblog = datalist[j];
                                        upvote_microblog['starNickname'] = res.data.data.nickname;
                                        upvote_microblog['starAvatar'] = res.data.data.avatar;
                                        upvote_microblog['shareTime'] = res.data.data.time;
                                        upvote_microblog['shareContent'] = res.data.data.content
                                        datalist[j] = upvote_microblog;
                                        _this.setData({
                                            dynamic:datalist
                                        })
                                    }
                                }
                            }
                        })
                    }
                }

            },
        });

    },
// =================================================
    //works页面的函数 start
    innerAudioCtx: null,
    //播放函数
    play: function() {
        var isPlay = this.data.worksData.play();
        if (isPlay) {
            this.innerAudioCtx.play();
        } else {
            this.innerAudioCtx.pause();
        }
        this.setData({
            'worksData.isPlay': isPlay
        })
    },
    //弹出播放列表
    showPlaylist: function() {
        var isPlayList = this.data.worksData.showPlaylist();
        this.setData({
            'worksData.isPlayList': isPlayList
        })
    },
    //添加音乐
    setMusic: function(index) {
        // 将播放列表导出
        var nowPlayList = this.data.worksData.playList
        if (nowPlayList.length == 0) {
            return
        }
        // 提取要播放的歌曲
        var music = nowPlayList[index]
            // 提取要播放歌曲的链接
        var src = music.songUrl
            // 将歌曲链接放入播放器当中
        this.innerAudioCtx.src = src
            // 播放歌曲
        this.setData({
            'worksData.playindex': index,
            'worksData.isPlay': true
        })
        this.innerAudioCtx.play();
    },

    // 添加专辑至播放列表
    addAlbumMusic: function(e) {
        // 获取要添加的专辑序号
        var index = e.currentTarget.dataset.albumindex;
        // 从专辑数组中取出专辑信息
        var album = this.data.worksData.albumdata[index];
        // 获取播放器logo图片
        var playlogo = album.albumImage
            // 获取专辑名称,将其设置为播放列表title
        var playListTitle = album.albumName
            // 获取播放列表
        var playlist = album.songList.slice(0);
        this.setData({
            'worksData.playLogoUrl': playlogo,
            'worksData.playListTitle': playListTitle,
            'worksData.playList': playlist,
            'worksData.playindex': 0,
        })
        this.setMusic(0);
    },
    // 点击播放列表切换歌曲
    change: function(e) {
        // 获取点击的歌曲索引
        var index = e.currentTarget.dataset.index
        this.setMusic(index)
    },

    //单曲列表添加曲目
    singeChange: function(e) {
        var singleindex = e.currentTarget.dataset.index //单曲列表播放索引
        var song = e.currentTarget.dataset.song //获取歌曲信息
        var nowPlayList = this.data.worksData.playList //获取当前播放列表
        var songindex = null;
        if (nowPlayList.length != 0) {
            for (var i in nowPlayList) {
                if (nowPlayList[i].songName == song.songName) {
                    songindex = i
                }
            }
            if (songindex === null) {
                nowPlayList.push(song)
                songindex = nowPlayList.length - 1
            }
        } else {
            nowPlayList.push(song)
            songindex = nowPlayList.length - 1
        }
        this.setData({
            'worksData.playList': nowPlayList,
            'worksData.playindex': songindex,
            'worksData.singleindex': singleindex,
        })
        this.setMusic(songindex)

    },

    addAllMusic: function() {
        var playlist = this.data.worksData.singleListData //获取单曲列表所有歌曲
        var playListTitle = '单曲列表'
        this.setData({
            'worksData.playListTitle': playListTitle,
            'worksData.playList': playlist,
            'worksData.playindex': 0,
            'worksData.nowsingleindex': 0
        })
        this.setMusic(0);
    },

    addPlaylist: function(e) {
        var playlist = this.data.worksData.playList //获取当前播放列表
        var index = e.currentTarget.dataset.index
        var music = this.data.worksData.singleListData[index]
        playlist.push(music)
        this.setData({
            'worksData.playList': playlist,
        })
    },

    videoPlay: function(e) {
        var song = e.currentTarget.dataset.song
        var video = JSON.stringify(song)
        wx.navigateTo({
            url: '../../index/works/video/video?video=' + video
        })
    },

    setAlbumData: function() {
        var _this = this
        wx.request({
            url: 'http://127.0.0.1:8080/dokodemodoorServer/getAllAlbum',
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            method: 'POST',
            success: (res) => {
                _this.setData({
                    'worksData.albumdata': res.data.dataList
                })
            },
            fail: () => {},
            complete: () => {}
        });
    },

    setSingleListData: function() {
        var _this = this
        wx.request({
            url: 'http://127.0.0.1:8080/dokodemodoorServer/getMusic',
            data: { albumid: 0 },
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            method: 'POST',
            success: (res) => {
                _this.setData({
                    'worksData.singleListData': res.data.dataList
                })
            },
            fail: () => {},
            complete: () => {}
        });
    },
    // works页面函数end//
    // ======================================================
    //****information 页面函数start
    goToDetail: function(e) {
        var newsid = e.currentTarget.dataset.newsid;
        wx.navigateTo({
			url: '../../index/information/detail/detail?newsid=' + newsid,
		});
    },


    setInformationData: function() {
        var _this = this
        wx.request({
            url: 'http://127.0.0.1:8080/dokodemodoorServer/getAllNews',
            data: {},
            header: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            method: 'POST',
            success: (res) => {
                console.log(res);
                _this.setData({
                    'informationData.informationList': res.data.dataList
                })
            },
            fail: () => {},
            complete: () => {}
        });
    },
    // information 页面函数end
    // =====================================================
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var works = require('../works/works.js')
        var information = require('../information/information.js')
        this.setData({
            topTapIndex: 0,
            indexContentIndex: 0,
            worksData: works.worksData,
            informationData: information.informationData,
        })
        this.setDynamicData();
        this.setTrip();
        this.setAlbumData();
        this.setSingleListData();
        this.setInformationData();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        this.innerAudioCtx = wx.createInnerAudioContext();
        this.setMusic(0);
        this.innerAudioCtx.onEnded((res) => {
            if (this.data.worksData.playList[this.data.worksData.playindex + 1] != null) {
                this.setMusic(this.data.worksData.playindex + 1)
            } else {
                this.setMusic(0);
            }
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
                this.getTabBar().updateSelected(2);
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