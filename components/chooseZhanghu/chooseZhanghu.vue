<template>
	<view>
		<uni-popup ref="chooseZH" type="bottom">
			<view class="zh-con">
				<view class="close" @click="closeChoose">
					<image src="../../static/images/art-close.png" mode=""></image>
				</view>
				<view class="title">
					选择一个账户
				</view>
				<view class="content">
				<!-- 	<view class="con-li">
						<image src="../../static/images/zfbpay.png" mode=""></image>
						<text>支付宝账户</text>
					</view> -->
					<view class="con-li" v-for="(item,index) in info" :key="index" @click="showZfcode(item.title)">
						<image src="../../static/images/wechat.png" mode="aspectFit"></image>
						<text>{{item.title}}</text>
					</view>
					<view class="con-li">
						<text class="addFont">+ 添加新的账户</text>
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- 输入支付密码弹窗 -->
		<myCode ref="password" isTixian="false"></myCode>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import myCode from '@/components/password/password.vue'
	export default {
		props:['info','tixian'],
		data() {
			return {
				
			};
		},
		components: {
			uniPopup,
			myCode
		},
		methods:{
			closeChoose(){
				this.$refs.chooseZH.close();
			},
			showZhanghu() {
				this.$refs.chooseZH.open();
			},
			showZfcode(title){
				if(this.tixian){
					this.$emit('getName', title);
					this.closeChoose();
				}else{
					if(title=='余额'){
						 this.$refs.password.showCode();
					}
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.zh-con {
		background-color: #FFFFFF;
        .close{
			position: absolute;
			top: 34upx;
			right: 34upx;
			image{
				width: 40upx;
				height: 40upx;
			}
		}
		.title {
			font-size: 32upx;
			color: #333333;
			text-align: center;
			padding: 28upx 0 42upx;
			border-bottom: 1upx #EEEEEE solid;
		}
		.content{
			.con-li{
				padding: 44upx 0;
				margin: 0 40upx;
				border-bottom: 1upx #EEEEEE solid;
				image{
					width: 31upx;
					height: 31upx;
					margin-right: 35upx;
					vertical-align: middle;
				}
				text{
					font-size: 30upx;
					color: #333333;
				}
			}
		}
	}
	.addFont{
		font-size: 33upx;
		font-weight: bold;
		color: #333333;
		padding-left: 20upx;
	}
</style>
