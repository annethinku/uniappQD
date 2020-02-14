<template>
	<view class="login">
		<view class="login_title">
			欢迎登录奇豆行
		</view>
		<view class="login_phone">
			<view class="phead">
				+86 >
			</view>
			<view class="inputs">
				<input type="text" value=""/>
			</view>
		</view>
		<view class="gray_tis">
			未注册的账户登录验证直接注册
		</view>
		<view class="orange-btn">
			下一步
		</view>
		<view class="other-contorl">
			<navigator url="../loginCode/loginCode" hover-class="none">
				<view class="code-login">
					密码登录
				</view>
			</navigator>
			<view class="line"></view>
			<navigator url="../ydQuestion/ydQuestion" hover-class="none">
				<view class="question">
					遇到问题?
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
		<!-- 一键登录弹窗 -->
		<uni-popup ref="login" type="bottom">
			<view class="yj_login">
				<view class="close" @click="hideYJlogin">
					<image src="../../static/images/art-close.png" mode=""></image>
				</view>
				<view class="title">
					一键登录
				</view>
				<view class="caidan">
					<image src="../../static/images/login_caidan.png" mode="widthFix"></image>
				</view>
				<view class="phonenum">
					手机 155****9306
				</view>
				<view class="orange-btn" style="width: 75%;margin: 70upx auto 0;">
					一键登录
				</view>
				<view class="gray_tis">
					登录即同意 <text>《XXXX协议》</text>并授权获得本手机号
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			uniPopup
		},
		mounted(){
			this.$refs.login.open();
		},
		methods:{
			hideYJlogin(){
				this.$refs.login.close();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.yj_login{
		background-color: #FFFFFF;
		padding: 37upx 0 29upx;
		text-align: center;
		position: relative;
		.close{
			width: 40upx;
			height: 40upx;
			position: absolute;
			right: 20upx;
			top: 20upx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.title{
			font-size: 32upx;
			color: #444444;
			font-weight: bold;
		}
		.caidan{
			width: 119upx;
			margin: 86upx auto 0;
			image{
				width: 100%;
			}
		}
		.phonenum{
			font-size: 30upx;
			color: #666666;
			margin-top: 45upx;
		}
	}
</style>
