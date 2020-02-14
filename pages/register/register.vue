<template>
	<view class="login">
		<view class="login_title">
			账号设置
			<view class="desc">
				请填写下列输入框
			</view>
		</view>
		<view class="login_phone">
			<view class="phead">
				<image src="../../static/images/login_iconsc.png" mode="aspectFit"></image>
			</view>
			<view class="inputs">
				<input type="text" value="" placeholder="设置密码" />
			</view>
		</view>
		<view class="login_phone">
			<view class="phead">
				<image src="../../static/images/login_icongou.png" mode="aspectFit"></image>
			</view>
			<view class="inputs">
				<input type="text" value="" placeholder="确认密码" />
			</view>
		</view>
		<view class="login_phone">
			<view class="phead">
				<image src="../../static/images/login_iconId.png" mode="aspectFit"></image>
			</view>
			<view class="inputs">
				<input type="text" value="" placeholder="邀请人ID" />
			</view>
		</view>
		<view class="login_phone">
			<view class="phead">
				<image src="../../static/images/login_iconyzm.png" mode="aspectFit"></image>
			</view>
			<view class="inputs">
				<input type="text" value="" placeholder="请输入验证码" />
			</view>
			<view class="yzm">
				发送验证码
			</view>
		</view>
		<view class="orange-btn">
			确认
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

</style>
