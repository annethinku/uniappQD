<template>
	<view class="login">
		<view class="login_title">
			您可能遇到以下问题
		</view>
	   <view class="login_phone">
	   	<view class="phead">
	   		忘记/更换手机号
	   	</view>
	   	<view class="jiantou">
	   		<image src="../../static/images/bbs_jian2@2x.png" mode=""></image>
	   	</view>
	   </view>
	   <navigator url="../foundPassword/foundPassword" hover-class="none">
		   <view class="login_phone">
		   	<view class="phead">
		   		忘记密码
		   	</view>
		   	<view class="jiantou">
		   		<image src="../../static/images/bbs_jian2@2x.png" mode=""></image>
		   	</view>
		   </view>
	   </navigator>
	   <view class="login_phone">
	   	<view class="phead">
	   		客服帮助
	   	</view>
	   	<view class="jiantou">
	   		<image src="../../static/images/bbs_jian2@2x.png" mode=""></image>
	   	</view>
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
		
		}
	}
</script>

<style lang="scss" scoped>
	.jiantou{
		margin-left: auto;
		image{
			width: 10upx;
			height: 16upx;
		}
	}
</style>
