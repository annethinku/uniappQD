<template>
	<view>
		<view class="vip-mx">
			<view class="mx-pro">
				<!-- <cmd-circle cid="circle38" type="dashboard" :percent="p" font-color="#607d8b" :font-size="18" :width="150" :stroke-width="24" stroke-shape="round" stroke-color="#009688" stroke-background="#8bc34a"></cmd-circle> -->
				<view class="outp-p">
					<view class="inprofont">
						<text>当月成长值{{years}}</text>
						<view class="bigfont">
							{{dou}}
						</view>
						<view class="black">
							{{chaFont}}
						</view>
					</view>
					<view class="op-dian l" :class="dou>0?'active':''"></view>
					<view class="op-dian c" :class="dou>=100?'active':''"></view>
					<view class="op-dian r" :class="dou>=800?'active':''"></view>
					<view class="op-font l">
						<view>
							银豆
						</view>
						<view>
							0
						</view>
					</view>
					<view class="op-font c">
						<view>
							100
						</view>
						<view>
							金豆
						</view>
					</view>
					<view class="op-font r">
						<view>
							奇豆
						</view>
						<view>
							800
						</view>
					</view>
					<view class="outpos">
						<view class="circle-bar">
							<view class="circle-bar-left" :style="csty2"></view>
							<view class="circle-bar-right" :style="csty"></view>
							<!--遮罩层，显示百分比-->
							<view class="mask">
								<!-- <span class="percent">{{pec}}%</span> -->
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="oa-two">
				<view class="title">
					成长值构成
				</view>
				<view class="content">
					<view class="con_box">
						<view class="conb_title">
							<text>银豆推荐</text>
							<image src="../../static/images/vip-douGrey01.png" mode="widthFix" class="pos01"></image>
						</view>
						<view class="conb_num">
							50
						</view>
						<view class="conb_des">
							还需推荐5名
						</view>
					</view>
					<view class="con_box">
						<view class="conb_title">
							<text>团队银豆</text>
							<image src="../../static/images/vip-douGrey02.png" mode="widthFix" class="pos02"></image>
						</view>
						<view class="conb_num">
							0
						</view>
						<view class="conb_des">
							还需推荐200名
						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="mx-qy">
			<view class="title">
				- 详细权益 -
			</view>
			<view class="content">
				<view class="con_tr bg">
					<view class="con_td">
						特权对比
					</view>
					<view class="con_td">
						普用用户
					</view>
					<view class="con_td">
						银豆vip
					</view>
					<view class="con_td">
						金豆vip
					</view>
					<view class="con_td">
						奇豆vip
					</view>
				</view>
				<view class="con_tr">
					<view class="con_td">
						自购省
					</view>
					<view class="con_td">
						100%
					</view>
					<view class="con_td">
						100%+33%
					</view>
					<view class="con_td">
						100%+53%
					</view>
					<view class="con_td">
						100%+80%
					</view>
				</view>
				<view class="con_tr">
					<view class="con_td">
						佣金提成
					</view>
					<view class="con_td">
						14%
					</view>
					<view class="con_td">
						18%-38%
					</view>
					<view class="con_td">
						38%-58%
					</view>
					<view class="con_td">
						58%-78%
					</view>
				</view>
				<view class="con_tr">
					<view class="con_td">
						评价置顶
					</view>
					<view class="con_td">
						<text class="error">×</text>
					</view>
					<view class="con_td">
						<text class="true">√</text>
					</view>
					<view class="con_td">
						<text class="true">√</text>
					</view>
					<view class="con_td">
						<text class="true">√</text>
					</view>
				</view>
				<view class="con_tr">
					<view class="con_td">
						专属活动
					</view>
					<view class="con_td">
						<text class="error">×</text>
					</view>
					<view class="con_td">
						<text class="true">√</text>
					</view>
					<view class="con_td">
						<text class="true">√</text>
					</view>
					<view class="con_td">
						<text class="true">√</text>
					</view>
				</view>
				<view class="con_tr">
					<view class="con_td">
						专属徽章
					</view>
					<view class="con_td">
						<text class="error">×</text>
					</view>
					<view class="con_td">
						<text class="true">√</text>
					</view>
					<view class="con_td">
						<text class="true">√</text>
					</view>
					<view class="con_td">
						<text class="true">√</text>
					</view>
				</view>
				<view class="con_tr">
					<view class="con_td">
						专属客服
					</view>
					<view class="con_td">
						<text class="error">×</text>
					</view>
					<view class="con_td">
						<text class="true">√</text>
					</view>
					<view class="con_td">
						<text class="true">√</text>
					</view>
					<view class="con_td">
						<text class="true">√</text>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import cmdCircle from "@/components/cmd-circle/cmd-circle.vue"
	export default {
		data() {
			return {
				p: 10,
				csty: '',
				csty2: '',
				pec: 0,
				dou: 100
			};
		},
		computed: {
			chaFont() {
				let dou = this.dou;
				if (dou < 100) {
					return '本月差' + (100 - dou) + '成长值晋级金豆';
				} else {
					return '本月差' + (800 - dou) + '成长值晋级奇豆';
				}
			},
			years() {
				let date = new Date();
				return date.getFullYear() + '.' + parseInt(date.getMonth() + 1);
			}
		},
		components: {
			cmdCircle
		},
		mounted() {
			let dou = this.dou;
			// 根据豆子不同计算不同比例 进度展示 (this.dou/800)*100/2半圆正常比例
			if (dou <= 100) {
				this.pec = ((this.dou + 300) / 800) * 100 / 2;
			} else {
				if (this.dou <= 300) {
					this.pec = (((this.dou + 300) / 800) * 100 / 2) *(this.dou>200?0.85:0.95);
				} else {
					this.pec = (((this.dou + 300) / 800) * 100 / 2) * (700 / 800) * 0.85;
				}
			}
			let percent = this.pec;
			let baseColor = '#D6BC8C';
			if (percent <= 50) {
				this.csty = ({
					'transform': 'rotate(' + (percent * 3.6) + 'deg)'
				});
			} else {
				this.csty = ({
					'transform': 'rotate(0deg)',
					'background-color': baseColor
				});
				this.csty2 = ({
					'transform': 'rotate(' + ((percent - 50) * 3.6) + 'deg)'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vip-mx {
		width: 100%;
		height: 580upx;
		background-color: #454653;
		position: relative;
		padding-top: 100upx;

		.oa-two {
			padding: 23upx 0 52upx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 1upx 20upx 0px rgba(81, 81, 81, 0.2);
			border-radius: 20upx;
			position: absolute;
			left: 34upx;
			right: 36upx;
			bottom: -158upx;

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

						image.pos01 {
							width: 33upx;
							height: 38upx;
							position: absolute;
							left: -45upx;
							top: 0;
							// margin-top: -19upx;
						}

						image.pos02 {
							width: 47upx;
							height: 43upx;
							position: absolute;
							left: -56upx;
							top: 0;
							// margin-top: -21upx;
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
	}

	.mx-qy {
		margin: 229upx 0 40upx;

		.title {
			text-align: center;
			font-size: 26upx;
			color: #666666;
		}

		.content {
			margin: 40upx 34upx 0;

			.con_tr {
				display: flex;
				font-size: 22upx;
				color: #343434;

				.con_td {
					border-left: 1upx #E5E5E5 solid;
					border-top: 1upx #E5E5E5 solid;
					padding: 18upx 0;
					flex: 1;
					text-align: center;

					&:nth-child(5n) {
						border-right: 1upx #E5E5E5 solid;
					}

					.error {
						color: #AAAAAA;
						font-weight: bold;
					}

					.true {
						color: #45C6D4;
						font-weight: bold;
					}
				}

				&.bg {
					background-color: #F5F4F7;
					font-size: 24upx;
					color: #666666;
				}

				&:last-child {
					border-bottom: 1upx #E5E5E5 solid;
				}

			}
		}
	}

	/*支持IE9及以上*/
	.circle-bar {
		font-size: 200px;
		width: 623upx;
		height: 623upx;
		position: relative;
		background-color: #D6BC8C;
		transform: rotate(-90deg);
	}

	.circle-bar-left,
	.circle-bar-right {
		width: 623upx;
		height: 623upx;
	}

	/*
	        这里采用clip剪切了圆，实现左右两个半圆，右半圆在后面，因此在更上一层，
	        clip的用法参考：http://www.w3school.com.cn/cssref/pr_pos_clip.asp
	     */
	.circle-bar-right {
		clip: rect(0, auto, auto, 312upx);
		background-color: #808186;
	}

	.circle-bar-left {
		clip: rect(0, 312upx, auto, 0);
		background-color: #808186;
	}

	.mask {
		width: 600upx;
		height: 600upx;
		background-color: #454653;
		text-align: center;
		color: rgba(0, 0, 0, 0.5);
	}

	.mask :first-child {
		font-size: 186upx;
		height: 600upx;
		line-height: 600upx;
		display: block;
	}

	/*所有的后代都水平垂直居中，这样就是同心圆了*/
	.circle-bar * {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}

	/*自身以及子元素都是圆*/
	.circle-bar,
	.circle-bar>* {
		border-radius: 50%;
	}

	.outp-p {
		width: 623upx;
		height: 312upx;
		position: relative;
		margin: 0 auto;
	}

	.outpos {
		width: 623upx;
		height: 312upx;
		overflow: hidden;
	}

	.op-dian {
		width: 26upx;
		height: 26upx;
		border-radius: 50%;
		background-color: #808186;
		position: absolute;
		z-index: 111;
		box-shadow: 0 1upx 10upx 0 rgba(81, 81, 81, 0.3);

		&.active {
			background-color: #D6BC8C;
		}

		&.l {
			left: -7upx;
			bottom: -2upx;
		}

		&.c {
			left: 50%;
			top: -10upx;
			margin-left: -10upx;
		}

		&.r {
			right: -7upx;
			bottom: -4upx;
		}
	}

	.op-font {
		font-size: 20upx;
		color: #D8B988;
		position: absolute;
		z-index: 111;
		text-align: center;

		&.l {
			left: -20upx;
			bottom: -80upx;
		}

		&.c {
			width: 100%;
			left: 0;
			top: -80upx;
		}

		&.r {
			right: -20upx;
			bottom: -80upx;
		}
	}

	.inprofont {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
		text-align: center;
		color: #FFFFFF;

		text {
			font-size: 22upx;
			padding-top: 117upx;
			display: block;
		}

		.bigfont {
			font-size: 54upx;
			font-weight: bold;
			margin: 37upx 0 20upx;
		}

		.black {
			font-size: 20upx;
			background-color: #333546;
			padding: 10upx 40upx;
			border-radius: 20upx;
			display: inline-block;
		}
	}
</style>
