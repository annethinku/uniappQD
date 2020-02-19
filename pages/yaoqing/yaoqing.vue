<template>
	<view>
		<uni-nav-bar left-icon="back" title="邀请的用户" right-icon="help" background-color="#15B2A3" color="#fff" :status-bar="true" :fixed="true"></uni-nav-bar>
	<!-- 	<view class="yq_head">
			<view class="yq_left" @click="returnTop">
				<image src="../../static/images/dw-jian@2x.png" mode=""></image>
			</view>
			<view class="yq_center">
				邀请的用户
			</view>
			<view class="yq_right">
				<image src="../../static/images/yq_question.png" mode=""></image>
			</view>
		</view> -->
		
		<view class="green_box">
			<view class="green_lis">
				<view class="gli" v-for="(item,index) in 6" :key="index">
					<view class="gli_left">
						<image src="../../static/images/default.png" mode=""></image>
					</view>
					<view class="gli_center">
						<view class="name">
							zc169
							<!-- 邀请的会员才显示下图并且显示是什么会员 -->
							 <image src="../../static/images/yq_dou01.png" mode="aspectFit"></image>
						</view>
						<view class="time">
							2020-01-10
						</view>
					</view>
					<view class="gli_right">
						+1.00
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			uniNavBar
		},
		methods:{
			returnTop(){
				uni.navigateBack({});
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #F8F9F7;
}
.yq_head{
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: space-between;
	background-color: #15B2A3;
	padding: 40upx 22upx;
	.yq_left{
		image{
			width: 20upx;
			height: 35upx;
		}
	}
	.yq_center{
		font-size: 36upx;
		color: #FFFFFF;
	}
	.yq_right{
		image{
			width: 40upx;
			height: 40upx;
		}
	}
}
.green_box{
	background-color: #15B2A3;
	height: 300upx;
	border-bottom-left-radius: 40upx;
	border-bottom-right-radius: 40upx;
	padding:50upx 20upx 0;
	.green_lis{
		background-color: #FFFFFF;
		border-radius: 20upx;
		.gli{
			padding: 33upx 0;
			border-bottom: 1upx #EEEEEE solid;
			margin: 0 35upx;
			display: flex;
			align-items: center;
			.gli_left{
				width: 101upx;
				height: 101upx;
				border-radius: 50%;
				overflow: hidden;
				flex-shrink: 0;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.gli_center{
				margin-left: 32upx;
				.name{
					font-size: 28upx;
					color: #3A425C;
					font-weight: bold;
					image{
						width:78upx;
						height:33upx;
						margin-left: 26upx;
					}
				}
				.time{
					font-size: 24upx;
					color: #999999;
					margin-top: 23upx;
				}
			}
			.gli_right{
				font-size: 28upx;
				color: #333333;
				font-weight: bold;
				margin-left: auto;
			}
		}
	}
}
</style>
