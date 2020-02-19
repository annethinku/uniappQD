<template>
	<view>
		<uni-nav-bar left-icon="back" title="邀请的用户" right-icon="help" background-color="#15B2A3" color="#fff" :status-bar="true" 
		@clickLeft="returnTop" @clickRight="jumpHelp"></uni-nav-bar>
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
        <view class="bc-navs" id="the-id">
        	<scroll-view scroll-x="true" class="bc-scroll" :class="top<10&&top?'fixed':''">
        		<view class="nav_li" v-for="(item,index) in navList" :key="index" :class="index==curIndex?'active':''" @click="changeNav(index,item.id)">
        			{{item}}
        		</view>
        	</scroll-view>
        </view>
		<view class="green_box">
			<view class="green_lis">
				<view class="gli" v-for="(item,index) in 10" :key="index">
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
				<view class="gli">
					<view class="gli_left diffSJ">
						<image src="" mode=""></image>
					</view>
					<view class="gli_center">
						<view class="name">
							阿斯顿餐厅
						</view>
						<view class="time">
							2020-01-10
						</view>
						<view class="diff-status">
							<view class="com-btn orange">
								待完善
							</view>
							<view class="com-btn blue">
								审核中
							</view>
							<view class="com-btn red">
								审核未通过
							</view>
							<view class="com-btn blue2">
								已入驻
							</view>
							<view class="com-btn green">
								已完成
							</view>
						</view>
					</view>
					<view class="gli_right diffSJ" @click="showGenjin">
						<image src="../../static/images/yq_gengjin.png" mode=""></image>
					</view>
				</view>

			</view>
		</view>
		<!-- 跟进弹窗 -->
		<uni-popup ref="genjin" type="center">
			<view class="gj_box">
				<view class="close" @click="hideGenjin">
					<image src="../../static/images/pay-fail.png" mode=""></image>
				</view>
				<view class="gj_content">
					<view class="title">
						邀请跟进
					</view>
					<view class="gj_status">
						<view class="line"></view>
						邀请状态：待完善
					</view>
					<view class="gj_maskli">
						<view class="gjm_left">
							开始时间：
						</view>
						<view class="gjm_right">
							2020年1月14日  18:30
						</view>
					</view>
					<view class="gj_maskli">
						<view class="gjm_left">
							停滞时间：
						</view>
						<view class="gjm_right">
							2020年1月21日  18:30
						</view>
					</view>
					<view class="gj_maskli">
						<view class="gjm_left">
							停滞原因：
						</view>
						<view class="gjm_right">
							营业执照上传照片不规范、不清晰食品安全流通许可证上传照片不规范、不清晰
						</view>
					</view>
					<view class="gj_maskli">
						<view class="gjm_left">
							开始时间：
						</view>
						<view class="gjm_right">
							2020年1月14日  18:30
						</view>
					</view>
					<view class="gjm_warn">
						提醒：请文明用语与被邀请人交流
					</view>
					<view class="compay-btn" @click="callShangjia">
						联系商家
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				navList: ['待完善', '审核中', '审核未通过', '已入驻', '已完成'],
				top:null,
				curIndex:0,
				title: '邀请的用户'
			};
		},
		components: {
			uniNavBar,
			uniPopup
		},
		onLoad(options) {
			if (options.title) {
				uni.setNavigationBarTitle({
					title: options.title
				});
			}
		},
		onPageScroll(e){
			this.getDivtop();
		},
		methods: {
			returnTop() {
				uni.navigateBack({});
			},
			// 获取导航距离顶部的位置
			getDivtop(){
				const query = uni.createSelectorQuery().in(this);
				query.select('#the-id').boundingClientRect(data => {
				  // console.log("得到布局位置信息" + JSON.stringify(data));
				  // console.log("节点离页面顶部的距离为" + data.top);
				  this.top=data.top;
				}).exec();
			},
			showGenjin(){
				this.$refs.genjin.open();
			},
			hideGenjin(){
				this.$refs.genjin.close();
			},
			callShangjia(){
				uni.makePhoneCall({
				    phoneNumber: '18224033962' 
				});
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
				top:0;
				left: 0;
				z-index: 2;
			}
		}
	.green_box {
		background-color: #15B2A3;
		height: 300upx;
		border-bottom-left-radius: 40upx;
		border-bottom-right-radius: 40upx;
		padding: 50upx 20upx 0;

		.green_lis {
			background-color: #FFFFFF;
			border-radius: 20upx;

			.gli {
				padding: 33upx 0;
				border-bottom: 1upx #EEEEEE solid;
				margin: 0 35upx;
				display: flex;
				align-items: center;

				&:last-child {
					border-bottom: none;
				}

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
						color: #999999;
						margin-top: 23upx;
					}

					.diff-status {
						display: flex;
						flex-wrap: wrap;

						.com-btn {
							font-size: 22upx;
							color: #FFFFFF;
							margin: 16upx 10upx 0 0;
							display: inline-block;
							padding: 0 15upx;
							border-radius: 18upx;

							&.orange {
								background-color: #FF9D4E;
							}

							&.blue {
								background-color: #6D8DFD;
							}

							&.red {
								background-color: #F05D5D;
							}

							&.blue2 {
								background-color: #71CEC1;
							}

							&.green {
								background-color: #8CC23A;
							}
						}
					}
				}

				.gli_right {
					font-size: 28upx;
					color: #333333;
					font-weight: bold;
					margin-left: auto;

					&.diffSJ {
						image {
							width: 82upx;
							height: 82upx;
						}
					}
				}
			}
		}
	}
	.gj_box{
		width:674upx;
		background:rgba(255,255,255,1);
		box-shadow:0 1upx 24upx 0 rgba(136,136,136,0.2);
		border-radius:40upx;
		padding: 47upx 37upx 66upx;
		box-sizing: border-box;
		position: relative;
		.close{
			width: 100upx;
			height: 100upx;
			position: absolute;
			top: -120upx;
			right: 0;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.gj_content{
			.title{
				font-size: 36upx;
				color: #333333;
				font-weight: bold;
				margin:0 0 74upx 21upx;
			}
			.gj_status{
				font-size: 28upx;
				color: #333333;
				font-weight: bold;
				margin-bottom: 41upx;
				.line{
					width:6upx;
					height:36upx;
					background:rgba(255,157,78,1);
					border-radius:3upx;
					margin-right: 21upx;
					display: inline-block;
				}
			}
			.gj_maskli{
				display: flex;
				margin:0 0 33upx 21upx;
				font-size: 28upx;
				color: #333333;
				.gjm_left{
					
				}
				.gjm_right{
					width:400upx;
				}
			}
			.gjm_warn{
				font-size: 24upx;
				color: #999999;
				margin: 67upx 0 65upx 24upx;
			}
		}
	}
</style>
