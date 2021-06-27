import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../store/store'
Component({
	data: {
		color: "#ccc",
		selectedColor: "#6495ED",
		borderStyle: "black",
		backgroundColor: "#fff",
		list: [
			{
				pagePath: "/pages/cicle/index/index",
				iconPath: "/images/tabbar-cicle-unchecked-icon.png",
				selectedIconPath: "/images/tabbar-cicle-checked-icon.png",
				text: "圈子",
			},
			{
				pagePath: "/pages/periphery/index/index",
				iconPath: "/images/tabbar-periphery-unchecked-icon.png",
				selectedIconPath: "/images/tabbar-periphery-checked-icon.png",
				text: "周边",
			},
			{
				pagePath: "/pages/index/index/index",
				iconPath: "/images/tabbar-index-default-icon.jpg",
				selectedIconPath: "/images/tabbar-index-default-icon.jpg",
			},
			{
				pagePath: "/pages/news/index/index",
				iconPath: "/images/tabbar-news-unchecked-icon.png",
				selectedIconPath: "/images/tabbar-news-checked-icon.png",
				text: "消息",
			},
			{
				pagePath: "/pages/personal/index/index",
				iconPath: "/images/tabbar-personal-unchecked-icon.png",
				selectedIconPath: "/images/tabbar-personal-checked-icon.png",
				text: "个人",
			}
		]
	},

	behaviors: [storeBindingsBehavior],	//通过storeBindingsBehavior实现自动绑定

	storeBindings: {
		store,	//绑定指定的store
		fields: {	//指定要绑定的数据
			selected: 'selectedTabBarIndex'
		},
		actions: {	//指定要绑定的方法
			updateSelected: 'updateSelectedTabBarIndex'
		}
	},

	methods: {
		switchTab(e) {
			const data = e.currentTarget.dataset;
			const url = data.path;
			this.updateSelected(data.index);
			wx.switchTab({ url })
		}
	}
})