import {observable,action} from 'mobx-miniprogram'

export const store = observable({
    backgroundImages:"http://qszf7nxlq.hn-bkt.clouddn.com/upload/backgroundImage.jpg",
    selectedTabBarIndex:2,

    updateSelectedTabBarIndex :action(function(index){
        this.selectedTabBarIndex = index;
    })
})