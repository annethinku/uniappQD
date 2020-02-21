<template>
	<view class="login">
		<view class="login_title">
			请输入验证码
			<view class="desc">
				短信验证码已发送至{{phone | filterPhone}}
			</view>
		</view>
		<view class="yzm_kua">
			<view class="kua_box" v-for="(item,index) in karr" :key="index" :class="curindex==index?'active':''">
				<!-- <input type="number" value="" maxlength="1" @focus="addClass(index)" :focus="index==0?true:false"/> -->
				<input type="number" :value="item":focus="index==curindex?true:false" maxlength="1" @input="fuzhiC($event,index)" @confirm="enterT"/>
			</view>
		</view>
		<view class="gray_tis">
			{{seconds}}s后<text class="ml">重新发送</text>
		</view>

	</view>
</template>

<script>
	import tools from '../../static/js/tools.js'
	export default {
		data() {
			return {
				curindex:0,
				passArr:'',
				karr:[],
				seconds:60,
				type:1
			};
		},
		filters:{
			filterPhone(val){
				let phone=val.replace(val.substring(3,7), "****");
				return phone;
			}
		},
		onLoad(options) {
			this.karr.length=5;
			if(options.phone){
				// tools.getDAesString(options.phone,'phoneabc',11);
				this.phone=options.phone;
			}
			if(options.type){
				this.type=options.type;
			}
			this.timeDjs();
		},
		methods: {
			fuzhiC(e,i){
				this.curindex=i;
				this.karr[i]=e.detail.value;
				// 密码输入完成
				if(i==4 && e.detail.value){
					this.enterT();
				}
			},
			enterT(){
				let _that=this;
				// console.log(_that.karr.join(''));
				if(_that.karr.length<5){
					uni.showToast({
						title:'请输入完整的验证码',
						icon:'none'
					})
					return false;
				}
				// tools.getAesString(_that.phone,'phoneabc',11)+'&verifycode='
				// +tools.getAesString(_that.karr.join(''),'verifyco',8)
				// type 1注册  2找回支付密码 3找回账号密码 4验证码登录
				if(_that.type==1){
					tools.myRequest('api.login.index.sms', {
						mobile:_that.phone,
						verifycode:_that.karr.join('')
					}, '').then(res => {
						// console.log(res);
						tools.warnMessage(res.status,res.result.message,function(){
							  uni.navigateTo({
								url:'../register/register?type=1&phone='+_that.phone
							  });
						});
					
					}).catch(error => {
						console.log('请求失败：');
						console.log(error);
					})
				
				}else{
					// 验证码是否输入正确
					tools.myRequest('api.login.index.verification_two', {
						mobile:_that.phone,
						verifycode:_that.karr.join('')
					}, '').then(res => {
						// console.log(res);
						tools.warnMessage(res.status,res.result.message,function(){
							// 验证码登录
							if(_that.type==4){
								uni.showToast({
									title:"登录成功",
									icon:"none",
									success() {
										uni.setStorageSync('token',res.result.token);
										setTimeout(()=>{
											uni.reLaunch({
												url:'../index/index'
											})
										},1000)
									}
								})
							}else{
								uni.navigateTo({
									url:'../settingCode/settingCode?type='+_that.type+'&phone='+_that.phone+'&verifycode='+_that.karr.join('')
								});
							}
						  
						});
					
					}).catch(error => {
						console.log('请求失败：');
						console.log(error);
					})
				
				}
			},
			addClass(i){
				this.curindex=i;
			},
			timeDjs(){ 
				let _that=this;
				_that.seconds = parseInt(_that.seconds) - 1;  
				if (_that.seconds == 0) {  
				    _that.seconds= 60; 
					uni.navigateBack({});
				    return;  
				}  
				setTimeout(function(){_that.timeDjs()},1000); 
			}
		}
	}
</script>

<style lang="scss" scoped>
.ml{
	margin-left: 40upx;
}
.yzm_kua{
	display: flex;
	margin: 0 33upx;
	.kua_box{
		flex:1;
		border-bottom: 1upx #E9E9E9 solid;
		padding: 0 0 40upx;
		margin: 0 40upx 0 0;
		text-align: center;
		&:last-child{
			margin: 0 0 0 0;
		}
		&.active{
				border-bottom: 1upx #FE834C solid;
		}
		input{
			font-size: 90upx;
			color: #333333;
		}
	}
}
</style>
