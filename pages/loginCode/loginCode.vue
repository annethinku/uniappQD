<template>
	<view class="login">
		<view class="login_title">
			欢迎登录奇豆行
		</view>
		<view class="login_phone">
			<view class="phead">
				<image src="../../static/images/login_iconId.png" mode="aspectFit"></image>
			</view>
			<view class="inputs">
				<input type="text" value="" placeholder="手机号" />
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
		<view class="orange-btn">
			登录
		</view>
		<view class="other-contorl">
			<navigator url="../login/login" hover-class="none">
				<view class="code-login">
					验证码登录
				</view>
			</navigator>
			<view class="line"></view>
			<navigator url="../login/login" hover-class="none">
				<view class="code-login">
					注册
				</view>
			</navigator>
		</view>
		<view class="other-login">
			<view class="name">
				第三方登录
			</view>
			<view class="icon">
				<image src="../../static/images/login-wechat.png" mode=""></image>
			</view>
		</view>
		<view class="gray_tis">
			登录即同意 <text>《XXXX协议》</text>并授权获得本手机号
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
