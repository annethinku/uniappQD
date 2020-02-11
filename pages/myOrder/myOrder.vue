<template>
	<view>
		<view class="order_navs">
			<view class="navsbox active">
				<text>全部</text>
			</view>
			<view class="navsbox">
				<text>待付款</text>
			</view>
			<view class="navsbox">
				<text>待使用</text>
			</view>
			<view class="navsbox">
				<text>待评价</text>
			</view>
			<view class="navsbox">
				<text>退款/售后</text>
			</view>
		</view>
		<view class="order_con">
			<view class="orderc_box" v-for="(item,index) in 4" :key="index">
				<view class="con_top">
					<view class="ctopleft">
						<image src="../../static/images/index-icon01.png" mode=""></image>
					     <text>阿斯顿餐厅代金卷</text>
					</view>
					<view class="ctopright">
						<text class="">待付款</text>
					</view>
				</view>
			    <view class="con_bot">
			    	<view class="conbleft">
			    		<image src="" mode=""></image>
			    	</view>
					<view class="conbright">
						<view class="time">
							下单时间：2020-10-2 12:20
						</view>
						<view class="num">
							数量：1
						</view>
						<view class="total">
							<view class="font">
								总价：￥88
							</view>
							<view class="btn difw">
								删除
							</view>
							<view class="btn">
								<navigator url="../orderDetail/orderDetail" hover-class="none">去付款</navigator>
							</view>
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
	page{
		background-color: #F8F9F7;
	}
.order_navs{
	background-color: #FFFFFF;
	border-top: 1upx #DDDDDD solid;
	padding: 39upx 0 26upx;
	display: flex;
}
.navsbox{
	flex: 1;
	font-size: 26upx;
	color: #333333;
	text-align: center;
	&.active{
		font-weight: bold;
		text{
			border-bottom: 4upx #BF1511 solid;
			padding-bottom: 26upx;
		}
	}
}
.order_con{
	.orderc_box{
		margin: 20upx 23upx;
		background-color: #FFFFFF;
		box-shadow:0 1upx 10upx 0 rgba(207,207,207,0.1);
		border-radius:30upx;
		.con_top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20upx 33upx;
			border-bottom: 1upx #EEEEEE solid;
			.ctopleft{
			    font-size: 28upx;
				color: #333333;
               image{
				   width: 42upx;
				   height: 42upx;
				   margin-right: 13upx;
				   vertical-align: middle;
				   position: relative;
				   top: -4upx;
			   }
			}
			.ctopright{
				font-size: 24upx;
				color: #666666;
				.red{
					color: #F55050;
				}
			}
		}
		.con_bot{
			padding: 29upx 27upx 29upx 35upx;
			display: flex;
			.conbleft{
				width:130upx;
				height:130upx;
				border-radius:6upx;
				overflow: hidden;
				flex-shrink: 0;
				background-color: #EEEEEE;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.conbright{
				line-height: 27upx;
				flex: 1;
				margin-left: 20upx;
				font-size: 24upx;
				.time{
					color: #333333;
					font-weight: bold;
					margin-bottom: 35upx;
				}
				.num,.font{
					color: #666;
				}
				.total{
					display: flex;
					justify-content: space-between;
					margin-top: 18upx;
					.btn{
						width:160upx;
						height:50upx;
						line-height: 50upx;
						border:1upx solid rgba(196,196,196,1);
						border-radius:25upx;
						color: #333333;
						text-align: center;
						&.difw{
							width:106upx;
							margin: 0 19upx 0 auto;
						}
					}
				}
			}
		}
	}
}
</style>
