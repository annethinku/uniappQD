<template>
	<view class="login">
		<view class="login_title">
			设置密码
		</view>
		<view class="login_phone">
			<view class="phead">
				<image src="../../static/images/login_iconsc.png" mode="aspectFit"></image>
			</view>
			<view class="inputs">
				<input type="text" value="" placeholder="账号密码" />
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
