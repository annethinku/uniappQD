<template name="tabBar">
	<view class="tabbar_box">
		<block v-for="(item,index) in tabbar.list" :key="index">
			<navigator class="tabbar_nav" :url="item.pagePath" :style="'color:'+(index==mindex ? tabbar.selectedColor : tabbar.color)"
			 hover-class="none" :open-type="item.text == 'vip' ?'navigate':'reLaunch'">
				<image class="tabbar_icon" :src="index==mindex?item.selectedIconPath:item.iconPath"></image>
				<text v-show="item.text!='vip'">{{item.text}}</text>
			</navigator>
		</block>
	</view> 
</template>

<script>
	export default {
		props:['mindex'],
		data() {
			return {
				tabbar: {
				      color: "#AAAAAA",
				      selectedColor: "#FFA873",
				      selectedColor02: "#FFA873",
				      list: [
				        {
				          "pagePath": "/pages/index/index",
				          "text": "首页",
				          "iconPath": "/static/images/tabbar_1.png",
				          "selectedIconPath": "/static/images/tabbar_01.png",
				          "selected": true
				        },
				        {
				          "pagePath": "/pages/hots/hots",
				          "text": "直播",
				          "iconPath": "/static/images/tabbar_2.png",
				          "selectedIconPath": "/static/images/tabbar_02.png",
				          "selected": false
				        },
				        {
				          "pagePath": "/pages/vip/vip",
				          "text": "vip",
				          "iconPath": "/static/images/tabbar_3.png",
				          "selectedIconPath": "/static/images/tabbar_03.png",
				          "selected": false
				        },
				        {
				          "pagePath": "/pages/bbs/bbs",
				          "text": "社区",
				          "iconPath": "/static/images/tabbar_4.png",
				          "selectedIconPath": "/static/images/tabbar_04.png",
				          "selected": false
				        },
				        {
				          "pagePath": "/pages/my/my",
				          "text": "我的",
				          "iconPath": "/static/images/tabbar_5.png",
				          "selectedIconPath": "/static/images/tabbar_05.png",
				          "selected": false
				        }
				      ],
				    }
			};
		}
	}
</script>

<style lang="scss">
	.tabbar_box {
		display: flex;
		display: -webkit-flex;
		justify-content: space-around;
		-webkit-justify-content: space-around;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		height: 98upx;
		background: #FFFFFF;
	}

	.tabbar_nav {
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		-webkit-flex-direction: column;
		justify-content: center;
		-webkit-justify-content: center;
		align-items: center;
		font-size: 22upx;
		font-weight: bold;
		-webkit-align-items: center;
		height: 100%;
	}

	.tabbar_icon {
		width: 45upx;
		height: 45upx;
		flex-shrink: 0;
		-webkit-flex-shrink: 0;
		margin-bottom: 5upx;
	}

	.tabbar_nav:nth-child(3) .tabbar_icon {
		width: 110upx;
		height: 110upx;
		margin-top: -10upx;
		background-color: #FFFFFF;
		border-radius: 50%;
	}
</style>
