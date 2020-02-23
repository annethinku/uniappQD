<template>
	<view>
		<view class="suc_img">
			<image src="../../static/images/rz_success.png" mode=""></image>
		</view>
		<view class="suc_title">
			提交认证成功
		</view>
		<view class="suc_desc">
			您已经提交认证成功了，可以去提现啦~
		</view>
		<view class="common_redbtn" @click="returnTop">
			去提现
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			returnTop(){
				uni.navigateBack({
					delta:2
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.suc_img{
	width: 292upx;
	height: 292upx;
	margin: 0 auto 103upx;
	image{
		width: 100%;
		height: 100%;
	}
}
.suc_title{
	text-align: center;
	font-size: 50upx;
	color: #333333;
	font-weight: bold;
}
.suc_desc{
	font-size: 28upx;
	color: #333333;
	margin-top: 44upx;
	text-align: center;
}
</style>
