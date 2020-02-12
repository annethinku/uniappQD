<template>
	<view>
		<view class="today_sy">
			<image src="../../static/images/shouyi_put.png" mode=""></image>
			<view class="name">
				今日收益（元）
			</view>
			<view class="money">
				21,365.00
			</view>
		</view>
		<view class="sy_three">
			<view class="syt_box">
				<view class="top">
					144.00
				</view>
				<view class="bot">
					本月预估
				</view>
			</view>
			<view class="syt_box">
				<view class="top">
					368.00
				</view>
				<view class="bot">
					本月结算
				</view>
			</view>
			<view class="syt_box">
				<view class="top">
					508.00
				</view>
				<view class="bot">
					累计收益
				</view>
			</view>
		</view>
		<view class="ygw_bg">
			<view class="common_title">
				<view class="ct_left">
					预估结构
				</view>
				<view class="ct_right">
					<text>详细</text>
					<image src="../../static/images/bbs_jian2@2x.png" mode=""></image>
				</view>
			</view>
			<view class="yugou_box">
				<view class="yugou_con">
					<view class="title">
						<text class="fs1">￥</text>
						<text class="fs2">600+0.02% </text>
						<text class="fs3">提成</text>
					</view>
					<view class="tuiguang">
						<view class="name">
							推广的会员
						</view>
						<view class="btn red">
							5
						</view>
					</view>
				</view>
				<view class="yugou_con" style="margin-left: auto;">
					<view class="title">
						<text class="fs1">￥</text>
						<text class="fs2">600+0.02% </text>
						<text class="fs3">提成</text>
					</view>
					<view class="tuiguang">
						<view class="name">
							推广的商家
						</view>
						<view class="btn green">
							10
						</view>
					</view>
				</view>

			</view>
			<view class="common_title">
				<view class="ct_left">
					收益详细
				</view>
				<view class="ct_right">
					<text>全部</text>
					<image src="../../static/images/bbs_jian2@2x.png" mode=""></image>
				</view>
			</view>
			<view class="shouy_detail">
				<view class="sylis">
					<view class="syl_left red"></view>
					<view class="syl_center">
						<view class="name">
							推广的会员
						</view>
						<view class="desc">
							2020-01-10
						</view>
					</view>
					<view class="syl_right">
						+20.00
					</view>
				</view>
				<view class="sylis">
					<view class="syl_left yellow"></view>
					<view class="syl_center">
						<view class="name">
							推广的商家
						</view>
						<view class="desc">
							2020-01-10
						</view>
					</view>
					<view class="syl_right">
						+100.00
					</view>
				</view>
				<view class="sylis">
					<view class="syl_left blue"></view>
					<view class="syl_center">
						<view class="name">
							商家订单
						</view>
						<view class="desc">
							2020-01-10
						</view>
					</view>
					<view class="syl_right">
						+0.8
					</view>
				</view>
				<view class="sylis">
					<view class="syl_left green"></view>
					<view class="syl_center">
						<view class="name">
							会员订单
						</view>
						<view class="desc">
							2020-01-10
						</view>
					</view>
					<view class="syl_right">
						+1.2
					</view>
				</view>

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

	.today_sy {
		background-color: #FFAD43;
		position: relative;
		width: 100%;
		height: 250upx;
		overflow: hidden;
		text-align: center;
		color: #FFFFFF;

		image {
			width: 167upx;
			height: 198upx;
			position: absolute;
			right: 0;
			bottom: -80upx;
		}

		.name {
			padding-top: 74upx;
			font-size: 22upx;
		}

		.money {
			font-size: 64upx;
			font-weight: bold;
			margin-top: 20upx;
		}
	}

	.sy_three {
		display: flex;
		background-color: #FFFFFF;
		padding: 40upx 0 30upx;

		.syt_box {
			flex: 1;
			text-align: center;

			.top {
				font-size: 32upx;
				color: #333333;
				font-weight: bold;
			}

			.bot {
				font-size: 24upx;
				color: #666666;
				margin-top: 17upx;
			}
		}
	}

	.ygw_bg {
		background-color: #FFFFFF;
		margin: 20upx 0 0;

		.common_title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30upx;

			.ct_left {
				font-size: 32upx;
				color: #333333;
				font-weight: bold;
			}

			.ct_right {
				font-size: 26upx;
				color: #666666;

				image {
					width: 10upx;
					height: 16upx;
					margin-left: 22upx;
					vertical-align: middle;
					position: relative;
					top: -4upx;
				}
			}
		}

		.yugou_box {
			display: flex;
			margin: 0 32upx 81upx;

			.yugou_con {
				width: 326upx;
				height: 162upx;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0 1upx 24upx 0 rgba(51, 51, 51, 0.1);
				border-radius: 10upx;
				padding: 30upx 13upx 0 22upx;
				box-sizing: border-box;

				.title {
					color: #3A425C;

					.fs1 {
						font-size: 24upx;
					}

					.fs2 {
						font-size: 32upx;
						font-weight: bold;
					}

					.fs3 {
						font-size: 28upx;
						margin-left: 15upx;
					}
				}

				.tuiguang {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 20upx;

					.name {
						font-size: 26upx;
						color: #999999;
					}

					.btn {
						width: 84upx;
						height: 42upx;
						line-height: 42upx;
						box-shadow: 0 1upx 24upx 0 rgba(136, 136, 136, 0.1);
						border-radius: 10upx;
						text-align: center;
						color: #FFFFFF;
						font-size: 26upx;

						&.red {
							background-color: rgba(255, 101, 73, 1);
						}

						&.green {
							background-color: #8CC23A;
						}
					}
				}
			}
		}

		.shouy_detail {
			.sylis {
				display: flex;
				align-items: center;
				margin: 0 22upx 0 36upx;
				border-bottom: 1upx #EEEEEE solid;
				padding: 24upx 10upx;

				.syl_left {
					width: 20upx;
					height: 20upx;
					border-radius: 50%;
					flex-shrink: 0;
					align-self: flex-start;
					position: relative;
					top: 8upx;

					&.red {
						background: rgba(255, 119, 119, 1);
					}

					&.yellow {
						background: #EAD436;
					}

					&.blue {
						background: #6D8DFD;
					}

					&.green {
						background: #8CC23A;
					}
				}

				.syl_center {
					flex: 1;
					margin-left: 34upx;

					.name {
						font-size: 28upx;
						color: #3A425C;
						font-weight: bold;
					}

					.desc {
						font-size: 24upx;
						color: #999999;
						margin-top: 20upx;
					}
				}

				.syl_right {
					font-size: 28upx;
					color: #333333;
					font-weight: bold;
				}
			}
		}
	}
</style>
