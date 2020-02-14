<template>
	<view>
		<view class="common_title">
			产品代理合作申请
		</view>
		<view class="common_lis">
			<view class="left_icon">
				<image src="../../static/images/hezuo_icon01.png" mode=""></image>
			</view>
			<view class="center_fonts">
				<view class="name">
					区域代理申请
				</view>
				<view class="desc elisOne">
					更多权限，专属一人
				</view>
			</view>
			<view class="right_jiant">
				<image src="../../static/images/bbs_jian2@2x.png" mode=""></image>
			</view>
		</view>
		<view class="common_title">
			商家入驻
		</view>
		<navigator :url="item.url" hover-class="none" v-for="(item,index) in arrs" :key="index">
			<view class="common_lis">
					<view class="left_icon">
						<image :src="'../../static/images/hezuo_icon0'+(index+2)+'.png'" mode=""></image>
					</view>
					<view class="center_fonts">
						<view class="name">
							{{item.name}}
						</view>
						<view class="desc elisOne">
							{{item.desc}}
						</view>
					</view>
					<view class="right_jiant">
						<image src="../../static/images/bbs_jian2@2x.png" mode=""></image>
					</view>
				</view>
			
		</navigator>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				arrs:[{name:'餐饮商家入驻',desc:"百万流量、款项T+1流转、费率更低...",url:'../ruzhu/ruzhu'},
				{name:'非餐饮商家入驻',desc:"休闲娱乐、旅游、美容美甲、健身...",url:'../ruzhu/ruzhu'},
				{name:'酒店商家入驻',desc:"百万流量、款项T+1流转、费率更低...",url:'../ruzhu/ruzhu'},
				{name:'影院商家入驻',desc:"百万流量、款项T+1流转、费率更低...",url:'../ruzhu/ruzhu'}]
			};
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #F8F9F7;
}
.common_title{
	margin: 42upx 0 25upx 33upx;
	font-size: 30upx;
	color: #333333;
	font-weight: bold;
}
.common_lis{
	height:180upx;
	background:rgba(255,255,255,1);
	box-shadow:0 1upx 20upx 0 rgba(170,170,170,0.2);
	border-radius:20upx;
	margin: 0 26upx 20upx 20upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 34upx 0 29upx;
	.left_icon{
		flex-shrink: 0;
		image{
			width: 52upx;
			height: 52upx;
		}
	}
	.center_fonts{
		width:50%;
		margin-left: 27upx;
		flex:1;
		.name{
			font-size: 26upx;
			color: #333333;
			font-weight: bold;
		}
		.desc{
			width: 90%;
			font-size: 26upx;
			color: #999999;
			margin-top: 22upx;
		}
	}
	.right_jiant{
		flex-shrink: 0;
		image{
			width: 12upx;
			height: 20upx;
		}
	}
}
</style>
