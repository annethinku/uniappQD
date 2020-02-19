<template>
	<view>
		<view class="orange">
			<view class="ts_font">
				{{isPay?(isUse?(isTuikuan?(istk?'订单已退款':'订单退款中'):'订单已完成'):'订单待使用'):'订单剩余付款时间：3:52:45'}}
			</view>
			<view class="orange_gan"></view>
			<view class="big_white">
				<view class="bgw_one">
					<view class="bgwo_top">
						<view class="bgtopleft">
							<image src="" mode=""></image>
						</view>
						<view class="bgtopcenter">
							<view class="title">
								阿斯顿餐厅代金卷
							</view>
							<view class="desc">
								周一至周日
							</view>
							<view class="desc">
								过期自动退 | 随时退 | 到店吃
							</view>
						</view>
						<view class="bgtopright">
							￥79
							<image src="../../static/images/detail_rightJ.png" mode=""></image>
						</view>
					</view>
					<!-- 订单未付款显示 -->
					<view class="bgwo-bot" v-show="!isPay">
						<view class="bgwobli">
							<view class="lilabel">
								有效期：
							</view>
							<view class="lifont">
								2020-2-4 至 2020-2-23（周末、法定节假日通用）
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								使用时间：
							</view>
							<view class="lifont">
								11:00 至 22:00
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								使用范围：
							</view>
							<view class="lifont">
								仅适用于菜品
							</view>
						</view>
					</view>
				</view>
				<!-- 订单付款显示 -->
				<view class="bgw_two" v-show="isPay">
					<view class="bgwt-li">
						<view class="name">
							代金券
							<!-- 套餐卷 -->
							<view class="desc" v-show="!isUse">
								8张可以用 2020-2-23 22:00到期
							</view>
						</view>
						<view class="phone" v-show="!isUse">
							<text>我要退款</text>
						</view>
					</view>
					<view class="juanma">
						<view class="jum_left" :style="'height: '+(isZk?'':'80upx')+';'">
							<view class="jum_li" v-for="(item,index) in 6" :key="index" :class="isUse?(isTuikuan?'haveTuik':'haveUse'):''">
								8889 6542 5432
							</view>
						</view>
						<view class="jum_right" v-show="!isUse">
							<image src="" mode=""></image>
						</view>
					</view>
					<view class="tuik_show" v-show="isTuikuan">
						{{istk?'已退款':'退款中'}}
					</view>
					<view class="seeAll" @click="toggleAll()">
						<view v-show="!isZk">
							查看全部
							<image src="../../static/images/index-up@2x.png" mode=""></image>
						</view>
						<view v-show="isZk">
							收起
							<image src="../../static/images/index-down@2x.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="bgw_two">
					<view class="bgwt-li">
						<view class="name">
							商家信息
						</view>
						<view class="phone">
							<image src="../../static/images/order_phone.png" mode=""></image>
							<text>联系商家</text>
						</view>
					</view>
					<view class="bgwt-li">
						<view class="name">
							阿斯顿餐厅（新都店）
						</view>
					</view>
				</view>
				<!-- 套餐480upx -->
				<view class="bgw_two"  :style="'height: '+(isZk03?'':'380upx')+';overflow:hidden;'">
					<view class="bgwt-li">
						<view class="name">
					       代金券信息
						   <!-- 套餐详细 -->
						</view>
					</view>
					<view class="bgwt-li">
						<view class="name">
							阿斯顿餐厅代金卷（8张）
							<!-- 阿斯顿 2-3人餐（1份） -->
						</view>
						<view class="common_font">
							￥79
						</view>
					</view>
					<view class="bgwo-bot">
						<view class="bgwobli">
							<view class="lilabel" style="text-align: left;text-align-last: left;">
								备注
							</view>
						</view>
						<view class="bgwo-bot">
							<!-- 套餐显示 -->
							<!-- <view class="bgwt-li" v-for="(item,index) in 6" :key="index">
								<view class="name">
								 沙拉   （一份）
								</view>
								<view class="common_font">
									￥79
								</view>
							</view> -->
							<view class="bgwobli" v-for="(item,index) in 6" :key="index">
								<view class="lifont">
									店内人均消费参考价：￥60
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="seeAll diffpad" @click="toggleAll03()">
						<view v-show="!isZk03">
							查看全部
							<image src="../../static/images/index-up@2x.png" mode=""></image>
						</view>
						<view v-show="isZk03">
							收起
							<image src="../../static/images/index-down@2x.png" mode=""></image>
						</view>
					</view>
				<view class="bgw_two">
					<view class="bgwt-li">
						<view class="name">
							订单信息
						</view>
					</view>
					<view class="bgwo-bot">
						<view class="bgwobli">
							<view class="lilabel">
								订单编号：
							</view>
							<view class="lifont">
								HG 8156542
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								下单手机：
							</view>
							<view class="lifont">
								155 **** 9665
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								下单时间：
							</view>
							<view class="lifont">
								2020-1-9 21:55
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								商品数量：
							</view>
							<view class="lifont">
								1
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								总价：
							</view>
							<view class="lifont">
								￥88.00
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								实      付：
							</view>
							<view class="lifont">
								￥88.00
							</view>
						</view>
					</view>

				</view>
				<!-- 温馨提示 -->
				<view class="bgw_two"  :style="'height: '+(isZk02?'':'250upx')+';overflow:hidden;'">
					<view class="bgwt-li">
						<view class="name">
							温馨提示
						</view>
					</view>
					<view class="bgwo-bot">
						<view class="bgwobli">
							<view class="lilabel">
                                有效期：
							</view>
							<view class="lifont">
								2020-2-4 至 2020-2-23（周末、法定节假日通用）               
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								使用时间：
							</view>
							<view class="lifont">
								11:00 至 22:00
							</view>
						</view>
						<view class="bgwobli">
							<view class="lilabel">
								使用范围：
							</view>
							<view class="lifont">
								 仅适用于菜品
							</view>
						</view>
						<view class="bgwobli" style="padding-bottom: 50upx;">
							<view class="lilabel">
								使用规则：
							</view>
							<view class="lifont">
							   无需预约，消费高峰期可能需要排
							   无需预约，消费高峰期可能需要排
							   无需预约，消费高峰期可能需要排
							   无需预约，消费高峰期可能需要排
							   无需预约，消费高峰期可能需要排
							   无需预约，消费高峰期可能需要排
							   无需预约，消费高峰期可能需要排
							   无需预约，消费高峰期可能需要排
							   无需预约，消费高峰期可能需要排
							</view>
						</view>
				  </view>
				</view>
				<view class="seeAll diffpad" @click="toggleAll02()">
						<view v-show="!isZk02">
							查看全部
							<image src="../../static/images/index-up@2x.png" mode=""></image>
						</view>
						<view v-show="isZk02">
							收起
							<image src="../../static/images/index-down@2x.png" mode=""></image>
						</view>
					</view>
			<!--<view class="bgw_two" v-show="!isPay">
					<view class="bgwt-li">
						<view class="name">
							商品金额
						</view>
						<view class="fonts">
							￥79.00
						</view>
					</view>
					<view class="bgwt-li">
						<view class="name">
							金额优惠
						</view>
						<view class="fonts">
							￥0.00
						</view>
					</view>
					<view class="totalPrice">
						总价：￥79.00
					</view>
				</view> -->
			</view>
			<view style="height: 200upx;"></view>
		</view>
		<view class="pay-btn" v-show="!isPay">
			<navigator url="../pay1/pay1" hover-class="none">
				<view class="self-btn">
					去支付
				</view>
			</navigator>
		</view>
		<view class="pay-btn" v-show="isPay">
			<view class="fukuan-btn">
				<view class="fk-common orange" @click="showEwm" v-show="!isUse">
					扫码使用
				</view>
				<view class="fk-common">
					再来一单
				</view>
			</view>
		</view>
		<!-- 二维码弹窗 -->
		<uni-popup ref="useful" type="center">
			<view class="ewm-white">
				<view class="use-top">
					<view class="title">
						向商家扫码即可消费
					</view>
					<image src="../../static/images/art-close.png" mode="" class="close" @click="hideUse"></image>
				</view>
				<view class="use-bot">
					<image src="" mode=""></image>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				isPay: true,
				isUse:true,
				isTuikuan:true,
				istk:true,
				isZk: false,
				isZk02:false,
				isZk03:false
			};
		},
		components:{
			uniPopup
		},
		methods: {
			toggleAll() {
				if (this.isZk) {
					this.isZk = false;
				} else {
					this.isZk = true;
				}
			},
			toggleAll02() {
				if (this.isZk02) {
					this.isZk02 = false;
				} else {
					this.isZk02 = true;
				}
			},
			toggleAll03() {
				if (this.isZk03) {
					this.isZk03 = false;
				} else {
					this.isZk03 = true;
				}
			},
			showEwm(){
				this.$refs.useful.open();
			},
			hideUse(){
				this.$refs.useful.close();
			}
		}
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

		.ts_font {
			font-size: 28upx;
			color: #FFFFFF;
			margin-left: 30upx;
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
            box-shadow:0 1upx 10upx 0 rgba(136,136,136,0.1);
			position: relative;
			.bgw_one {
				padding: 29upx 20upx 35upx 46upx;

				.bgwo_top {
					display: flex;
					align-items: center;

					.bgtopleft {
						width: 130upx;
						height: 130upx;
						border-radius: 4upx;
						flex-shrink: 0;
						overflow: hidden;
						background-color: #EEEEEE;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.bgtopcenter {
						margin-left: 33upx;

						.title {
							font-size: 26upx;
							color: #333333;
							margin-bottom: 34upx;
						}

						.desc {
							font-size: 24upx;
							color: #A4A4A4;
							margin-bottom: 19upx;
						}
					}

					.bgtopright {
						font-size: 28upx;
						color: #333333;
						font-weight: bold;
						margin-left: auto;

						image {
							width: 10upx;
							height: 18upx;
							margin-left: 22upx;
							vertical-align: middle;
						}
					}
				}


			}

			.bgwo-bot {
				margin-top: 44upx;

				.bgwobli {
					display: flex;
					margin-bottom: 20upx;
					font-size: 24upx;

					.lilabel {
						width: 120upx;
						text-align: justify;
						text-align-last: justify;
						color: #A4A4A4;
					}

					.lifont {
						width: 75%;
						color: #333333;
						margin-left: 10upx;
					}
				}
			}

			.bgw_two {
				margin: 35upx 12upx 0;
				border-top: 1upx #C4C4C4 dashed;
				transition: all 1s ease-in;
				padding: 38upx 33upx 0;
                
				.bgwt-li {
					display: flex;
					justify-content: space-between;
					margin-bottom: 30upx;

					.name {
						font-size: 28upx;
						color: #333333;

						// font-weight: bold;
						.desc {
							font-size: 24upx;
							color: #A4A4A4;
							font-weight: normal;
							margin-top: 20upx;
						}
					}

					.phone {
						width: 160upx;
						height: 50upx;
						line-height: 50upx;
						text-align: center;
						border: 1upx solid rgba(196, 196, 196, 1);
						border-radius: 25upx;
						font-size: 24upx;
						color: #333333;

						image {
							width: 18upx;
							height: 23upx;
							margin-right: 13upx;
							vertical-align: middle;
						}
					}

					.fonts {
						font-size: 22upx;
						color: #333333;
					}
				}

				.totalPrice {
					font-size: 30upx;
					color: #646364;
					font-weight: bold;
					padding: 43upx 0 60upx;
					text-align: right;
				}
			}

			.juanma {
				display: flex;
				margin-top: 40upx;

				.jum_left {
					overflow: hidden;
					font-size: 30upx;
					color: #333333;
					line-height: 27upx;

					.jum_li {
						margin-bottom: 17upx;
						&.haveUse{
							color: #999999;
							text-decoration: line-through;
						}
						&.haveTuik{
							color: #999999;
						}
					}
				}

				.jum_right {
					width: 80upx;
					height: 80upx;
					background-color: #EEEEEE;
					margin-left: auto;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.seeAll {
				text-align: center;
				font-size: 28upx;
				color: #333333;
				margin-top: 45upx;

				image {
					width: 20upx;
					height: 12upx;
					margin-left: 15upx;
					position: relative;
					top: -4upx;
				}
				&.diffpad{
					padding: 20upx 0;
				}
			}
		}
	}

	.pay-btn {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #FFFFFF;
		padding: 23upx 36upx;
		box-sizing: border-box;

		.self-btn {
			width: 100%;
			height: 84upx;
			background: linear-gradient(90deg, rgba(252, 136, 64, 1), rgba(255, 103, 51, 1));
			border-radius: 42upx;
			line-height: 84upx;
			font-weight: bold;
			color: #FFFFFF;
			text-align: center;
		}
		.fukuan-btn{
			display: flex;
			flex-direction: row-reverse;
			.fk-common{
				width:208upx;
				height:80upx;
				line-height: 80upx;
				background:rgba(238,238,238,1);
				border-radius:12upx;
				color: #333;
				font-size: 32upx;
				text-align: center;
				&.orange{
					margin-left: 42upx;
					color: #FFFFFF;
					font-size: 32upx;
					background:linear-gradient(90deg,rgba(252,136,64,1),rgba(255,103,51,1));				
				}
			}
		}
	}
	.ewm-white{
		width:674upx;
		height:658upx;
		background:rgba(255,255,255,1);
		box-shadow:0 1ipx 24upx 0 rgba(136,136,136,0.2);
		border-radius:40upx;
		.use-top{
			position: relative;
			border-bottom: 1upx #C4C4C4 dashed;
			color: #333333;
			font-size: 30upx;
			text-align: center;
			padding: 42upx 0;
			image{
				width: 40upx;
				height: 40upx;
				position: absolute;
				right: 42upx;
				top: 42upx;
			}
		}
		.use-bot{
			width: 394upx;
			height: 394upx;
			margin: 66upx auto 0;
			background-color: #eee;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.tuik_show{
		font-size: 28upx;
		color: #E55959;
		text-align: right;
	}
</style>
