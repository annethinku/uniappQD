<template>
	<view>
		<view class="help_white">
			<view class="title">
				<view class="line"></view>
				<text>关于收入</text>
			</view>
			<view class="content">
				<view class="help_li">
					<view class="helpli_left">
						本月预估
					</view>
					<view class="helpli_right">
					    位置留着等领导决定位置留着等领导决定内容
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导        
					</view>
				</view>
				<view class="help_li">
					<view class="helpli_left">
						本月结算
					</view>
					<view class="helpli_right">
					    位置留着等领导决定位置留着等领导决定内容
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导        
					</view>
				</view>
				<view class="help_li">
					<view class="helpli_left">
						累计收益
					</view>
					<view class="helpli_right">
					    位置留着等领导决定位置留着等领导决定内容
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导        
					</view>
				</view>
			     <view class="help_warn">
			     	注意：本月预估和本月结算是根据订单的不同时间结算，会造成
			     	预估收入和本月结算有一定差距，这是正常现象，无需担心
			     </view>
			</view>
		</view>
		<view class="help_white">
			<view class="title">
				<view class="line"></view>
				<text>关于提现</text>
			</view>
			<view class="content">
				<view class="help_li">
					<view class="helpli_left">
						可提现收入
					</view>
					<view class="helpli_right">
					    位置留着等领导决定位置留着等领导决定内容
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导        
					</view>
				</view>
			     <view class="help_warn">
			     	注意：每日提现金额上限金额为￥20000.00
			     </view>
			</view>
		</view>
		<view class="help_white">
			<view class="title">
				<view class="line"></view>
				<text>关于订单</text>
			</view>
			<view class="content">
				<view class="help_li">
					<view class="helpli_left">
						商家订单
					</view>
					<view class="helpli_right">
					    位置留着等领导决定位置留着等领导决定内容
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导        
					</view>
				</view>
				<view class="help_li">
					<view class="helpli_left">
						会员订单
					</view>
					<view class="helpli_right">
					    位置留着等领导决定位置留着等领导决定内容
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导        
					</view>
				</view>
				<view class="help_li">
					<view class="helpli_left">
						用户订单
					</view>
					<view class="helpli_right">
					    位置留着等领导决定位置留着等领导决定内容
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导
						位置留着等领导决定内容输出位置留着等领导        
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
.help_white{
	background-color: #FFFFFF;
	margin-top: 20upx;
	padding: 33upx 36upx;
	.title{
		font-size: 32upx;
		color: #333333;
		margin-bottom: 51upx;
		.line{
			width:6upx;
			height:36upx;
			background:rgba(255,157,78,1);
			border-radius:3upx;
			display: inline-block;
			margin-right: 28upx;
			position: relative;
			top: 5upx;
		}
	}
	.content{
		.help_li{
			display: flex;
			justify-content: space-between;
			margin-bottom: 47upx;
			.helpli_left{
				font-size:32upx;
				font-weight:bold;
				color:rgba(51,51,51,1);
			}
			.helpli_right{
				width: 478upx;
				font-size: 24upx;
				color: #666666;
				line-height: 40upx;
			}
		}
		.help_warn{
			font-size:24upx;
			color:rgba(238,73,73,1);
			line-height:27upx;
		}
	}
}
</style>
