<template>
	<view>
		<uni-nav-bar :status-bar="true" :fixed="true">
			<view></view>
			<view slot="left"></view>
			<view slot="right">
				<view class="my-set">
					<view class="setBox">
						<view class="seticon"></view>
						<navigator url="../messages/messages" hover-class="none">
							<view class="messicon">
								<view class="dian"></view>
							</view>
						</navigator>
					</view>
				</view>
			</view>
		</uni-nav-bar>
		<view class="my-user">
			<view class="userimg">
				<image src="../../static/images/default.png" mode="" class="u"></image>
				<image src="../../static/images/my-vip.png" mode="" class="v" v-show="isSh"></image>
			</view>
			<view class="userinfo">
				<view class="nickname">
					zc169
				</view>
				<view class="des">
					推荐人ID：132240
				</view>
			</view>
			<view class="shanghu" v-show="isSh">
				<navigator url="">
					<text>商户</text>
					<image src="../../static/images/my-jiantW.png" mode="widthFix"></image>
				</navigator>
			</view>
		</view>
		<view class="my-month">
			<view class="month-box">
				<navigator url="../shouyiMX/shouyiMX" hover-class="none">
					<view class="num">
						0.00
					</view>
					<view class="des">
						<text>本月预估</text>
						<image src="../../static/images/my-jiant.png" mode="widthFix"></image>
					</view>
				</navigator>
			</view>
			<view class="month-box">
				<navigator url="../shouyiMX/shouyiMX" hover-class="none">
					<view class="num">
						0.00
					</view>
					<view class="des">
						<text>本月结算</text>
						<image src="../../static/images/my-jiant.png" mode="widthFix"></image>
					</view>
				</navigator>
			</view>
			<view class="month-box">
				<navigator url="../shouyiMX/shouyiMX" hover-class="none">
					<view class="num">
						0.00
					</view>
					<view class="des">
						<text>累计收益</text>
						<image src="../../static/images/my-jiant.png" mode="widthFix"></image>
					</view>
				</navigator>
			</view>
		</view>
		<view class="my-red">
			<view class="red1">
				总资产（元）
			</view>
			<view class="price">
				0.00
			</view>
			<view class="today">
				今日收益（元） + 0.00
			</view>
			<navigator url="../tixian/tixian" hover-class="none">
				<view class="tixian">
					<image src="" mode=""></image>
					<text>立即提现</text>
				</view>
			</navigator>
		</view>
		<view class="my-order">
			<view class="order-top">
				<view class="ot-left">
					我的订单
				</view>
				<view class="ot-right">
					<navigator url="../myOrder/myOrder" hover-class="none">
						<text>全部订单</text>
						<image src="../../static/images/my-jiant.png" mode="widthFix"></image>
					</navigator>
				</view>
			</view>
			<view class="order-bot">
				<view class="ob-box">
					<navigator url="../myOrder/myOrder" hover-class="none">
						<image src="../../static/images/my-order01.png" mode=""></image>
						<view class="title">
							待付款
						</view>
					</navigator>
				</view>
				<view class="ob-box">
					<navigator url="../myOrder/myOrder" hover-class="none">
						<image src="../../static/images/my-order02.png" mode=""></image>
						<view class="title">
							待使用
						</view>
					</navigator>
				</view>
				<view class="ob-box">
					<navigator url="../myOrder/myOrder" hover-class="none">
						<image src="../../static/images/my-order03.png" mode=""></image>
						<view class="title">
							待评价
						</view>
					</navigator>
				</view>
				<view class="ob-box">
					<navigator url="../myOrder/myOrder" hover-class="none">
						<image src="../../static/images/my-order04.png" mode=""></image>
						<view class="title">
							退款／售后
						</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="my-ad">
			<image src="../../static/images/my-yaoq.png" mode="widthFix"></image>
		</view>
		<view class="my-service">
			<view class="title">
				其他服务
			</view>
			<view class="others">
				<view class="box">
					<navigator url="" hover-class="none">
						<image src="../../static/images/my-otherYQ.png" mode="aspectFit"></image>
						<view class="name">
							邀请有礼
						</view>
					</navigator>
				</view>
				<view class="box">
					<navigator url="../hezuo/hezuo">
						<image src="../../static/images/my-other01.png" mode="aspectFit"></image>
						<view class="name">
							合作咨询
						</view>
					</navigator>
				</view>
				<view class="box">
					<navigator url="">
						<image src="../../static/images/my-other02.png" mode="aspectFit"></image>
						<view class="name">
							我的朋友
						</view>
					</navigator>
				</view>
				<view class="box">
					<navigator url="">
						<image src="../../static/images/my-other03.png" mode="aspectFit"></image>
						<view class="name">
							我的上级
						</view>
					</navigator>
				</view>
				<!-- 	<view class="box" v-show="!isSh">
					<navigator url="">
						<image src="../../static/images/my-other04.png" mode="aspectFit"></image>
						<view class="name">
							商家入驻
						</view>
					</navigator>
				</view> -->
				<view class="box">
					<navigator url="">
						<image src="../../static/images/my-other05.png" mode="aspectFit"></image>
						<view class="name">
							我的足迹
						</view>
					</navigator>
				</view>
				<view class="box">
					<navigator url="">
						<image src="../../static/images/my-other06.png" mode="aspectFit"></image>
						<view class="name">
							我的收藏
						</view>
					</navigator>
				</view>
				<view class="box">
					<navigator url="">
						<image src="../../static/images/my-other07.png" mode="aspectFit"></image>
						<view class="name">
							优惠券
						</view>
					</navigator>
				</view>
				<view class="box">
					<navigator url="">
						<image src="../../static/images/my-other08.png" mode="aspectFit"></image>
						<view class="name">
							银行卡
						</view>
					</navigator>
				</view>
				<view class="box">
					<navigator url="">
						<image src="../../static/images/my-other09.png" mode="aspectFit"></image>
						<view class="name">
							联系客服
						</view>
					</navigator>
				</view>
				<view class="box">
					<navigator url="">
						<image src="../../static/images/my-other10.png" mode="aspectFit"></image>
						<view class="name">
							关于奇豆
						</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="tabH"></view>
		<my-tab mindex="4"></my-tab>
	</view>
