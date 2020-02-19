<template>
	<view class="login">
         <view class="big_img">
         	<image src="../../static/images/login_updateCode.png" mode="widthFix"></image>
         </view>
		<view class="gray_tis">
			修改密码成功！
		</view>
		<navigator url="../login/login" hover-class="none">
			<view class="orange-btn">
				跳转登陆
			</view>
		</navigator>
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
.big_img{
	text-align: center;
	margin: 106upx 0 71upx;
	image{
		width: 429upx;
	}
}
</style>
