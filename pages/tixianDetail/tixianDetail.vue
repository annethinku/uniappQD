<template>
	<view>
		<view class="steps">
			<view class="steps-box active">
				<view class="dian red"></view>
				<view class="title">
					发起提现
				</view>
			</view>
			<view class="steps-box">
				<view class="dian big red"></view>
				<view class="title active">
					微信处理中
				</view>
				<view class="desc">
					预计1-24小时内到账
				</view>
			</view>
			<view class="steps-box">
				<view class="dian"></view>
				<view class="title">
					到账成功
				</view>
			</view>
		</view>
		<view class="details">
			<view class="de-li">
				<view class="label">
					提现金额
				</view>
				<view class="desc">
					￥500.00
				</view>
			</view>
			<view class="de-li">
				<view class="label">
					提现账户
				</view>
				<view class="desc">
					微信
				</view>
			</view>
			<view class="de-li">
				<view class="label">
					提现时间
				</view>
				<view class="desc">
					2020-1-17 12：20
				</view>
			</view>
		</view>
	    <view class="d-btns">
	    	好的
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
.steps{
	padding: 109upx 0 0 79upx;
	margin-top: 10upx;
	background-color: #FFFFFF;
	.steps-box{
		position: relative;
		padding:0 0 107upx 82upx;
		border-left: 2upx #BFBFBF dashed;
		&:last-child{
			border-left: none;
		}
		&.active{
				border-left: 2upx #FF6342 dashed;
		}
		.dian{
			width: 18upx;
			height: 18upx;
			background-color: #BFBFBF;
			border-radius: 50%;
			position: absolute;
			left: -9upx;
			top: 0;
			&.red{
				background-color: #FF6342;
			}
			&.big{
				width: 50upx;
				height: 50upx;
				left: -25upx;
			}
		}
		.title{
			font-size: 36upx;
			color: #666666;
			position: relative;
			top: -20upx;
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
	.details{
		padding: 48upx 29upx 0;
		border-top: 1upx #EEEEEE solid;
		background-color: #FFFFFF;
		.de-li{
			padding-bottom: 37upx;
			display: flex;
			justify-content: space-between;
			.label{
				font-size: 30upx;
				color: #666666;
			}
			.desc{
				font-size: 30upx;
				color: #333333;
				font-weight: bold;
			}
		}
	}
	.d-btns{
		margin: 135upx 32upx 0;
		width:auto;
		height:92upx;
		line-height: 92upx;
		background:linear-gradient(90deg,rgba(253,123,94,1),rgba(253,78,62,1));
		border-radius:46upx;
		font-size: 36upx;
		color: #FFFFFF;
		text-align: center;
	}
</style>
