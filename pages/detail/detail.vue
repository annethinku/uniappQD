<template>
	<view  @touchstart="start" @touchend="end">
		<uni-nav-bar style="position: relative;z-index: 999;" :status-bar="true">
			<view></view>
			<view slot="left">
				<view class="dpt1_left" @click="returnPage"></view>
			</view>
			<view slot="right">
				<view class="dpt1_right">
					<view class="collect active"></view>
					<!-- <view class="share" @click="showSh"></view> -->
					<view class="more" @click="showMore">
						<view class="dian"></view>
					</view>
				</view>
			</view>
		</uni-nav-bar>
		<view class="swiperBoxs">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
			 indicator-color="#fff" indicator-active-color="#FD7E3C">
				<swiper-item>
					<image src="http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg" mode=""></image>
				</swiper-item>
			</swiper>
			<view class="title">
				阿斯顿餐厅（新都店）
			</view>
			<view class="clr_pos">
				<view class="starCompo">
					<my-star score="4.5"></my-star>
				</view>
				<view class="pricePer">
					（99条评价）
				</view>
				<view class="pricePer">
					￥1250/人
				</view>
			</view>
			<view class="tags">
				<view class="tagbox">
					可停车
				</view>
				<view class="tagbox">
					有WIFI
				</view>
				<view class="tagbox">
					有包厢
				</view>
			</view>
			<view class="isYingye">
				<view class="yy_left">
					营业中：
					<text>
						周一至周日（每天09:00 - 22:00）
					</text>
				</view>
				<view class="yy_right">
					更多信息 >
				</view>
			</view>
		</view>
		<view class="dp_address">
			<view class="address_left">
				<view class="title">
					阿斯顿餐厅（新都店）
				</view>
				<view class="desc">
					新都区七一国际广场5楼22号
					新都区七一国际广场5楼22号
					(距离您355米)
				</view>
			</view>
			<view class="address_right">
				<view class="addr_box">
					<image src="../../static/images/detail_phone.png" mode=""></image>
					<view class="name">
						联系商家
					</view>
				</view>
				<view class="addr_box">
					<image src="../../static/images/detail_address.png" mode=""></image>
					<view class="name">
						导航
					</view>
				</view>
			</view>
		</view>
		<view class="youh_navs">
			<view class="navs" :class="nfixed?'fixed':''" id="the-id">
				<view class="n_box" :class="choose1?'active':''" @click="scrollP(oneCtop1)">
					优惠
				</view>
				<view class="n_box" :class="choose2?'active':''" @click="scrollP(oneCtop2)">
					菜品
				</view>
				<view class="n_box" :class="choose3?'active':''" @click="scrollP(oneCtop3)">
					点评
				</view>
			</view>
			<!-- 优惠 -->
			<view class="nav_change" id="youhui">
				<view class="yh_content">
					<view class="yhc_quan">
						<view class="quan_left">
							<image src="../../static/images/il_quan.png" mode=""></image>
						</view>
						<view class="quan_center">
							<view class="name">
								100代金卷
							</view>
							<view class="desc">
								周一至周日（每天09:00 - 22:00）
							</view>
							<view class="price">
								￥79.00
							</view>
						</view>
						<view class="quan_right">
							<navigator url="../qgDetail/qgDetail?isTaocan=false" hover-class="none">
							<view class="btn">
								抢购
							</view>
							</navigator>
							<view class="yueshou">
								月售255
							</view>
						</view>
					</view>
					<view class="yhc_taocan">
						<view class="bigtitle">
							<image src="../../static/images/il_tuan.png" mode=""></image>
							<text>超值套餐</text>
						</view>
						<view class="taoc_content" v-for="(item,index) in 2" :key="index">
							<view class="quan_left">
								<image src="" mode=""></image>
							</view>
							<view class="quan_center">
								<view class="name">
									双人超值套餐
								</view>
								<view class="desc">
									周一至周日（每天09:00 - 22:00）
								</view>
								<view class="price">
									￥79.00
									<text class="oldPrice">￥100</text>
									<text class="zhekou">9.8折</text>
								</view>
							</view>
							<view class="quan_right">
								<navigator url="../qgDetail/qgDetail?isTaocan=true" hover-class="none">
									<view class="btn">
										抢购
									</view>
								</navigator>
								<view class="yueshou">
									月售255
								</view>
							</view>

						</view>
						<view class="seemore">
							<text>查看全部套餐</text>
							<image src="../../static/images/index-up@2x.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<!-- 推荐菜品 -->
			<view class="tuij_cai" id="caipin">
				<view class="common_title">
					<view class="title_left">
						推荐菜品
					</view>
					<view class="title_right">
						<image src="../../static/images/detail_rightJ.png" mode=""></image>
					</view>
				</view>
				<view class="cai_content">
					<view class="caic_top">
						<image src="http://inews.gtimg.com/newsapp_ls/0/11148715054_294195/0.jpg" mode=""></image>
						<view class="caict_mask">
							<view class="name">
								鹅野母鸡的实惠大拼盘
							</view>
							<view class="price">
								￥189
							</view>
						</view>
					</view>
					<view class="caic_bot">
						<view class="cbbox" v-for="(item,index) in 3" :key="index">
							<view class="cbbox_top">
								<image src="http://inews.gtimg.com/newsapp_ls/0/11148715054_294195/0.jpg" mode=""></image>
							</view>
							<view class="name">
								手工揉面
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 商家动态 -->
			<view class="tuij_cai">
				<view class="common_title">
					<view class="title_left">
						商家动态（23）
					</view>
					<view class="title_right">
						<image src="../../static/images/detail_rightJ.png" mode=""></image>
					</view>
				</view>
				<view class="shangjia_dt">
					<view class="sjd_top">
						<view class="sjdt_left">
							<image src="" mode=""></image>
						</view>
						<view class="sjdt_right">
							<view class="name">
								阿斯顿餐厅
							</view>
							<view class="date">
								01月20日
							</view>
						</view>
					</view>
					<view class="sjd_center">
						这里这里是文案这里是文案这里是文案是这里是文案
						这里是文案这里是文案。
					</view>
					<mythumb myWidth="200"></mythumb>
				</view>
			</view>
			<!-- 精选点评 -->
			<view class="tuij_cai" style="padding-bottom: 1upx;" id="dianping">
				<view class="common_title">
					<view class="title_left">
						精选点评（99）
					</view>
					<view class="title_right">
						<image src="../../static/images/detail_rightJ.png" mode=""></image>
					</view>
				</view>
				<view class="hotc-cont">
					<view class="cont_li" v-for="(item,index) in 2" :key="index">
						<view class="li_left">
							<image :src="item.avatar?item.avatar:'../../static/images/default.png'" mode=""></image>
						</view>
						<view class="li_right">
							<view class="lir_top">
								<view class="t1name">
									长发大帅哥
								</view>
								<view class="t1img"></view>
								<view class="t1zan">
									<text>2020-1-20</text>
								</view>
							</view>
							<my-star score="4.5"></my-star>
							<view class="lir_con">
								说点什么吧说点什么吧说点什么吧说点什
								说点什么吧说点什么吧说点什么吧说点什
								说点什么吧
							</view>
							<mythumb myWidth="172"></mythumb>
						</view>

					</view>
				</view>

			</view>
		</view>
		<!-- 其他商家-->
		<view class="other_sj">
			<view class="title">
				其他商家
			</view>
			<view class="list_contents">
				<navigator url="../detail/detail" v-for="(item,index) in 2" :key="index">
					<view class="cont_li">
						<view class="cl_left">
							<view class="thumb">
								<image src="" mode=""></image>
							</view>
							<!-- <view class="pinpai"></view> -->
							<!-- <view class="xiuxi">
		  					休息中
		  				</view> -->
						</view>
						<view class="cl_right">
							<view class="clr_title elisOne">
								大小先生小碗菜
							</view>
							<view class="clr_pos">
								<view class="starCompo">
									<my-star score="4.88"></my-star>
								</view>
								<view class="pricePer">
									￥32/人
								</view>
								<view class="pos">
									3.2km
								</view>
							</view>
							<view class="clr_name">
								<view class="name_l">
									新都区 七一国际广场
								</view>
								<!-- <view class="name_xl">
		  						月销量1005
		  					</view> -->
							</view>
							<!-- <view class="clr_paihang">
		  					<text class="bor">您收藏的餐厅</text>
		  					<text>新都区中餐销量排行NO.1</text>
		  				</view> -->
							<view class="clr_quan">
								<image src="../../static/images/il_quan.png" mode=""></image>
								<text class="elisOne">100代金卷79元</text>
							</view>
							<!-- <view class="clr_quan">
		  					<image src="../../static/images/il_tuan.png" mode=""></image>
		  					<text class="elisOne">双人超值套餐79元，四人超值套餐158元</text>
		  				</view> -->
						</view>
					</view>
				</navigator>
			</view>
		</view>
		<!-- 商家详情 更多 弹窗 -->
		<uni-popup ref="mores" type="top">
			<view class="toushuC">
				<view class="tc-li">
					<navigator url="../jubao/jubao" hover-class="none">
						<image src="../../static/images/detail_ricon01@2x.png" mode="aspectFit"></image> 商户报错
					</navigator>
				</view>
				<view class="tc-li">
					<navigator url="../jubao/jubao" hover-class="none">
						<image src="../../static/images/detail_ricon02@2x.png" mode="aspectFit"></image> 投诉
					</navigator>
				</view>
				<view class="tc-li">
					<navigator url="../jubao/jubao" hover-class="none">
						<image src="../../static/images/detail_ricon03@2x.png" mode="aspectFit"></image> 商家入驻
					</navigator>
				</view>
				<view class="tc-li">
					<navigator url="../messages/messages" hover-class="none">
						<image src="../../static/images/detail_ricon04@2x.png" mode="aspectFit"></image> 消息
					</navigator>
					<view class="dian"></view>
				</view>
				<view class="tc-li">
					<navigator url="../index/index" hover-class="none" open-type="reLaunch">
						<image src="../../static/images/detail_ricon05@2x.png" mode="aspectFit"></image> 返回首页
					</navigator>
				</view>
			</view>
		</uni-popup>
		<!-- 分享组件 -->
		<share ref="myShare"></share>
	</view>
