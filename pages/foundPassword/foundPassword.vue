<template>
	<view class="login">
		<view class="login_title">
			忘记密码
			<view class="desc">
				输入您的手机号
			</view>
		</view>
		<view class="login_phone">
			<view class="phead">
				+86 >
			</view>
			<view class="inputs">
				<input type="text" :value="phone" @input="fuzhi"/>
			</view>
			<view class="close" v-show="phone" @click="clearPhone">
				<image src="../../static/images/login_close.png" mode=""></image>
			</view>
		</view>
	
		<view class="orange-btn">
			立即找回
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:''
			};
		},
		methods:{
			fuzhi(e){
				this.phone=e.detail.value;
			},
			clearPhone(){
				this.phone='';
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
