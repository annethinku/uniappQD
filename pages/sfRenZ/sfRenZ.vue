<template>
	<view class="rz_content">
		<view class="rz_img1">
			<image src="../../static/images/rz_img1.png" mode=""></image>
		</view>
		<view class="rz_phone">
			<view class="icon">
				<image src="../../static/images/rz_user.png" mode=""></image>
			</view>
			<view class="phone">
				155****5555
			</view>
		</view>
		<view class="forms login">
			<view class="login_phone">
				<view class="inputs">
					<input type="text" :value="name" placeholder="姓名"  @input="fuzhiid"/>
				</view>
			</view>
			<view class="login_phone">
				<view class="inputs">
					<input type="text" :value="sfz" placeholder="身份证号"  @input="fuzhiid"/>
				</view>
			</view>
			<view class="login_phone">
				<view class="inputs">
					<input type="number" :value="verifycode" placeholder="验证码" @input="fuzhiyzm" @blur="yzTrue"/>
				</view>
				<view class="yzm" @click="sendYzm">
					{{seconds>0?(seconds+'s后重发'):'发送验证码'}}
				</view>
			</view>
		</view>
	    <view class="rz_tishi">
	    	提示：请勿乱填身份证信息，信息不匹配将会导致无法提现！
	    </view>
		<view class="common_redbtn" @click="subRenz">
			提交认证
		</view>
	</view>
</template>

<script>
	import tools from '../../static/js/tools.js'
	export default {
		data() {
			return {
				name:'',
				sfz:'',
				verifycode:'',
				seconds:0,
				phone:'18224033962'
			};
		},
		methods:{
			// 发送验证码
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
			subRenz(){
				uni.navigateTo({
					url:'../rzSuccess/rzSuccess'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #F8F9F7;
}
.rz_content{
	margin-top: 20upx;
	background-color: #FFFFFF;
	padding: 54upx 0 100upx;
	.rz_img1{
		width: 125upx;
		height: 128upx;
		margin: 0 auto 40upx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.rz_phone{
		display: flex;
		align-items: center;
		justify-content: center;
		.icon{
			image{
				width: 50upx;
				height: 50upx;
			}
		}
		.phone{
			font-size: 30upx;
			color: #333333;
			font-weight: bold;
			margin-left: 26upx;
		}
	}
	.forms{
		margin-top: 114upx;
		.yzm{
			width:150upx;
			height:50upx;
			border:1upx solid rgba(247,104,78,1);
			box-shadow:0 1upx 24upx 0 rgba(136,136,136,0.1);
			border-radius:10upx;
			color: #FD5B47;
			background-color: transparent;
		}
	}
	.rz_tishi{
		font-size: 24upx;
		color: #999999;
		margin-top: 63upx;
		text-align: center;
	}
}
</style>
