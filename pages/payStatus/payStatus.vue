<template>
	<view>
		<!-- 支付成功显示 -->
		<view class="orange" v-show="status">
			<view class="status-img">
				<image src="../../static/images/pay-successs.png" mode=""></image>
			</view>
			<view class="orange_gan"></view>
			<view class="big_white">
				<view class="dname">
					阿斯顿餐厅代金卷
				</view>
				<view class="order-price">
					￥ <text>79.00</text>
				</view>
			    <view class="n-update">
			    	<view class="nup_left">
			    		<view class="name">
			    			卷码：
			    		</view>
						<view class="numbers">
							<view class="nli" v-for="(item,index) in 6" :key="index">
								8889  6542  5432
							</view>
						</view>
			    	</view>
					<view class="nup_right">
						<view class="name">
							发给朋友
						</view>
						<view class="ewmcode">
							<image src="" mode=""></image>
						</view>
					</view>
			    </view>
			</view>
			<navigator url="../orderDetail/orderDetail" hover-class="none">
				<view class="ddxq-btn mt">
					订单详情
				</view>
			</navigator>
			<view class="ad">
				<image src="../../static/images/pays-ad.png" mode="widthFix"></image>
				<view class="zz_phone">
					招商热线：155-5555-5555
				</view>
			</view>
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
            .dname{
				font-size: 26upx;
				color: #333333;
				padding: 29upx 0;
				text-align: center;
			}

			.order-price {
				text-align: center;
				font-size: 36upx;
				color: #333333;
				padding:0 0 66upx;

				text {
					font-size: 72upx;
					font-weight: bold;
				}
			}
           .n-update{
			   border-top: 1upx #BBBBBB dashed;
			   margin: 0 13upx;
			   padding: 26upx 26upx 0;
			   display: flex;
			   .nup_left{
				   .name{
					   font-size: 26upx;
					   color: #333333;
					   margin-bottom: 40upx;
				   }
				   .numbers{
					   font-size: 30upx;
					   color: #333333;
					   font-weight: bold;
					   .nli{
						   margin-bottom: 29upx;
					   }
				   }
			   }
			   .nup_right{
				   text-align: right;
				   margin-left: auto;
				   .name{
					   color: #FF8048;
					   font-size: 26upx;
					   margin-bottom: 24upx;
				   }
				   .ewmcode{
					   width: 290upx;
					   height: 290upx;
					   background-color: #EEEEEE;
					   image{
						   width: 100%;
						   height: 100%;
					   }
				   }
			   }
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
	.ad{
		width: 100%;
		margin-top: 100upx;
		position: relative;
		image{
			width: 100%;
		}
		.zz_phone{
			font-size: 22upx;
			color: #F6B40B;
			width:343upx;
			height:30upx;
			background:#FFFFFF;
			border-radius:15upx;
			text-align: center;
			line-height: 30upx;
		    position: absolute;
			bottom: 22upx;
			left: 50%;
			margin-left: -171upx;
		}
	}
</style>
