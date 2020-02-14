<template>
	<view>
		<view class="need_con">
			<view class="title">
				第一章 入驻 
			</view>
			  <view class="conli" v-for="(item,index) in 5" :key="index">
				  <view class="left_num">
				  	1.1
				  </view>
			  	 <view class="right_desc">
			  	 	平台开放平台暂未授权任何机构进行代理招商服务
			  	 	，入驻申请流程及相关的收费说明均
			  	 </view>
			  </view>
		</view>
		<view style="height: 128upx;"></view>
		<view class="bot_fixed_btn">
			<view class="orange">
				我已经阅读，下一步
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.need_con{
	padding: 53upx 23upx;
	font-size: 28upx;
	color: #333333;
	border-top: 1upx #AAAAAA solid;
	.title{
		margin-bottom: 40upx;
	}
	.conli{
		display: flex;
		margin-bottom: 40upx;
		.left_num{
			width: 100upx;
			flex-shrink: 0;
		}
		.right_desc{
			flex: 1;
		}
	}
}
.bot_fixed_btn{
	width: 100%;
	background-color: #FFFFFF;
	position: fixed;
	left: 0;
	bottom: 0;
	padding: 22upx 56upx;
	box-sizing: border-box;
	box-shadow: 0 -1upx 5upx #999999;
	.orange{
		height:84upx;
		line-height: 84upx;
		background:linear-gradient(0deg,rgba(255,106,52,1),rgba(252,134,63,1));
		border-radius:42upx;
		font-size: 30upx;
		color: #FFFFFF;
		font-weight: bold;
		text-align: center;
	}
}
</style>