</template>

<script>
	import tabbar from '../../components/tabbar/tabbar.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				isSh: false
			};
		},
		components: {
			'my-tab': tabbar,
			uniNavBar
		},
	}
</script>

<style lang="scss" scoped>
	@mixin bg-image($url) {
		background-image: url($url + "@2x.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;

		@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
			background-image: url($url + "@3x.png");
			background-size: 100% 100%;
			background-repeat: no-repeat;
		}
	}

	.my-set {
		// position: absolute;
		// top: -40upx;
		// right: 31upx;
       padding-top: 20upx;
		.setBox {
			display: flex;

			.seticon {
				width: 44upx;
				height: 42upx;
				@include bg-image('../../static/images/my-setting');
			}

			.messicon {
				width: 42upx;
				height: 43upx;
				@include bg-image('../../static/images/my-message');
				margin: 0 32upx;
				position: relative;

				.dian {
					width: 16upx;
					height: 16upx;
					background-color: #FF0015;
					border-radius: 50%;
					position: absolute;
					right: -8upx;
					top: -8upx;
				}
			}
		}
	}

	.my-user {
		margin: 0 0 0 29upx;
		display: flex;
		align-items: center;
		position: relative;


		.userimg {
			width: 101upx;
			height: 101upx;
			flex-shrink: 0;
			position: relative;

			image.u {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}

			image.v {
				width: 36upx;
				height: 36upx;
				position: absolute;
				bottom: 0;
				right: 0;
			}
		}

		.userinfo {
			margin-left: 18upx;

			.nickname {
				font-size: 36upx;
				color: #333333;
				font-weight: bold;
			}

			.des {
				font-size: 22upx;
				color: #666666;
				margin-top: 23upx;
			}
		}

		.shanghu {
			width: 155upx;
			height: 50upx;
			line-height: 40upx;
			background-image: linear-gradient(left, #FF9068, #FF4E44);
			position: absolute;
			right: 0;
			bottom: 0;
			border-top-left-radius: 25upx;
			border-bottom-left-radius: 25upx;
			text-align: center;
			padding-left: 20upx;
			box-sizing: border-box;

			text {
				font-size: 28upx;
				color: #FFFFFF;
			}

			image {
				width: 9upx;
				height: 16upx;
				margin-left: 27upx;
				vertical-align: middle;
			}
		}
	}

	.my-month {
		margin-top: 50upx;
		display: flex;
		justify-content: space-between;

		.month-box {
			width: 33%;
			text-align: center;

			.num {
				font-size: 32upx;
				color: #666666;
				font-weight: bold;
				margin-bottom: 14upx;
			}

			.des {
				font-size: 24upx;
				color: #999999;
				padding-left: 9upx;
				box-sizing: border-box;

				image {
					width: 9upx;
					height: 16upx;
					margin-left: 13upx;
				}
			}
		}
	}

	.my-red {
		margin: 22upx 23upx 0;
		padding-bottom: 54upx;
		width: auto;
		@include bg-image('../../static/images/my-bg');
		position: relative;
		color: #FFFFFF;

		.red1 {
			padding: 48upx 0 0 69upx;
			font-size: 22upx;
		}

		.price {
			margin: 29upx 0 0 66upx;
			font-size: 64upx;
		}

		.today {
			margin: 57upx 0 0 69upx;
			font-size: 22upx;
		}

		.tixian {
			width: 179upx;
			height: 64upx;
			line-height: 60upx;
			background-color: rgba(255, 255, 255, 0.4);
			border-top-left-radius: 40upx;
			border-bottom-left-radius: 40upx;
			position: absolute;
			right: 0;
			top: 50%;
			margin-top: -32upx;
			text-align: center;

			image {
				width: 25upx;
				height: 24upx;
				margin-right: 15upx;
			}

			text {
				font-size: 28upx;
			}
		}
	}

	.my-order {
		margin-top: 59upx;

		.order-top {
			margin: 0 40upx;
			display: flex;
			justify-content: space-between;

			.ot-left {
				font-size: 28upx;
				color: #333333;
			}

			.ot-right {
				font-size: 24upx;
				color: #999999;

				image {
					width: 9upx;
					height: 16upx;
					margin-left: 14upx;
				}
			}
		}

		.order-bot {
			margin-top: 63upx;
			display: flex;
			align-items: flex-end;

			.ob-box {
				width: 25%;
				text-align: center;

				&:first-child {
					image {
						width: 52upx;
						height: 37upx;
					}
				}

				&:nth-child(2) {
					image {
						width: 51upx;
						height: 37upx;
					}
				}

				&:nth-child(3) {
					image {
						width: 51upx;
						height: 40upx;
					}
				}

				&:nth-child(4) {
					image {
						width: 47upx;
						height: 44upx;
					}
				}

				.title {
					font-size: 24upx;
					color: #6C7072;
					margin-top: 10upx;
				}
			}
		}
	}

	.my-ad {
		background-color: rgba(0, 27, 50, 0.04);
		margin-top: 25upx;
		padding: 25upx 33upx 24upx 37upx;

		image {
			width: 100%;
		}
	}

	.my-service {
		margin-top: 36upx;
		border-bottom: 20upx rgba(0, 27, 50, 0.04) solid;

		.title {
			margin-left: 40upx;
			font-size: 28upx;
			color: #333333;
			margin-bottom: 55upx;
		}

		.others {
			display: flex;
			flex-wrap: wrap;

			.box {
				width: 25%;
				text-align: center;
				margin-bottom: 70upx;

				image {
					width: 45upx;
					height: 45upx;
					vertical-align: middle;
				}

				.name {
					font-size: 26upx;
					color: #666666;
					margin-top: 33upx;
				}
			}
		}
	}
</style>
