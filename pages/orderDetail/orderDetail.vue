<template>
	<view>
		<view class="orange">
			<view class="ts_font">
				订单还未付款噢~
			</view>
			<view class="orange_gan"></view>
			<view class="big_white">
				<view class="bgw_one">
					<view class="bgwo_top">
						<view class="bgtopleft">
							<image src="" mode=""></image>
						</view>
						<view class="bgtopcenter">
							<view class="title">
								阿斯顿餐厅代金卷
							</view>
							<view class="desc">
								周一至周日
							</view>
							<view class="desc">
								过期自动退 | 随时退 | 到店吃
							</view>
						</view>
						<view class="bgtopright">
							￥79
							<image src="../../static/images/detail_rightJ.png" mode=""></image>
						</view>
					</view>
					<view class="bgwo-bot">
						<view class="bgwobli">
							<view class="lilabel">
								有效期：
							</view>
							<view class="lifont">
								2020-2-4 至 2020-2-23（周末、法定节假日通用）
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								使用时间：
							</view>
							<view class="lifont">
								11:00 至 22:00
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								使用范围：
							</view>
							<view class="lifont">
								仅适用于菜品
							</view>
						</view>
					</view>
				</view>
				<view class="bgw_two">
					<view class="bgwt-li">
						<view class="name">
							商家信息
						</view>
						<view class="phone">
							<image src="../../static/images/order_phone.png" mode=""></image>
							<text>联系商家</text>
						</view>
					</view>
					<view class="bgwt-li">
						<view class="name">
							阿斯顿餐厅（新都店）
						</view>
					</view>
				</view>
				<view class="bgw_two">
					<view class="bgwt-li">
						<view class="name">
							订单信息
						</view>
					</view>
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
								2020-1-9  21:55
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
	<view class="bgw_two">
					<view class="bgwt-li">
						<view class="name">
							商品金额
						</view>
						<view class="fonts">
							￥79.00
						</view>
					</view>
					<view class="bgwt-li">
						<view class="name">
							金额优惠
						</view>
						<view class="fonts">
							￥0.00
						</view>
					</view>
					<view class="totalPrice">
						总价：￥79.00
					</view>
				</view>
			</view>
			 <view style="height: 200upx;"></view>
		</view>
		<view class="pay-btn">
			<view class="self-btn">
				去支付
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
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

		.ts_font {
			font-size: 28upx;
			color: #FFFFFF;
			margin-left: 30upx;
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

			.bgw_one {
				padding: 29upx 20upx 35upx 46upx;

				.bgwo_top {
					display: flex;
					align-items: center;

					.bgtopleft {
						width: 130upx;
						height: 130upx;
						border-radius: 4upx;
						flex-shrink: 0;
						overflow: hidden;
						background-color: #EEEEEE;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.bgtopcenter {
						margin-left: 33upx;

						.title {
							font-size: 26upx;
							color: #333333;
							margin-bottom: 34upx;
						}

						.desc {
							font-size: 24upx;
							color: #A4A4A4;
							margin-bottom: 19upx;
						}
					}

					.bgtopright {
						font-size: 28upx;
						color: #333333;
						font-weight: bold;
						margin-left: auto;

						image {
							width: 10upx;
							height: 18upx;
							margin-left: 22upx;
							vertical-align: middle;
						}
					}
				}


			}

			.bgwo-bot {
				margin-top: 44upx;

				.bgwobli {
					display: flex;
					margin-bottom: 20upx;
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

			.bgw_two {
				margin: 35upx 12upx 0;
				border-top: 1upx #C4C4C4 dashed;
				padding: 38upx 33upx 0;

				.bgwt-li {
					display: flex;
					justify-content: space-between;
					margin-bottom: 30upx;

					.name {
						font-size: 28upx;
						color: #333333;
						font-weight: bold;
					}

					.phone {
						width: 160upx;
						height: 50upx;
						line-height: 50upx;
						text-align: center;
						border: 1upx solid rgba(196, 196, 196, 1);
						border-radius: 25upx;
						font-size: 24upx;
						color: #333333;

						image {
							width: 18upx;
							height: 23upx;
							margin-right: 13upx;
							vertical-align: middle;
						}
					}
					.fonts{
						font-size: 22upx;
						color: #333333;
					}
				}
				.totalPrice{
					font-size: 30upx;
					color: #646364;
					font-weight: bold;
					padding: 43upx 0 60upx;
					text-align: right;
				}
			}
		}
	}
	.pay-btn{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #FFFFFF;
		padding: 23upx 36upx;
		box-sizing: border-box;
		.self-btn{
			width: 100%;
			height:84upx;
			background:linear-gradient(90deg,rgba(252,136,64,1),rgba(255,103,51,1));
			border-radius:42upx;
			line-height: 84upx;
			font-weight: bold;
			color: #FFFFFF;
			text-align: center;
		}
	}
</style>
