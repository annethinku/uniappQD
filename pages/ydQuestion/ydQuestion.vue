<template>
	<view class="login">
		<view class="login_title">
			您可能遇到以下问题
		</view>
		<view class="login_phone" @click="onTap">
			<view class="phead">
				忘记/更换手机号
			</view>
			<view class="jiantou">
				<image src="../../static/images/bbs_jian2@2x.png" mode=""></image>
			</view>
		</view>
		<navigator url="../foundPassword/foundPassword?type=3" hover-class="none">
			<view class="login_phone">
				<view class="phead">
					忘记密码
				</view>
				<view class="jiantou">
					<image src="../../static/images/bbs_jian2@2x.png" mode=""></image>
				</view>
			</view>
		</navigator>
		<view class="login_phone" @click="onTap">
			<view class="phead">
				客服帮助
			</view>
			<view class="jiantou">
				<image src="../../static/images/bbs_jian2@2x.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
               qq:1543109808
			};
		},
		methods: {
			onTap() {
				let qq=this.qq;
				//#ifdef H5
				uni.setClipboardData({
				    data:qq,
				    success: function () {
				        console.log('qq复制成功');
				    }
				});
				uni.showModal({
					title: "客服QQ",
					content: qq.toString(),
					confirmText: "复制成功",
					showCancel: false,
					confirmColor:'#FE9C47',
					success() {
						var locatUrl = "mqqapi://card/show_pslcard?src_type=internal&version=1&uin=" +qq +
							"&card_type=person&source=sharecard";
						var ifr = document.createElement("iframe");
						ifr.src = locatUrl;
						ifr.style.display = "none";
						document.body.appendChild(ifr);
					}
				});
				//#endif
				//#ifdef MP-QQ
				uni.setClipboardData({data: this.qq.toString()});
				uni.showModal({
					title:"客服QQ",
					content: this.qq.toString(),
					confirmText:"复制成功",
					confirmColor:'#FE9C47',
					showCancel: false
				});
				//#endif
				//#ifdef APP-PLUS
				plus.runtime.openURL("mqqapi://card/show_pslcard?src_type=internal&version=1&uin=" + qq +
					"&card_type=person&source=sharecard",
					function(res) {
						console.log(res);
					});
				//#endif
				console.log("tap")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.jiantou {
		margin-left: auto;

		image {
			width: 10upx;
			height: 16upx;
		}
	}
</style>
