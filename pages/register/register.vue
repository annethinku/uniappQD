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
			<view class="contentPass">
				<input type="text" :value="code1" :password="show" placeholder="设置密码"  @input="fuzhi"/>
				<sunui-password @change="showPass1" />
			</view>
			<!-- <view class="inputs">
				<input type="text" :value="code1" placeholder="设置密码" @input="fuzhi"/>
			</view> -->
		</view>
		<view class="login_phone">
			<view class="phead">
				<image src="../../static/images/login_icongou.png" mode="aspectFit"></image>
			</view>
			<view class="contentPass">
				<input type="text" :value="code2" :password="show2" placeholder="确认密码"  @input="fuzhi2"/>
				<sunui-password @change="showPass2" />
			</view>
		<!-- 	<view class="inputs">
				<input type="text" :value="code2" placeholder="确认密码" @input="fuzhi2"/>
			</view> -->
		</view>
		<view class="login_phone">
			<view class="phead">
				<image src="../../static/images/login_iconId.png" mode="aspectFit"></image>
			</view>
			<view class="inputs">
				<input type="text" :value="yqrid" placeholder="邀请人ID"  @input="fuzhiid"/>
			</view>
		</view>
		<view class="login_phone">
			<view class="phead">
				<image src="../../static/images/login_iconyzm.png" mode="aspectFit"></image>
			</view>
			<view class="inputs">
				<input type="text" :value="verifycode" placeholder="请输入验证码" @input="fuzhiyzm" @blur="yzTrue"/>
			</view>
			<view class="yzm" @click="sendYzm">
				{{seconds>0?(seconds+'s后重发'):'发送验证码'}}
			</view>
		</view>
		<view class="orange-btn" @click="register">
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
			   phone:'',
			   yqrid:'',
			   verifycode:'',
			   seconds:0,
			   yzmisTrue:false,
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
			fuzhiid(e){
				this.yqrid=e.detail.value;
			},
			fuzhiyzm(e){
				this.verifycode=e.detail.value;
			},
			yzTrue(){
				let _that=this;
				tools.myRequest('api.login.index.sms', {
					mobile:_that.phone,
					verifycode:_that.verifycode
				}, '').then(res => {
					// console.log(res);
					tools.warnMessage(res.status,res.result.message,function(){
						  uni.showToast({
						  	title:'验证码输入正确',
							icon:"none"
						  })
						  _that.yzmisTrue=true;
					});
				
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			},
			sendYzm(){
				let _that=this;
				if(_that.seconds>0){
					return false;
				}
				tools.myRequest('api.member.zf.verifycode', {
					mobile:_that.phone
				}, '').then(res => {
					// console.log(res);
					tools.warnMessage(res.status,res.result.message,function(){
					    uni.showToast({
					    	title:res.result.message,
							icon:'success',
							success() {
								_that.seconds=60;
								_that.timeDjs();
							}
					    })
					});
				
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			},
			timeDjs(){
				let _that=this;
				_that.seconds = parseInt(_that.seconds) - 1;  
				if (_that.seconds == 0) { 
				    return;  
				}  
				setTimeout(function(){_that.timeDjs()},1000); 
			},
			register(){
				let _that=this;
				if(!_that.code1 || !_that.code2 || !_that.verifycode || !_that.yqrid){
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
				if(!_that.yzmisTrue){
					uni.showToast({
						title:"请输入正确的验证码",
						icon:'none'
					})
					return false;
				}
				tools.myRequest('api.login.index.register', {
					agentid:_that.yqrid,
					mobile:_that.phone,
					pwd:_that.code1,
					verifycode:_that.verifycode
				}, '').then(res => {
					// console.log(res);
					tools.warnMessage(res.status,res.result.message,function(){
					    uni.showToast({
					    	title:res.result.message,
							icon:'success',
							success() {
								setTimeout(()=>{
									// tools.getAesString(_that.phone,'phoneabc',11)
								uni.navigateTo({
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
</script>

<style lang="scss" scoped>

</style>
