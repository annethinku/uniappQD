<template>
	<view>
		<view class="products">
			<view class="product_left">
				<image src="" mode=""></image>
			</view>
			<view class="product_center">
				<view class="name">
					阿斯顿餐厅代金卷
				</view>
				<view class="time">
					周一至周日 | 免预约
				</view>
				<view class="orange">
					自动退 | 过期自动退 | 到店吃
				</view>
			</view>
			<view class="product_right">
				￥79
			</view>
		</view>
		<view class="numAndPrice">
			<view class="napli">
				<view class="nap-left">
					数量
				</view>
				<view class="nap-right">
					<view class="nums">
						<view class="icon" @click="jianNum">
							<image src="../../static/images/pay-jian.png" mode=""></image>
						</view>
						<view class="inputs">
							<input type="number" :value="numbers" @input="fuzhiNum"/>
						</view>
						<view class="icon" @click="addNum">
							<image src="../../static/images/pay-add.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="napli">
				<view class="nap-left">
					总价
				</view>
				<view class="nap-right">
					<view class="orange">
						￥79.00
					</view>
				</view>
			</view>
		</view>
		<view class="numAndPrice">
			<view class="napli">
				<view class="nap-left">
					优惠券
				</view>
				<view class="nap-right">
					<view class="gray">
						<text>暂无优惠卷可用</text>
						<image src="../../static/images/bbs_jian2@2x.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="napli">
				<view class="nap-left">
					实付金额
				</view>
				<view class="nap-right">
					<view class="orange">
						￥79.00
					</view>
				</view>
			</view>
			<view class="napli">
				<view class="nap-left">
					手机号
				</view>
				<view class="nap-right">
					<view class="gray">
						<text>155****5454</text>
					</view>
				</view>
			</view>
		</view>
		<navigator url="../pay2/pay2" hover-class="none">
			<view class="compay-btn mt">
				￥79  立即支付
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
               numbers:1
			};
		},
		onLoad(options) {
			if (options.title) {
				uni.setNavigationBarTitle({
					title: options.title
				});
			}
		},
		methods:{
			fuzhiNum(e){
				this.numbers=e.detail.value;
			},
			addNum(){
				this.numbers=this.numbers+1;
			},
			jianNum(){
				if(this.numbers>1){
					this.numbers=this.numbers-1;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F9F7;
	}

	.products {
		background-color: #FFFFFF;
		padding: 22upx 48upx 0 29upx;
		display: flex;

		.product_left {
			width: 130upx;
			height: 130upx;
			border-radius: 4upx;
			background-color: #EEEEEE;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.product_center {
			margin-left: 24upx;
			line-height: 27upx;

			.name {
				font-size: 26upx;
				color: #333333;
			}

			.time {
				font-size: 24upx;
				color: #A4A4A4;
				margin-top: 34upx;
			}

			.orange {
				font-size: 24upx;
				color: #FC853F;
				margin-top: 22upx;
			}
		}

		.product_right {
			margin-left: auto;
			font-size: 26upx;
			color: #333333;
		}
	}

	.numAndPrice {
		margin-bottom: 24upx;
		background-color: #FFFFFF;

		.napli {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 42upx 35upx;
			border-bottom: 1upx #F1F2F6 solid;

			.nap-left {
				font-size: 28upx;
				color: #333333;
			}

			.nap-right {
				.nums {
					display: flex;
					align-items: center;

					.icon {
						image {
							width: 50upx;
							height: 50upx;
							vertical-align: middle;
						}
					}

					.inputs {
						width: 70upx;
						text-align: center;
						font-size: 30upx;
						color: #878787;

						input {
							width: 100%;
							height: 50upx;
						}
					}
				}

				.orange {
					font-size: 30upx;
					font-weight: bold;
					color: rgba(254, 118, 57, 1);
				}

				.gray {
					font-size: 28upx;
					color: #AAAAAA;

					image {
						width: 12upx;
						height: 22upx;
						margin-left: 29upx;
						vertical-align: middle;
						position: relative;
						top: -4upx;
					}
				}
			}
		}
	}
.mt{
	margin-top: 80upx;
}
</style>
