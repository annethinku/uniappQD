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
	
		<view class="orange-btn" @click="foundCode">
			立即找回
		</view>
	
	</view>
</template>

<script>
	import tools from '../../static/js/tools.js'
	export default {
		data() {
			return {
				phone:'',
				type:1
			};
		},
		onLoad(options) {
			if(options.type){
				this.type=options.type;
			}
		},
		methods:{
			fuzhi(e){
				this.phone=e.detail.value;
			},
			clearPhone(){
				this.phone='';
			},
			foundCode(){
				let _that=this;
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
				tools.myRequest('api.member.zf.verifycode', {
					mobile:_that.phone
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
										url:'../shuruYanzm/shuruYanzm?type='+_that.type+'&phone='+_that.phone
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
