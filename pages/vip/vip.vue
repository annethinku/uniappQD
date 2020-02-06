<template>
	<view>
		<!-- 未开通vip显示 -->
		<view class="no-open" v-show="!isVip">
			<view class="no-top">
				<view class="kt-btn">
					立即开通
				</view>
			</view>
			<view class="no-center">
				<view class="order-top">
					<view class="ot-left">
						会员权益
					</view>
					<view class="ot-right">
						<text>更多权益</text>
						<image src="../../static/images/my-jiant.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="noc-con">
					<view class="con-box">
						<image src="../../static/images/vip-icon01.png" mode="widthFix"></image>
						<view class="title">
							自购省100%
						</view>
						<view class="des">
							等级越高 省的越多
						</view>
					</view>
					<view class="con-box">
						<image src="../../static/images/vip-icon02.png" mode="widthFix"></image>
						<view class="title">
							佣金提成
						</view>
						<view class="des">
							佣金14%提成
						</view>
					</view>
					<view class="con-box">
						<image src="../../static/images/vip-icon03.png" mode="widthFix"></image>
						<view class="title">
							点评优先展示
						</view>
						<view class="des">
							自动置顶 就是这么优秀
						</view>
					</view>
					<view class="con-box">
						<image src="../../static/images/vip-icon04.png" mode="widthFix"></image>
						<view class="title">
							会员专属活动
						</view>
						<view class="des">
							神秘惊喜打包带给你
						</view>
					</view>
					<view class="con-box">
						<image src="../../static/images/vip-icon05.png" mode="widthFix"></image>
						<view class="title">
							专属客服
						</view>
						<view class="des">
							1对1专属客服
						</view>
					</view>
					<view class="con-box">
						<image src="../../static/images/vip-icon06.png" mode="widthFix"></image>
						<view class="title">
							VIP专属徽章
						</view>
						<view class="des">
							专属标志 尊贵的你
						</view>
					</view>

				</view>
			</view>
			<view class="nh"></view>
			<view class="noo-fixed">
				<view class="fflex">
					<view class="btn">
						<text class="f1">￥</text>
						<text class="f2">98</text>
						<text class="f3">立即开通</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 开通vip后显示 -->
		<view class="open-after" v-show="isVip">
			<view class="oa-top">
				<view class="oat-img">
					<image src="../../static/images/vip_zs01.png" mode="widthFix"></image>
				</view>
				<view class="oat-pro">
					<view class="pro01">
						<image src="../../static/images/vip-pro01.png" mode="widthFix"></image>
					</view>
					<view class="pro02">
						<view class="inpro">
							<view class="inmove"></view>
						</view>
					</view>
					<view class="pro01">
						<image src="../../static/images/vip-pro02.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<navigator url="../vipMX/vipMX">
				<view class="oa-top02">
					<view class="top02-left">
						成长值
					</view>
					<view class="top02-right">
						成长详细
						<image src="../../static/images/my-jiant.png" mode="widthFix"></image>
					</view>
				</view>
			</navigator>
			<view class="oa-two">
				<view class="title">
					成长值构成
				</view>
				<view class="content">
					<view class="con_box">
						<view class="conb_title">
							<image src="../../static/images/vip-douGrey01.png" mode="" class="w1"></image>
							<text>银豆推荐</text>
						</view>
						<view class="conb_num">
							50/100
						</view>
						<view class="conb_des">
							还需推荐5名
						</view>
					</view>
					<view class="con_box">
						<view class="conb_title">
							<image src="../../static/images/vip-douGrey02.png" mode="" class="w2"></image>
							<text>团队银豆</text>
						</view>
						<view class="conb_num">
							0/2000
						</view>
						<view class="conb_des">
							还需推荐200名
						</view>
					</view>
				</view>
			</view>
			<view class="oa-three">
				<view class="three-title">
					<image src="../../static/images/vip-titleicon.png" mode="aspectFit"></image>
					<text>我的权益</text>
					<image src="../../static/images/vip-titleicon.png" mode="aspectFit"></image>
				</view>
				<view class="three-con">
					<view class="con-box" v-for="(item,index) in vipQy.list" :key="index">
						<image :src="item.icon" mode="widthFix"></image>
						<view class="title">
							{{item.navname}}
						</view>
						<view class="des">
							{{item.f_title}}
						</view>
					</view>
					<!-- 		<view class="con-box">
						<image src="../../static/images/vip-icon02.png" mode="widthFix"></image>
						<view class="title">
							佣金提成
						</view>
						<view class="des">
							佣金14%提成
						</view>
					</view>
					<view class="con-box">
						<image src="../../static/images/vip-icon03.png" mode="widthFix"></image>
						<view class="title">
							点评优先展示
						</view>
						<view class="des">
							自动置顶 就是这么优秀
						</view>
					</view>
					<view class="con-box">
						<image src="../../static/images/vip-icon04.png" mode="widthFix"></image>
						<view class="title">
							会员专属活动
						</view>
						<view class="des">
							神秘惊喜打包带给你
						</view>
					</view>
					<view class="con-box">
						<image src="../../static/images/vip-icon05.png" mode="widthFix"></image>
						<view class="title">
							专属客服
						</view>
						<view class="des">
							1对1专属客服
						</view>
					</view>
					<view class="con-box">
						<image src="../../static/images/vip-icon06.png" mode="widthFix"></image>
						<view class="title">
							VIP专属徽章
						</view>
						<view class="des">
							专属标志 尊贵的你
						</view>
					</view>
					 -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tools from '../../static/js/tools.js'
	export default {
		data() {
			return {
				isVip: false,
				vipQy: []
			};
		},
		mounted() {
			let token = uni.getStorageSync('token'); //登录后才会有token
			tools.myRequest('api.attestation.home', {
				token: token
			}, 'GET').then(res => {
				// console.log(res);
				if (res.status == 1) {
					this.isVip = true;
					this.vipQy = res.result;
				} else {
					if (token) {
						// 不是vip 未开通
						this.isVip = false;
					} else {
						// 跳转到登录页面
					}
				}
			}).catch(error => {
				console.log('请求失败：');
				console.log(error);
			})
		}
	}
