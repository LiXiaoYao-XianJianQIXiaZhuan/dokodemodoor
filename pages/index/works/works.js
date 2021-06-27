// pages/index/works/works.js
// 专辑数据
//Page Object
var data = {
	isPlay:false,		//是否在播放歌曲
	isPlayList:false,	//是否展示播放列表
	playLogoUrl:'http://qszf7nxlq.hn-bkt.clouddn.com/upload/works-playLogo.jpg',	//播放器图片
	playindex:'',		//播放歌曲的索引
	playListTitle:'',	//播放列表顶部
	nowsingeindex:'',
	// 专辑数据
	albumdata:[
		
	],
	// 单曲数据
	singleListData:[
		
	],
	playList:[],		//播放列表
	// 播放与暂停音乐
	play:function(){
		var isPlay = this.isPlay
		if(isPlay){
			isPlay = false
		}else{
			isPlay = true
		}
		return isPlay
	},
	// 展示播放列表函数
	showPlaylist:function(){
		var isPlayList = this.isPlayList
		if(isPlayList){
			isPlayList = false
		}else{
			isPlayList = true
		}
		return isPlayList
	},


}


module.exports = {
	worksData:data,
}