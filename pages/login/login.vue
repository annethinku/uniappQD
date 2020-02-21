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
				<input type="number" :value="phone" @input="fuzhi"/>
			</view>
		</view>
		<view class="gray_tis">
			未注册的账户登录验证直接注册
		</view>
		<view class="orange-btn" @click="nextSub">
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
	import tools from '../../static/js/tools.js'
	export default {
		data() {
			return {
				phone:'',
				type:4
			};
		},
		components:{
			uniPopup
		},
		mounted(){
	
			// this.$refs.login.open();
			let params={token:uni.getStorageSync('token')};
			// uni.request({
			// 	url:'https://verify5.market.alicloudapi.com/api/v1/mobile/info?appkey=203784822',
			// 	header:{
			// 		"Content-Type": "application/json; charset=UTF-8",
			// 		//请求体类型。
			// 		"Accept": "application/json", 
			// 		//请求响应体类型，部分 API 可以根据指定的响应类型来返回对应数据格式，建议手动指定此请求头，如果不设置，部分 HTTP 客户端会设置默认值 */*，导致签名错误。
			// 		"X-Ca-Version": 1,  
			// 		// API 版本号，目前所有 API 仅支持版本号『1』，可以不设置此请求头，默认版本号为『1』。
			// 		"X-Ca-Signature-Headers": "X-Ca-Request-Mode,X-Ca-Version,X-Ca-Stage,X-Ca-Key,X-Ca-Timestamp", 
			// 		//参与签名的自定义请求头，服务端将根据此配置读取请求头进行签名，此处设置不包含 Content-Type、Accept、Content-MD5、Date 请求头，这些请求头已经包含在了基础的签名结构中，详情参照请求签名说明文档。
			// 		"X-Ca-Stage": "RELEASE", //默认RELEASE
			// 		"X-Ca-Key": 203784822,  
			// 		//请求的 阿里云AppKey，通过云市场等渠道购买的 API 默认已经给 APP 授过权，阿里云所有云产品共用一套 AppKey 体系，删除 ApppKey 请谨慎，避免影响到其他已经开通服务的云产品。
			// 		"X-Ca-Timestamp": 1471864864235,
			// 		//请求的时间戳，值为当前时间的毫秒数，也就是从1970年1月1日起至今的时间转换为毫秒，时间戳有效时间为15分钟。
			// 		"X-Ca-Nonce":"b931bc77-645a-4299-b24b-f3669be577ac",  
			// 		//请求唯一标识，15分钟内 AppKey+API+Nonce 不能重复，与时间戳结合使用才能起到防重放作用。
			// 		"X-Ca-Signature": "FJleSrCYPGCU7dMlLTG+UD3Bc5Elh3TV3CWHtSKh1Ys= "
			// 		//请求签名,使用方参照签名机制生成。
			// 	},
			// 	data:params,
			// 	method:'POST',
			// 	success(res){
			// 		console.log(res);
			// 	}
			// })
		},
		methods:{
			hideYJlogin(){
				this.$refs.login.close();
			},
			fuzhi(e){
				this.phone=e.detail.value;
			},
			nextSub(){
				let _that = this;
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
				tools.myRequest('api.login.index.verification_one',{mobile:_that.phone}, '').then(res => {
					// console.log(res);
					tools.warnMessage(res.status,res.result.message,function(){
						// 发送验证码
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
					},res.result.mobile);
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
				
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
