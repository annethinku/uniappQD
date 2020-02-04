<template>
	<view>
		<view class="records-list">
			<navigator url="../tixianDetail/tixianDetail" hover-class="none">
				<view class="reco-li">
					<view class="rel-left">
						<view class="title">
							提现
						</view>
						<view class="time">
							2020-01-10
						</view>
					</view>
					<view class="rel-right">
						<view class="num">
							-500.00
						</view>
						<view class="desc red">
							处理中
						</view>
					</view>
				</view>
			</navigator>
			<view class="reco-li">
					<view class="rel-left">
						<view class="title">
							提现
						</view>
						<view class="time">
							2020-01-10
						</view>
					</view>
					<view class="rel-right">
						<view class="num">
							-1000.00
						</view>
						<view class="desc">
							提现成功
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
.records-list{
	.reco-li{
		margin: 0 29upx;
		border-bottom: 1upx #EEEEEE solid;
		padding: 28upx 30upx 28upx 14upx;
		display: flex;
		justify-content: space-between;
		.rel-left{
			color: #666666;
			.title{
				font-size: 30upx;
				margin-bottom: 17upx;
			}
			.time{
				font-size: 24upx;
			}
		}
		.rel-right{
			text-align: right;
			.num{
				font-size: 30upx;
				color: #333333;
				margin-bottom: 17upx;
			}
			.desc{
				font-size: 24upx;
				color: #666666;
				&.red{
					color: #FF5842;
				}
			}
		}
		
	}
}
</style>
