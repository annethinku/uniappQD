<template>
	<view>
		<view class="lists">
			<view class="list-li" v-for="(item,index) in 5" :key="index">
				<view class="li-time">
					星期四 12:48
				</view>
				<view class="li-con">
					<view class="con-title">
						账户收益 + 0.88(元)
					</view>
					<view class="con-con">
						<view class="cc-left">
							<image src="" mode=""></image>
						</view>
						<view class="cc-right">
							今日账户收益+ 0.88（元），详情明细请
							点击跳转查看
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
				title: '消息记录'
			};
		},
		onLoad(options) {
			if (options.title) {
				uni.setNavigationBarTitle({
					title: options.title
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F5F9F8;
	}

	.li-time {
		width: 168upx;
		height: 40upx;
		line-height: 40upx;
		background-color: #BDC0BD;
		border-radius: 6upx;
		font-size: 20upx;
		color: #FFFFFF;
		margin: 41upx auto 0;
		text-align: center;
	}

	.li-con {
		background-color: #FFFFFF;
		margin: 16upx 23upx 0;
		border-radius: 12upx;
		padding: 17upx 24upx;
		box-shadow: 0 5upx 19upx 1upx rgba(148, 148, 148, 0.1);

		.con-title {
			font-size: 28upx;
			color: #333333;
			font-weight: bold;
		}

		.con-con {
			display: flex;
			align-items: center;
			margin-top: 14upx;
		}

		.cc-left {
			width: 158upx;
			height: 122upx;
			background-color: #B8B8B8;
			border-radius: 12upx;
			flex-shrink: 0;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.cc-right {
			font-size: 26upx;
			color: #999999;
			margin-left: 22upx;
		}
	}
</style>
