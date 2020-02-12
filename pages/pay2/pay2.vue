<template>
	<view>
		<view class="payTime">
			<view class="sy-time">
				剩余支付时间：
				<uni-countdown :show-day="false" :hour="24" :minute="0" :second="0" :reset="false" @timeup="timeUp" 
				color="#999999" borderColor="#F8F9F7" backgroundColor="#F8F9F7" splitor-color="#999999"> </uni-countdown>
			</view>
			<view class="pay-price">
				￥ <text>79.00</text>
			</view>
			<view class="name">
				阿斯顿餐厅代金卷
			</view>
		</view>
		<view class="whiteBox">
			<view class="wb_li" @click="chooseCur('余额支付')">
				<view class="wbl_left">
					<image src="../../static/images/pay-yue.png" mode="aspectFit"></image>
					<text>余额支付</text>
				</view>
				<view class="wbl_right">
					<view class="radioGroup" :class="curname=='余额支付'?'active':''">
						<image src="../../static/images/pay-wgou.png" mode="" v-show="curname=='余额支付'"></image>
					</view>
				</view>
			</view>
			<view class="wb_li" @click="chooseCur('微信钱包')">
				<view class="wbl_left">
					<image src="../../static/images/pay-wechat.png" mode="aspectFit"></image>
					<text>微信钱包</text>
				</view>
				<view class="wbl_right">
					<view class="radioGroup" :class="curname=='微信钱包'?'active':''">
						<image src="../../static/images/pay-wgou.png" mode="" v-show="curname=='微信钱包'"></image>
					</view>
				</view>
			</view>
			<view class="wb_li" @click="chooseCur('支付宝')">
				<view class="wbl_left">
					<image src="../../static/images/pay-zhifubao.png" mode="aspectFit"></image>
					<text>支付宝</text>
				</view>
				<view class="wbl_right">
					<view class="radioGroup" :class="curname=='支付宝'?'active':''">
						<image src="../../static/images/pay-wgou.png" mode="" v-show="curname=='支付宝'"></image>
					</view>
				</view>
			</view>

		</view>
		<view class="whiteBox">
			<view class="wb_li">
				<view class="wbl_left">
					<image src="../../static/images/pay-yinhka.png" mode="aspectFit"></image>
					<text>银联支付</text>
				</view>
			</view>
			<view class="wb_li" @click="chooseCur('7474')">
				<view class="wbl_left">
					<text>建设银行卡 储蓄卡（7474）</text>
				</view>
				<view class="wbl_right">
					<view class="radioGroup" :class="curname=='7474'?'active':''">
						<image src="../../static/images/pay-wgou.png" mode="" v-show="curname=='7474'"></image>
					</view>
				</view>
			</view>
			<view class="wb_li" @click="chooseCur('1588')">
				<view class="wbl_left">
					<text>招商银行卡 储蓄卡（1588）</text>
				</view>
				<view class="wbl_right">
					<view class="radioGroup" :class="curname=='1588'?'active':''">
						<image src="../../static/images/pay-wgou.png" mode="" v-show="curname=='1588'"></image>
					</view>
				</view>
			</view>
			<view class="other_li">
				<view class="name">
					切换其他银行卡支付
				</view>
				<view class="icon">
					<image src="../../static/images/bbs_jian2@2x.png" mode=""></image>
				</view>
			</view>
		</view>
		<navigator url="../payStatus/payStatus?title=支付成功" hover-class="none">
			<view class="compay-btn mt">
				确认支付
			</view>
		</navigator>
	</view>
</template>

<script>
	import uniCountdown from "@/components/linnian-CountDown/uni-countdown.vue"
	export default {
		data() {
			return {
               curname:''
			};
		},
		components:{
			uniCountdown
		},
		methods:{
			chooseCur(name){
				this.curname=name;
			},
			timeUp(){
		      // 时间到了触发该事件
			  console.log('时间到');
			  uni.reLaunch({
			  	url:"../index/index"
			  })
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F9F7;
	}

	.payTime {
		margin: 57upx 0 37upx;
		text-align: center;

		.sy-time {
			font-size: 24upx;
			color: #999999;
		}

		.pay-price {
			font-size: 36upx;
			color: #333333;
			margin-top: 47upx;

			text {
				font-weight: bold;
				font-size: 72upx;
				margin-left: 26upx;
			}
		}

		.name {
			font-size: 22upx;
			color: #999999;
			margin-top: 47upx;
		}
	}

	.whiteBox {
		background: rgba(255, 255, 255, 1);
		box-shadow: 0 1upx 20upx 0 rgba(187, 187, 187, 0.2);
		border-radius: 20upx;
		margin: 0 24upx 19upx;

		.wb_li {
			padding: 34upx;
			border-bottom: 1upx #EAEAEA solid;
			display: flex;
			margin: 0 14upx;
			justify-content: space-between;
            &:last-child{
				border-bottom: none;
			}
			.wbl_left {
				font-size: 30upx;
				color: #666666;

				image {
					width: 34upx;
					height: 34upx;
					margin-right: 26upx;
					vertical-align: middle;
					position: relative;
					top: -4upx;
				}
			}

			.wbl_right {
				.radioGroup {
					width: 34upx;
					height: 34upx;
					line-height: 34upx;
					text-align: center;
					border: 2upx solid rgba(254, 111, 54, 1);
					border-radius: 50%;
					&.active {
						background-color: #FE6F36;
					}

					image {
						width: 80%;
						height: 80%;
					}
				}
			}
		}
		.other_li{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 34upx;
			.name{
				font-size: 24upx;
				color: #999999;
			}
			.icon{
				image{
					width: 12upx;
					height: 20upx;
				}
			}
		}
	}
	.mt{
		margin-top: 42upx;
	}
</style>