</script>

<style lang="scss" scoped>
	@mixin bg-image($url) {
		background-image: url($url + "@2x.png");
		background-size: 100% auto;
		background-repeat: no-repeat;

		@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
			background-image: url($url + "@3x.png");
			background-size: 100% auto;
			background-repeat: no-repeat;
		}
	}

	.no-open {
		padding-top: 30upx;
		background-color: #454653;

		.no-top {
			width: 100%;
			height: 251upx;
			background: url('../../static/images/bip-bg.png') no-repeat center;
			background-size: cover;
			position: relative;

			.kt-btn {
				width: 216upx;
				height: 76upx;
				line-height: 76upx;
				border-radius: 40upx;
				background-color: #FAF7F8;
				box-shadow: 0 5upx 29upx 0 rgba(174, 174, 174, 0.35);
				text-align: center;
				font-size: 32upx;
				color: #AF8838;
				position: absolute;
				left: 50%;
				margin-left: -108upx;
				bottom: 0;
			}
		}

		.no-center {
			background-color: #FAF7F8;
			padding: 50upx 83upx 50upx 97upx;

			.order-top {
				display: flex;
				justify-content: space-between;

				.ot-left {
					font-size: 30upx;
					color: #4C3824;
				}

				.ot-right {
					font-size: 22upx;
					color: #A3A3A7;

					image {
						width: 7upx;
						height: 12upx;
						margin-left: 12upx;
						vertical-align: middle;
					}
				}
			}

			.noc-con {
				margin-top: 71upx;
				display: flex;
				flex-wrap: wrap;

				.con-box {
					width: 50%;
					text-align: center;
					margin-bottom: 47upx;

					image {
						width: 72upx;
						height: 72upx;
					}

					.title {
						font-weight: bold;
						font-size: 24upx;
						color: #343434;
						margin-top: 15upx;
					}

					.des {
						width: 138upx;
						margin: 9upx auto 0;
						font-size: 22upx;
						color: #A3A3A7;
						text-align: left;
					}
				}
			}
		}

		.nh {
			height: 141upx;
		}

		.noo-fixed {
			width: 100%;
			height: 141upx;
			box-shadow: 0 5upx 29upx 0 rgba(122, 122, 122, 0.35);
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 99;
			background-color: #FAF7F8;

			.fflex {
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;

				.btn {
					height: 90upx;
					width: 100%;
					line-height: 86upx;
					margin: 0 66upx;
					background-color: #D7B772;
					border-radius: 45upx;
					text-align: center;
					color: #FFFFFF;
					font-weight: bold;

					.f1 {
						font-size: 24upx;
					}

					.f2 {
						font-size: 44upx;
						margin-left: 6upx;
					}

					.f3 {
						font-size: 32upx;
						margin-left: 44upx;
					}
				}
			}
		}
	}

	.open-after {
		.oa-top {
			// background-color: #454653;
			padding: 40upx 44upx 16upx 53upx;
			position: relative;
			@include bg-image('../../static/images/vip-bgy');

			.oat-img {
				width: 262upx;
				margin: 0 auto;

				image {
					width: 100%;
				}
			}

			.oat-pro {
				margin-top: 27upx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.pro01 {
					width: 60upx;

					image {
						width: 100%;
					}

					&:last-child {
						width: 68upx;
					}
				}

				.pro02 {
					margin: 0 16upx 0 9upx;
					width: auto;
					flex: 1;
					height: 4upx;
					background-color: #63524A;
					border-radius: 2upx;
					position: relative;

					.inpro {
						width: 60%;
						height: 100%;
						position: absolute;
						left: 0;
						top: 0;
						background-color: #FFFDF1;

						.inmove {
							width: 18upx;
							height: 18upx;
							background: rgba(231, 148, 83, 1);
							border: 3upx solid rgba(252, 252, 222, 1);
							border-radius: 50%;
							position: absolute;
							right: -9upx;
							top: -9upx;
						}
					}
				}
			}
		}

		.oa-top02 {
			background: rgba(69, 70, 83, 1);
			box-shadow: 0 -8upx 20upx 0 rgba(0, 0, 0, 0.1);
			padding: 38upx 50upx 40upx;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			position: relative;
			z-index: 2;

			.top02-left {
				font-size: 30upx;
				color: #FFFFFF;
			}

			.top02-right {
				font-size: 22upx;
				color: #A3A3A7;

				image {
					width: 7upx;
					height: 12upx;
					margin-left: 12upx;
					vertical-align: middle;
				}
			}
		}

		.oa-two {
			margin: 48upx 31upx 0 39upx;
			padding: 23upx 0 52upx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 1upx 20upx 0px rgba(81, 81, 81, 0.2);
			border-radius: 20upx;

			.title {
				text-align: center;
				font-size: 26upx;
				color: #333333;
				font-weight: bold;
				margin-bottom: 36upx;
			}

			.content {
				display: flex;

				.con_box {
					width: 50%;
					text-align: center;

					.conb_title {
						font-size: 24upx;
						color: #333333;
						position: relative;
						display: inline-block;
						image {
							margin-right: 10upx;
							vertical-align: middle;
							&.w1{
								width: 33upx;
								height: 38upx;
								margin-left: -33upx;
							}
							&.w2{
								width: 47upx;
								height: 43upx;
								margin-left: -47upx;
							}
						}
					}

					.conb_num {
						font-size: 36upx;
						color: #333333;
						margin-top: 24upx;
					}

					.conb_des {
						font-size: 24upx;
						color: #999999;
						margin-top: 17upx;
					}
				}
			}
		}

		.oa-three {
			margin-top: 74upx;

			.three-title {
				display: flex;
				align-items: center;
				justify-content: center;

				image {
					width: 12upx;
					height: 18upx;
				}

				text {
					font-size: 30upx;
					color: #333333;
					margin: 0 33upx;
				}
			}

			.three-con {
				margin-top: 54upx;
				display: flex;
				flex-wrap: wrap;

				.con-box {
					width: 33%;
					text-align: center;
					margin-bottom: 47upx;

					image {
						width: 72upx;
						height: 72upx;
					}

					.title {
						width: 70%;
						font-weight: bold;
						font-size: 24upx;
						color: #343434;
						margin: 15upx auto 0;
						overflow: hidden;
						text-overflow: ellipsis;
						-ms-text-overflow: ellipsis;
						white-space: nowrap;
					}

					.des {
						width: 70%;
						margin: 9upx auto 0;
						font-size: 22upx;
						color: #A3A3A7;
						text-align: left;
						overflow: hidden;
						text-overflow: ellipsis;
						-ms-text-overflow: ellipsis;
						display: box;
						display: -webkit-box;
						line-clamp: 2;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}
</style>