</template>

<script>
	import stars from '../../components/stars/stars.vue'
	import mythumb from '../../components/thumb-three/thumb-three.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import share from '@/components/share/share.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 1000,
				scrTop: 0,
				divTop: 0,
				iddivTop1: 0,
				iddivTop2: 0,
				iddivTop3: 0,
				oneCtop1: 0,
				oneCtop2: 0,
				oneCtop3: 0,
				startData:{clientX:0,clientY:0}
			};
		},
		components: {
			'my-star': stars,
			mythumb,
			uniPopup,
			share,
			uniNavBar
		},
		computed: {
			nfixed() {
				if (this.divTop <= 10 && this.scrTop > 500) {
					return true;
				} else {
					return false;
				}
			},
			choose1() {
				if (this.iddivTop2 > 100) {
					return true;
				} else {
					return false;
				}
			},
			choose2() {
				if (this.iddivTop2 <= 100 && this.iddivTop3 > 100) {
					return true;
				} else {
					return false;
				}
			},
			choose3() {
				if (this.iddivTop3 <= 100) {
					return true;
				} else {
					return false;
				}
			}
		},
		mounted() {
			this.getDivtop();
			this.getDivtopID1();
			this.getDivtopID2();
			this.getDivtopID3();
		},
		onPageScroll(res) {
			this.scrTop = res.scrollTop;
			this.getDivtop();
			this.getDivtopID1();
			this.getDivtopID2();
			this.getDivtopID3();
		},
		methods: {
			start(e){
			    this.startData.clientX=e.changedTouches[0].clientX;
			    this.startData.clientY=e.changedTouches[0].clientY;
			},
			end(e){
			    // console.log(e)
			    const subX=e.changedTouches[0].clientX-this.startData.clientX;
			    const subY=e.changedTouches[0].clientY - this.startData.clientY;
			    if(subY>50 || subY<-50){
			        console.log('上下滑')
			    }else{
			        if(subX>100){
			            console.log('右滑')
						uni.navigateBack({});
			        }else if(subX<-100){
			            console.log('左滑')
			        }else{
			            console.log('无效')
			        }
			    }
			},
			returnPage() {
				uni.navigateBack({})
			},
			showMore() {
				this.$refs.mores.open();
			},
			showSh() {
				// 调用分享子组件的方法
				this.$refs.myShare.showShare();
			},
			// 获取导航距离顶部的位置
			getDivtop() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#the-id').boundingClientRect(data => {
					// console.log("得到布局位置信息" + JSON.stringify(data));
					// console.log("节点离页面顶部的距离为" + data.top);
					this.divTop = data.top;
				}).exec();
			},
			// 获取元素距离顶部的位置
			getDivtopID1() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#youhui').boundingClientRect(data => {
					// console.log("得到布局位置信息" + JSON.stringify(data));
					// console.log("节点离页面顶部的距离为" + data.top);
					if (this.iddivTop1 == 0) {
						this.oneCtop1 = data.top
					}
					this.iddivTop1 = data.top;

				}).exec();
			},
			// 获取元素距离顶部的位置
			getDivtopID2() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#caipin').boundingClientRect(data => {
					// console.log("得到布局位置信息" + JSON.stringify(data));
					// console.log("节点离页面顶部的距离为" + data.top);
					if (this.iddivTop2 == 0) {
						this.oneCtop2 = data.top
					}
					this.iddivTop2 = data.top;

				}).exec();
			},
			// 获取元素距离顶部的位置
			getDivtopID3() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#dianping').boundingClientRect(data => {
					// console.log("得到布局位置信息" + JSON.stringify(data));
					// console.log("节点离页面顶部的距离为" + data.top);
					if (this.iddivTop3 == 0) {
						this.oneCtop3 = data.top
					}
					this.iddivTop3 = data.top;
				}).exec();
			},
			scrollP(top) {
				uni.pageScrollTo({
					scrollTop: (top - 100)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F9F7;
	}

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



	.dpt1_left {
		width: 19upx;
		height: 35upx;
		@include bg-image('../../static/images/bbs_jian');
		margin-left: 25upx;
	}

	.dpt1_right {
		display: flex;
		align-items: center;
        margin-right: 36upx;
		.collect {
			width: 46upx;
			height: 44upx;
			@include bg-image('../../static/images/detail_collect');
			margin-right: 33upx;

			&.active {
				@include bg-image('../../static/images/detail_collectOn');
			}
		}

		.share {
			width: 42upx;
			height: 42upx;
			@include bg-image('../../static/images/detail_share');
			margin-right: 33upx;
		}

		.more {
			width: 39upx;
			height: 8upx;
			@include bg-image('../../static/images/detail_more');
			position: relative;

			.dian {
				width: 16upx;
				height: 16upx;
				background: rgba(255, 0, 21, 1);
				border-radius: 50%;
				position: absolute;
				right: -16upx;
				top: -20upx;
			}
		}
	}
	

	.swiperBoxs {
		background: rgba(255, 255, 255, 1);
		box-shadow: 0 1upx 20upx 0 rgba(187, 187, 187, 0.2);
		border-radius: 20upx;
		margin: 0 23upx;
		padding: 15upx 20upx 32upx;

		.swiper {
			width: auto;
			height: 345upx;
			border-radius: 20upx;
			overflow: hidden;
			background-color: #EEEEEE;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.title {
			font-size: 42upx;
			color: #333333;
			font-weight: bold;
			margin-top: 22upx;
		}

		.clr_pos {
			display: flex;
			align-items: center;
			margin-top: 20upx;

			.pricePer {
				font-size: 22upx;
				color: #666666;
				margin-left: 20upx;
			}

		}

		.tags {
			margin-top: 36upx;
			display: flex;

			.tagbox {
				width: 132upx;
				height: 50upx;
				line-height: 50upx;
				background: rgba(255, 255, 255, 1);
				border: 1upx solid rgba(220, 220, 220, 1);
				border-radius: 4upx;
				text-align: center;
				font-size: 26upx;
				color: #333333;
				margin-right: 20upx;
			}
		}

		.isYingye {
			margin-top: 41upx;
			display: flex;
			justify-content: space-between;

			.yy_left {
				font-size: 24upx;
				color: #333333;

				text {
					color: #A4A4A4;
				}
			}

			.yy_right {
				font-size: 24upx;
				color: #333333;
			}
		}
	}

	.dp_address {
		background: rgba(255, 255, 255, 1);
		box-shadow: 0 1upx 20upx 0 rgba(187, 187, 187, 0.2);
		border-radius: 20upx;
		padding: 36upx 0 38upx 20upx;
		margin: 21upx 23upx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.address_left {
			width: 331upx;
			flex-shrink: 0;

			.title {
				font-size: 32upx;
				color: #333333;
				font-weight: bold;
			}

			.desc {
				font-size: 26upx;
				color: #666666;
				margin-top: 35upx;
			}
		}

		.address_right {
			display: flex;

			.addr_box {
				width: 160upx;
				text-align: center;
				font-size: 22upx;
				color: #333333;

				image {
					width: 28upx;
					height: 36upx;
				}
			}
		}
	}

	.youh_navs {
		margin: 54upx 23upx 0;

		.navs {
			display: flex;
			margin-left: 20upx;

			.n_box {
				font-size: 36upx;
				color: #333333;
				font-weight: bold;
				margin-right: 41upx;
				padding-bottom: 8upx;

				&.active {
					color: #FD7E3C;
					border-bottom: 2upx #FD7E3C solid;
				}
			}

			&.fixed {
				width: 100%;
				position: fixed;
				top: 0;
				left: 0;
				z-index: 99;
				background-color: #FFFFFF;
				margin-left: 0;
				padding: 20upx 20upx 0 40upx;
				box-sizing: border-box;
			}
		}

		.nav_change {
			margin-top: 38upx;

			.yhc_quan,
			.yhc_taocan {
				background: rgba(255, 255, 255, 1);
				box-shadow: 0 1upx 20upx 0 rgba(187, 187, 187, 0.2);
				border-radius: 20upx;
				padding: 42upx 20upx;
				display: flex;

				.quan_left {
					flex-shrink: 0;

					image {
						width: 42upx;
						height: 42upx;
					}
				}

				.quan_center {
					margin-left: 22upx;
					flex: 1;

					.name {
						font-size: 32upx;
						color: #333333;
						font-weight: bold;
					}

					.desc {
						font-size: 24upx;
						color: #A4A4A4;
						margin-top: 19upx;
					}

					.price {
						font-size: 30upx;
						font-weight: bold;
						color: rgba(254, 118, 57, 1);
						margin-top: 23upx;
					}
				}

				.quan_right {
					margin-left: auto;
					flex-shrink: 0;
					text-align: center;

					.btn {
						width: 120upx;
						height: 60upx;
						line-height: 60upx;
						background: linear-gradient(90deg, rgba(252, 136, 64, 1), rgba(255, 103, 51, 1));
						border-radius: 4upx;
						font-size: 36upx;
						color: #FFFFFF;
					}

					.yueshou {
						font-size: 22upx;
						color: #666666;
						margin-top: 19upx;
					}
				}
			}

			.yhc_taocan {
				margin: 10upx 0 0;
				display: block;

				.bigtitle {
					margin-bottom: 40upx;

					image {
						width: 42upx;
						height: 42upx;
						vertical-align: middle;
					}

					text {
						font-size: 30upx;
						color: #333;
						margin-left: 19upx;
						font-weight: bold;
					}
				}

				.taoc_content {
					display: flex;
					align-items: center;
					margin-bottom: 60upx;

					.name {
						font-size: 28upx;
						font-weight: normal;
					}

					.quan_left {
						width: 120upx;
						height: 119upx;
						border-radius: 4upx;
						background-color: #EEEEEE;
						overflow: hidden;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.oldPrice {
						font-size: 26upx;
						color: #BBBBBB;
						margin-left: 10upx;
						text-decoration: line-through;
					}

					.zhekou {
						width: 53upx;
						height: 26upx;
						line-height: 26upx;
						text-align: center;
						background: rgba(255, 238, 228, 1);
						border-radius: 11upx;
						font-size: 18upx;
						color: #FE7338;
						margin-left: 17upx;
					}
				}

				.seemore {
					text-align: center;
					font-size: 28upx;
					color: #333333;

					image {
						width: 22upx;
						height: 14upx;
						margin-left: 15upx;
					}
				}
			}
		}

		.tuij_cai {
			background: rgba(255, 255, 255, 1);
			box-shadow: 0 1upx 20upx 0px rgba(187, 187, 187, 0.2);
			border-radius: 20upx;
			margin: 20upx 0 0;
			padding: 36upx 20upx;

			.common_title {
				display: flex;
				align-items: center;

				.title_left {
					font-size: 32upx;
					color: #333333;
					font-weight: bold;
				}

				.title_right {
					width: 12upx;
					height: 20upx;
					margin-left: auto;

					image {
						width: 100%;
						height: 100%;
						vertical-align: text-top;
					}
				}
			}

			.caic_top {
				height: 300upx;
				border-radius: 12upx;
				margin: 38upx 0 48upx;
				overflow: hidden;
				position: relative;
				background-color: #EEEEEE;

				image {
					width: 100%;
					height: 100%;
				}

				.caict_mask {
					width: 100%;
					padding: 20upx;
					position: absolute;
					left: 0;
					bottom: 0;
					background-color: rgba(255, 255, 255, 0.8);
					font-size: 28upx;
					color: #333333;
					display: flex;
					justify-content: space-between;
					box-sizing: border-box;

					.price {
						font-weight: bold;
					}
				}
			}

			.caic_bot {
				display: flex;

				.cbbox {
					margin-right: 17upx;
					text-align: center;

					&:last-child {
						margin-right: 0;
					}

					.cbbox_top {
						width: 210upx;
						height: 150upx;
						border-radius: 12upx;
						overflow: hidden;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.name {
						font-size: 26upx;
						color: #333333;
						margin-top: 23upx;
					}
				}
			}
		}

		.shangjia_dt {
			margin-top: 45upx;

			.sjd_top {
				display: flex;

				.sjdt_left {
					width: 101upx;
					height: 101upx;
					border-radius: 50%;
					overflow: hidden;
					background-color: #EEEEEE;
					flex-shrink: 0;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.sjdt_right {
					margin-left: 33upx;

					.name {
						font-size: 32upx;
						color: #333333;
						font-weight: bold;
					}

					.date {
						font-size: 22upx;
						color: #666;
						margin-top: 16upx;
					}
				}
			}

			.sjd_center {
				font-size: 28upx;
				color: #333333;
				margin: 24upx 0 46upx;
			}
		}

		.hotc-cont {
			margin: 40upx 10upx 0;

			.cont_li {
				margin-bottom: 54upx;
				display: flex;

				.li_left {
					width: 64upx;
					height: 64upx;
					border-radius: 50%;
					overflow: hidden;
					flex-shrink: 0;
					background: #eee;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.li_right {
					margin-left: 22upx;
					flex: 1;

					.lir_top {
						display: flex;
						align-items: center;
						margin-bottom: 29upx;

						.t1name {
							font-size: 26upx;
							color: #333333;
						}

						.t1img {
							width: 28upx;
							height: 31upx;
							@include bg-image('../../static/images/bbs-vip');
							margin: 0 34upx 0 16upx;
						}

						.t1date {
							font-size: 24upx;
							color: #AAAAAA;
						}

						.t1zan {
							margin-left: auto;
							font-size: 24upx;
							color: #AAAAAA;

							.zanicon {
								width: 26upx;
								height: 26upx;
								@include bg-image('../../static/images/zan');
								display: inline-block;
								margin-right: 10upx;

								&.active {
									@include bg-image('../../static/images/zanOn');
								}
							}
						}
					}

					.lir_con {
						font-size: 30upx;
						color: #333333;
						margin: 20upx 0;
					}


				}
			}
		}

	}

	.other_sj {
		margin: 37upx 23upx 16upx;

		.title {
			font-size: 32upx;
			font-weight: bold;
			color: #333333;
			margin-left: 17upx;
		}
	}

	.toushuC {
		width: 259upx;
		height: 453upx;
		@include bg-image('../../static/images/detail_wbg');
		position: absolute;
		top: 80upx;
		right: 0;
		line-height: 27upx;

		.tc-li {
			width: 75%;
			margin: 0 auto;
			font-size: 26upx;
			color: #333333;
			border-bottom: 1upx #EAEAEA solid;
			padding: 20upx 0 20upx 10upx;
			box-sizing: border-box;
			position: relative;

			&:first-child {
				padding-top: 60upx;
			}

			&:last-child {
				border-bottom: none;
			}

			image {
				width: 36upx;
				height: 36upx;
				margin-right: 17upx;
				vertical-align: middle;
				position: relative;
				top: -4upx;
			}

			.dian {
				width: 16upx;
				height: 16upx;
				background: rgba(255, 0, 21, 1);
				border: 1upx solid rgba(255, 255, 255, 1);
				border-radius: 50%;
				position: absolute;
				left: 34upx;
				top: 10upx;
			}
		}
	}
</style>
