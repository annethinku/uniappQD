<template>
	<view>
		<view class="messbox">
			<view class="title">
				消息列表
			</view>
			<view class="contents">
				<view class="con_lis">
					<view class="lis_left">
						<image src="../../static/images/mess_icon01.png" mode=""></image>
						<view class="red">12</view>
					</view>
					<view class="lis_right">
						<view class="r_title">
							<view class="rt_left">
								服务通知
							</view>
							<view class="rt_right">
								2个小时前
							</view>
						</view>
						<view class="r_desc">
							您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请
						</view>
					</view>
				</view>
				<view class="con_lis">
					<view class="lis_left">
						<image src="../../static/images/mess_icon02.png" mode=""></image>
						<view class="red">12</view>
					</view>
					<view class="lis_right">
						<view class="r_title">
							<view class="rt_left">
								账户通知
							</view>
							<view class="rt_right">
								3天前
							</view>
						</view>
						<view class="r_desc">
							您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请
						</view>
					</view>
				</view>

				<view class="con_lis">
					<view class="lis_left">
						<image src="../../static/images/mess_icon03.png" mode=""></image>
						<view class="red">12</view>
					</view>
					<view class="lis_right">
						<view class="r_title">
							<view class="rt_left">
								订单交易
							</view>
							<view class="rt_right">
								2019-5-2
							</view>
						</view>
						<view class="r_desc">
							您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请
						</view>
					</view>
				</view>

				<view class="con_lis">
					<view class="lis_left">
						<image src="../../static/images/mess_icon04.png" mode=""></image>
						<view class="red">12</view>
					</view>
					<view class="lis_right">
						<view class="r_title">
							<view class="rt_left">
								奇豆客服
							</view>
							<view class="rt_right">
								2019-1-2
							</view>
						</view>
						<view class="r_desc">
							您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请
						</view>
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

	.messbox {
		background-color: #FFFFFF;
		margin-top: 19upx;

		.title {
			padding: 25upx 45upx;
			border-bottom: 1upx #EEEEEE solid;
			font-size: 28upx;
			color: #333333;
			font-weight: bold;
		}

		.contents {
			.con_lis {
				padding: 36upx 43upx;
				display: flex;

				.lis_left {
					width: 107upx;
					height: 107upx;
					position: relative;
					flex-shrink: 0;

					image {
						width: 100%;
						height: 100%;
					}

					.red {
						width: 30upx;
						height: 30upx;
						line-height: 30upx;
						border-radius: 50%;
						position: absolute;
						top: -15upx;
						right: -15upx;
						text-align: center;
						color: #FFFFFF;
						font-size: 18upx;
						background-color: #F15A5A;
					}
				}

				.lis_right {
					height: 100%;
					margin-left: 40upx;

					.r_title {
						display: flex;
						justify-content: space-between;
						align-items: flex-end;

						.rt_left {
							font-size: 30upx;
							color: #333333;
							font-weight: bold;
						}

						.rt_right {
							font-size: 26upx;
							color: #AAAAAA;
						}
					}

					.r_desc {
						width: 520upx;
						flex: 1;
						font-size: 26upx;
						color: #AAAAAA;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						margin-top: 30upx;
					}
				}
			}
		}
	}
</style>
