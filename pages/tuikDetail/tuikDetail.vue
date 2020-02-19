<template>
	<view>
		<view class="tk_name">
			退款信息
		</view>
		<view class="tuik_money">
			<view class="tkm_li">
				<view class="li_left">
					退款金额：
				</view>
				<view class="li_right">
					￥79
				</view>
			</view>
			<view class="tkm_li">
				<view class="li_left">
					退款方式：
				</view>
				<view class="li_right">
					原路返还
				</view>
			</view>
			<view class="tkm_li">
				<view class="li_left">
					订单号：
				</view>
				<view class="li_right">
					HG 8156542
				</view>
			</view>
			<view class="tkm_li">
				<view class="li_left">
					申请时间：
				</view>
				<view class="li_right">
					2020-02-17   16:34
				</view>
			</view>
		</view>
		<view class="steps">
			<view class="steps-box active">
				<view class="dian red"></view>
				<view class="title">
					奇豆审核通过
				</view>
			</view>
			<view class="steps-box">
				<view class="dian big red"></view>
				<view class="title active">
					第三方(支付宝微信银行)正在处理您的退款信息
				</view>
			</view>
			<view class="steps-box">
				<view class="dian"></view>
				<view class="title">
					退款入账
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

	.tk_name {
		font-size: 32upx;
		color: #333333;
		padding: 26upx 47upx;
		background-color: #FFFFFF;
		border-bottom: 1upx #EEEEEE solid;
		margin-top: 20upx;
	}

	.tuik_money {
		background-color: #FFFFFF;
		padding-bottom: 34upx;
		.tkm_li {
			padding: 38upx 46upx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28upx;
			color: #333333;
		}
	}
	.steps{
		padding: 109upx 0 0 50upx;
		margin-top: 20upx;
		background-color: #FFFFFF;
		.steps-box{
			position: relative;
			padding:0 0 107upx 50upx;
			border-left: 4upx #FFE4DE solid;
			&:last-child{
				border-left: none;
			}
			&.active{
					border-left: 4upx #FF6342 solid;
			}
			.dian{
				width: 18upx;
				height: 18upx;
				background-color: #FFF5F5;
				border: 4upx #FAE3E4 solid;
				border-radius: 50%;
				position: absolute;
				left:-11upx;
				top: 0;
				&.red{
					border: 4upx #FF6342 solid;
					background-color: #FAE3E4;
					left: -14upx;
				}
				&.big{
					background-color: #FF6342;
					width:46upx;
					height: 46upx;
					left: -28upx;
					top: -10upx;
					border: 4upx #FF6342 solid;
				}
			}
			.title{
				font-size:28upx;
				color: #333;
				position: relative;
				top: -10upx;
				&.active{
					color: #333333;
					font-weight: bold;
				}
			}
			.desc{
				font-size: 30upx;
				color: #666666;
			}
		}
	}
</style>
