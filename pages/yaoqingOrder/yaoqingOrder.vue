<template>
	<view>
		<uni-nav-bar left-icon="back" title="商家订单" right-icon="help" background-color="#15B2A3" color="#fff" :status-bar="true"
		 @clickLeft="returnTop" @clickRight="jumpHelp"></uni-nav-bar>

		<view class="bc-navs" id="the-id">
			<scroll-view scroll-x="true" class="bc-scroll" :class="top<10&&top?'fixed':''">
				<view class="nav_li" v-for="(item,index) in navList" :key="index" :class="index==curIndex?'active':''" @click="changeNav(index,item.id)">
					{{item}}
				</view>
			</scroll-view>
		</view>
		<view class="green_box">
			<view class="green_lis">
				<view class="out_li" v-for="(item,index) in 4" :key="index">
					<view class="gli">
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
								79代100代金卷
							</view>
							<view class="diff-status">
								<view class="com-btn orange">
									待结算
								</view>
								<!-- 	<view class="com-btn green">
									已结算
								</view>
								<view class="com-btn grey">
									已失效
								</view> -->
							</view>
						</view>
						<view class="gli_right">
							2020-01-10
						</view>
					</view>
					<view class="order_money">
						<view class="om_box">
							<view class="title">
								商品金额
							</view>
							<view class="money">
								79.00
							</view>
						</view>
						<view class="om_box">
							<view class="title">
								结算金额
							</view>
							<view class="money">
								79.00
							</view>
						</view>
						<view class="om_box">
							<view class="title">
								预估收益
							</view>
							<view class="money">
								0.79
							</view>
						</view>
						<view class="om_box">
							<view class="title">
								提成
							</view>
							<view class="money">
								1%
							</view>
						</view>
					</view>
				</view>
				<view class="out_li">
					<view class="gli">
						<view class="gli_left diffSJ">
							<image src="" mode=""></image>
						</view>
						<view class="gli_center">
							<view class="name">
								阿斯顿餐厅
							</view>
							<view class="time">
								79代100代金卷
							</view>
							<view class="diff-status">
								<view class="com-btn orange">
									待结算
								</view>
								<view class="com-btn green">
									已结算
								</view>
								<view class="com-btn grey">
									已失效
								</view>
							</view>
						</view>
						<view class="gli_right">
							2020-01-10
						</view>
					</view>
					<view class="order_money">
						<view class="om_box">
							<view class="title">
								商品金额
							</view>
							<view class="money">
								79.00
							</view>
						</view>
						<view class="om_box">
							<view class="title">
								结算金额
							</view>
							<view class="money">
								79.00
							</view>
						</view>
						<view class="om_box">
							<view class="title">
								预估收益
							</view>
							<view class="money">
								0.79
							</view>
						</view>
						<view class="om_box">
							<view class="title">
								提成
							</view>
							<view class="money">
								1%
							</view>
						</view>
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
				navList: ['全部', '待结算', '已结算', '已失效', '累计结算'],
				top: null,
				curIndex: 0,
				title: '商家订单'
			};
		},
		components: {
			uniNavBar
		},
		onLoad(options) {
			if (options.title) {
				uni.setNavigationBarTitle({
					title: options.title
				});
			}
		},
		onPageScroll(e) {
			this.getDivtop();
		},
		methods: {
			returnTop() {
				uni.navigateBack({});
			},
			// 获取导航距离顶部的位置
			getDivtop() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#the-id').boundingClientRect(data => {
					// console.log("得到布局位置信息" + JSON.stringify(data));
					// console.log("节点离页面顶部的距离为" + data.top);
					this.top = data.top;
				}).exec();
			},
			jumpHelp(){
				uni.navigateTo({
					url:'../help/help'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F9F7;
	}

	.yq_head {
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: space-between;
		background-color: #15B2A3;
		padding: 40upx 22upx;

		.yq_left {
			image {
				width: 20upx;
				height: 35upx;
			}
		}

		.yq_center {
			font-size: 36upx;
			color: #FFFFFF;
		}

		.yq_right {
			image {
				width: 40upx;
				height: 40upx;
			}
		}
	}

	.bc-navs {
		width: 100%;
		overflow: hidden;

		.bc-scroll {
			background-color: #15B2A3;
			padding-left: 37upx;
			white-space: nowrap;

			.nav_li {
				display: inline-block;
				padding: 29upx 0;
				margin-right: 63upx;
				font-size: 30upx;
				color: #fff;

				&.active {
					font-size: 36upx;
					color: #fff;
					font-weight: bold;
					border-bottom: 4upx #fff solid;
				}
			}
		}

		.fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 111;
		}
	}

	.green_box {
		background-color: #15B2A3;
		height: 300upx;
		border-bottom-left-radius: 40upx;
		border-bottom-right-radius: 40upx;
		padding: 50upx 20upx 0;

		.green_lis {
			.out_li {
				padding: 33upx 28upx;
				background-color: #FFFFFF;
				border-radius: 20upx;
				margin-bottom: 20upx;
			}

			.gli {
				display: flex;
				align-items: center;

				.gli_left {
					width: 101upx;
					height: 101upx;
					border-radius: 50%;
					overflow: hidden;
					flex-shrink: 0;

					image {
						width: 100%;
						height: 100%;
					}

					&.diffSJ {
						width: 130upx;
						height: 130upx;
						background-color: #EEEEEE;
						border-radius: 4upx;
					}
				}

				.gli_center {
					margin-left: 32upx;

					.name {
						font-size: 28upx;
						color: #3A425C;
						font-weight: bold;

						image {
							width: 78upx;
							height: 33upx;
							margin-left: 26upx;
						}
					}

					.time {
						font-size: 24upx;
						color: #333;
						margin-top: 16upx;
					}

					.diff-status {
						display: flex;
						flex-wrap: wrap;

						.com-btn {
							font-size: 22upx;
							color: #FFFFFF;
							margin: 24upx 28upx 0 0;
							display: inline-block;
							padding: 0 15upx;
							border-radius: 18upx;
                            &:last-child{
								margin-right: 0;
							}
							&.orange {
								background-color: #FF9D4E;
							}

							&.grey {
								background-color: #CCCCCC;
							}

							&.green {
								background-color: #8CC23A;
							}
						}
					}
				}

				.gli_right {
					font-size: 24upx;
					color: #999999;
					margin-left: auto;
					align-self: flex-start;
				}
			}

			.order_money {
				display: flex;
				margin-top: 44upx;

				.om_box {
					flex: 1;
					text-align: center;

					.title {
						font-size: 26upx;
						color: #999999;
					}

					.money {
						font-size: 28upx;
						color: #333333;
						margin-top: 13upx;
					}
				}
			}
		}
	}
</style>
