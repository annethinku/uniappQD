<template>
	<view class="login">
		<view class="login_title">
			设置{{type==2?'支付':''}}密码
		</view>
		<view class="login_phone">
			<view class="phead">
				<image src="../../static/images/login_iconsc.png" mode="aspectFit"></image>
			</view>
			<view class="contentPass">
				<input :type="type==2?'number':'text'" :value="code1" :placeholder="type==2?'支付密码':'账号密码'" @input="fuzhi" :maxlength="type==2?6:20" :password="show"/>
				<sunui-password @change="showPass1" />
			</view>
			<!-- <view class="inputs">
				<input :type="type==2?'number':'text'" :value="code1" :placeholder="type==2?'支付密码':'账号密码'" @input="fuzhi" :maxlength="type==2?6:20"/>
			</view> -->
		</view>
		<view class="login_phone">
			<view class="phead">
				<image src="../../static/images/login_icongou.png" mode="aspectFit"></image>
			</view>
			<view class="contentPass">
				<input :type="type==2?'number':'text'" :value="code2" placeholder="确认密码"  @input="fuzhi2" :maxlength="type==2?6:20" :password="show2"/>
				<sunui-password @change="showPass2" />
			</view>
			<!-- <view class="inputs">
				<input :type="type==2?'number':'text'" :value="code2" placeholder="确认密码"  @input="fuzhi2" :maxlength="type==2?6:20"/>
			</view> -->
		</view>
		<view class="orange-btn" @click="sureCode">
			确认
		</view>
	</view>
</template>

<script>
	import tools from '../../static/js/tools.js'
	import sunuiPassword from '@/components/sunui-password/sunui-password.vue'
	export default {
		data() {
			return {
               type:1,
			   code1:'',
			   code2:'',
			   phone:null,
			   verifycode:null,
			   show: true,
			   show2:true
			};
		},
		components:{
			sunuiPassword
		},
		onLoad(options) {
			if(options.type){
				this.type=options.type;
			}
			if(options.phone){
				// tools.getDAesString(options.phone,'phoneabc',11);
				this.phone=options.phone;
			}
			// console.log(tools.getDAesString(options.verifycode,'verifyco',8))
			if(options.verifycode){
				// tools.getDAesString(options.verifycode,'verifyco',8);
				this.verifycode=options.verifycode;
			}
		},
		methods:{
			showPass1(e) {
				this.show = e;
			},
			showPass2(e) {
				this.show2 = e;
			},
			fuzhi(e){
				this.code1=e.detail.value;
			},
			fuzhi2(e){
				this.code2=e.detail.value;
			},
			sureCode(){
				let _that=this;
				let token=uni.getStorageSync('token');
				if(!_that.code1 || !_that.code2){
					uni.showToast({
						title:"请将信息输入完整",
						icon:'none'
					})
					return false;
				}
				if(_that.code1!=_that.code2){
					uni.showToast({
						title:"两次输入密码不一致",
						icon:'none'
					})
					return false;
				}
				uni.showToast({
					icon:'loading'
				})
				// 支付密码
				if(_that.type==2){
					// 忘记支付密码 重置
					if(_that.verifycode){
						// token，mobile（电话号码），verifycode pwd（新密码）
						tools.myRequest('api.member.zf.reset', {
							mobile:_that.phone,
							verifycode:_that.verifycode,
							token: token,
							pwd:_that.code1
						}, '').then(res => {
							// console.log(res);
							uni.hideToast();
							tools.warnMessage(res.status,res.result.message,function(){
								uni.showToast({
									icon:'success',
									title:res.result.message,
									success() {
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
					}else{
						// 设置支付密码
						tools.myRequest('api.member.zf', {
							token: token,
							pwd:_that.code1
						}, '').then(res => {
							// console.log(res);
							uni.hideToast();
							tools.warnMessage(res.status,res.result.message,function(){
								uni.showToast({
									icon:'success',
									title:res.result.message,
									success() {
										setTimeout(()=>{
											uni.navigateBack({});
										},1000)
									}
								})
							});
						}).catch(error => {
							console.log('请求失败：');
							console.log(error);
						})
					}
				
				}else{
					// 设置找回账号密码
					tools.myRequest('api.login.index.verification_two_c', {
						mobile:_that.phone,
						verifycode: _that.verifycode,
						pwd:_that.code1
					}, '').then(res => {
						// console.log(res);
						uni.hideToast();
						tools.warnMessage(res.status,res.result.message,function(){
							uni.showToast({
								icon:'success',
								title:res.result.message,
								success() {
									setTimeout(()=>{
										uni.reLaunch({
											url:'../loginCode/loginCode'
										})
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
	}
</script>

<style lang="scss" scoped>

</style>
