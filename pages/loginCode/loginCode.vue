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
				<input type="text" :value="phone" placeholder="手机号" @input="fuzhi"/>
			</view>
		</view>
		<view class="login_phone">
			<view class="phead">
				<image src="../../static/images/login_icongou.png" mode="aspectFit"></image>
			</view>
			<view class="contentPass">
				<input type="text" :value="code" :password="show" placeholder="确认密码"  @input="fuzhicode"/>
				<sunui-password @change="showPass" />
			</view>
			<!-- <view class="inputs">
				<input type="text" :value="code" placeholder="确认密码" @input="fuzhicode"/>
			</view> -->
		</view>
		<view class="orange-btn" @click="login">
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
	import tools from '../../static/js/tools.js'
	import sunuiPassword from '@/components/sunui-password/sunui-password.vue'
	export default {
		data() {
			return {
				phone:'',
				code:'',
				show: true
			};
		},
		components:{
			sunuiPassword
		},
		methods:{
			showPass(e) {
				console.log(e);
				this.show = e;
			},
			fuzhi(e){
				this.phone=e.detail.value;
			},
			fuzhicode(e){
				this.code=e.detail.value;
			},
			login(){
				let _that = this;
				let token = uni.getStorageSync('token');
				if(!_that.phone){
					uni.showToast({
						title:'请输入您的手机号',
						icon:'none'
					})
					return false;
				}
				 if(!(/^1[3456789]\d{9}$/.test(_that.phone))){ 
					 uni.showToast({
					 	title:'手机号码有误，请重填',
					 	icon:'none'     
					 })
						return false; 
				} 
				if(!_that.code){
					uni.showToast({
						title:'请输入您的密码',
						icon:'none'
					})
					return false;
				}
				tools.myRequest('api.login', {
					mobile: _that.phone,
					pwd: _that.code
				}, 'POST').then(res => {
					// console.log(res);
					tools.warnMessage(res.status, res.result.message, function() {
						uni.showToast({
							title:"登录成功",
							icon:"none",
							success() {
								uni.setStorageSync('token', res.result.token);
								setTimeout(()=>{
									uni.navigateBack({
										delta:4
									});
								},1000)
							}
						})
					});
				
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
