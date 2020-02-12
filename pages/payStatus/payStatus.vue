<template>
	<view>
		<!-- 支付成功显示 -->
		<view class="orange" v-show="status">
			<view class="status-img">
				<image src="../../static/images/pay-successs.png" mode=""></image>
			</view>
			<view class="orange_gan"></view>
			<view class="big_white">
				<view class="order-price">
					￥ <text>79.00</text>
				</view>
				<view class="bgw_two">
					<view class="bgwo-bot">
						<view class="bgwobli">
							<view class="lilabel">
								订单编号：
							</view>
							<view class="lifont">
								HG 8156542
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								下单手机：
							</view>
							<view class="lifont">
								155 **** 9665
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								下单时间：
							</view>
							<view class="lifont">
								2020-1-9 21:55
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								商品数量：
							</view>
							<view class="lifont">
								1
							</view>
						</view>
					</view>
				</view>

			</view>
			<navigator url="../orderDetail/orderDetail" hover-class="none">
				<view class="ddxq-btn mt">
					订单详情
				</view>
			</navigator>
		</view>
        <!-- 支付失败显示 -->
		<view class="orange" v-show="!status">
			<view class="error-ts">
				<image src="../../static/images/pay-fail.png" mode=""></image>
				<view class="tsy">
					支付失败，请重新支付
				</view>
			</view>
			<view class="ddxq-btn mt01">
				重新支付
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
               status:true
			};
		},
		onLoad(options) {
			// 支付成功or失败修改标题
			if (options.title) {
				uni.setNavigationBarTitle({
					title: options.title
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F9F7;
	}

	.orange {
		width: 100%;
		height: 409upx;
		background: rgba(255, 128, 72, 1);

		.status-img {
			text-align: center;
			padding-top: 30upx;

			image {
				width: 167upx;
				height: 147upx;
			}
		}

		.orange_gan {
			height: 20upx;
			background: rgba(255, 103, 36, 1);
			border-radius: 10upx;
			margin: 25upx 14upx 0;
		}

		.big_white {
			background-color: #FFFFFF;
			margin: -10upx 30upx 0;
			padding-bottom: 56upx;

			.bgwo-bot {
				margin-top: 44upx;

				.bgwobli {
					display: flex;
					margin-bottom: 40upx;
					font-size: 24upx;

					.lilabel {
						width: 120upx;
						text-align: right;
						color: #A4A4A4;
					}

					.lifont {
						color: #333333;
						margin-left: 10upx;
					}
				}
			}

			.order-price {
				text-align: center;
				font-size: 36upx;
				color: #333333;
				padding: 80upx 0 66upx;

				text {
					font-size: 72upx;
					font-weight: bold;
				}
			}

			.bgw_two {
				margin: 0 12upx;
				border-top: 1upx #C4C4C4 dashed;
				padding: 38upx 33upx 0;

			}

		}
	}

	.ddxq-btn {
		width: 360upx;
		height: 84upx;
		line-height: 84upx;
		text-align: center;
		background: linear-gradient(90deg, rgba(252, 136, 64, 1), rgba(255, 103, 51, 1));
		border-radius: 42upx;
		font-size: 32upx;
		color: #FFFFFF;
		font-weight: bold;
        margin: 0 auto;
		&.mt {
			margin-top: 73upx;
		}
		&.mt01 {
			margin-top: 188upx;
		}
	}
	.error-ts{
		text-align: center;
		padding-top: 80upx;
		image{
			width: 200upx;
			height:200upx;
		}
		.tsy{
			font-size: 22upx;
			color: #FFFFFF;
			margin-top: 15px;
		}
	}
</style>
