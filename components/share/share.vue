<template>
	<view>
		<uni-popup ref="share" type="bottom">
			<view class="share_con">
				<view class="shc_top">
					<view class="top_btn" @click="shareWX">
						<view class="img">
							<image src="../../static/images/share-btn01.png" mode="widthFix"></image>
						</view>
						<view class="name">
							微信
						</view>
					</view>
					<view class="top_btn" @click="sharePYQ">
						<view class="img">
							<image src="../../static/images/share-btn02.png" mode="widthFix"></image>
						</view>
						<view class="name">
							朋友圈
						</view>
					</view>
					<view class="top_btn" @click="shareQQ">
						<view class="img">
							<image src="../../static/images/share-btn03.png" mode="widthFix"></image>
						</view>
						<view class="name">
							QQ
						</view>
					</view>
					<view class="top_btn" @click="shareWB">
						<view class="img">
							<image src="../../static/images/share-btn04.png" mode="widthFix"></image>
						</view>
						<view class="name">
							新浪微博
						</view>
					</view>
				</view>
				<view class="shc_bot" @click="hideShare">
					取消
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
		components: {
			uniPopup
		},
		methods:{
			showShare(){
				this.$refs.share.open();
			},
			hideShare(){
				this.$refs.share.close();
			},
			// 分享到微信
			shareWX(){
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 2,
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			// 分享到朋友圈
			sharePYQ(){
				uni.share({
				    provider: "weixin",
				    scene: "WXSenceTimeline",
				    type: 0,
				    href: "http://uniapp.dcloud.io/",
				    title: "uni-app分享",
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			// 分享到qq
			shareQQ(){
				uni.share({
				    provider: "qq",
				    scene: "",
				    type: 0,
				    href: "http://uniapp.dcloud.io/",
				    title: "uni-app分享",
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			// 分享到微博
			shareWB(){
				uni.share({
				    provider: "sinaweibo",
				    scene: "",
				    type: 0,
				    href: "http://uniapp.dcloud.io/",
				    title: "uni-app分享",
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
.share_con{
		background-color: #F4F4F4;
		border-top-left-radius: 22upx;
		border-top-right-radius: 22upx;
		padding: 65upx 0 0;
		.shc_top{
			display: flex;
			.top_btn{
				width: 25%;
				text-align: center;
				.img{
					width: 105upx;
					height: 105upx;
					margin: 0 auto;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.name{
					font-size: 24upx;
					color: #666666;
					margin-top: 30upx;
				}
			}
		
		}
		.shc_bot{
			background-color: #FFFFFF;
			font-size: 36upx;
			color: #666666;
			text-align: center;
			padding: 32upx 0;
			margin-top: 36upx;
		}
	}
</style>
