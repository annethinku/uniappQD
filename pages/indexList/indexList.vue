<template>
	<view  @touchstart="start" @touchend="end">
		<uni-nav-bar :status-bar="true">
		    <view class="list_search">
				<view class="ls_jt" @click="returnPage"></view>
				<view class="ls_groups">
					<view class="g_icon"></view>
					<view class="g_input">
						<input type="text" value="" placeholder="佛跳墙" />
					</view>
				</view>
			</view>
		</uni-nav-bar>
		<view class="list_sorts">
			<view class="sorts_box" v-for="(item,index) in sorts" :key="index">
				<view class="sb_imgs">
					<image :src="'../../static/images/il_icon0'+(index+1)+'.png'" mode=""></image>
				</view>
				<view class="sb_title">
					{{item.title}}
				</view>
			</view>
		</view>
		<view class="list_navs" id="the-id" :class="(nfixed?'navFixed':'')">
			<view class="navs_box" @click="open($event,1)" :class="curindex==1?'active':''">
				<text>附近</text>
				<text class="nav_jt"></text>
			</view>
			<view class="navs_box" @click="open($event,2)" :class="curindex==2?'active':''">
				<text>综合</text>
				<text class="nav_jt"></text>
			</view>
			<view class="navs_box" @click="open($event,3)" :class="curindex==3?'active':''">
				<text>筛选</text>
				<text class="nav_jt2"></text>
			</view>
		</view>
		<view class="list_contents">
			<navigator url="../detail/detail" v-for="(item,index) in 5" :key="index">
				<view class="cont_li">
					<view class="cl_left">
						<view class="thumb">
							<image src="" mode=""></image>
						</view>
						<view class="pinpai"></view>
						<view class="xiuxi">
							休息中
						</view>
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
							<view class="name_xl">
								月销量1005
							</view>
						</view>
						<view class="clr_paihang">
							<text class="bor">您收藏的餐厅</text>
							<text>新都区中餐销量排行NO.1</text>
						</view>
						<view class="clr_quan">
							<image src="../../static/images/il_quan.png" mode=""></image>
							<text class="elisOne">100代金卷79元</text>
						</view>
						<view class="clr_quan">
							<image src="../../static/images/il_tuan.png" mode=""></image>
							<text class="elisOne">双人超值套餐79元，四人超值套餐158元</text>
						</view>
					</view>
				</view>
			</navigator>
		</view>
		<!-- 筛选条件弹窗 -->
		<uni-popup ref="popup" type="top" @change="isShowMask">
			<view class="saixuan">
				<view class="list_search" style="padding: 29upx 33upx 0 22upx;">
					<view class="ls_jt" @click="returnPage"></view>
					<view class="ls_groups">
						<view class="g_icon"></view>
						<view class="g_input">
							<input type="text" value="" placeholder="佛跳墙" />
						</view>
					</view>
				</view>
				<view class="list_navs">
					<view class="navs_box" @click="open($event,1)" :class="curindex==1?'active':''">
						<text>附近</text>
						<text class="nav_jt"></text>
					</view>
					<view class="navs_box" @click="open($event,2)" :class="curindex==2?'active':''">
						<text>综合</text>
						<text class="nav_jt"></text>
					</view>
					<view class="navs_box" @click="open($event,3)" :class="curindex==3?'active':''">
						<text>筛选</text>
						<text class="nav_jt2"></text>
					</view>
				</view>
				<view class="saix_con">
					<!-- 附近 -->
					<view class="fujin" v-show="curindex!=3">
						<view class="fuj_left">
							<view class="name" v-for="(item,index) in leftList" :key="index" :class="index==0?'active':''">
								{{item.name}}
							</view>
						</view>
						<view class="fuj_right">
							<view class="desc" v-for="(item,index) in rightList" :key="index" :class="index==0?'active':''">
								{{item.name}}
							</view>
						</view>
					</view>
					<!-- 筛选 -->
					<view class="saix" v-show="curindex==3">
						<view class="saix_box">
							<view class="sab_title">
								餐饮服务
							</view>
							<view class="sab_options">
								<view class="option_box" :class="canyi==index?'active':''" v-for="(item,index) in canyArr" :key="index" @click="checkedCur(index)">
									{{item}}
									<image src="../../static/images/il_gou.png" mode="" v-show="canyi==index"></image>
								</view>
							</view>
						</view>
						<view class="saix_box">
							<view class="sab_title">
								活动促销
							</view>
							<view class="sab_options">
								<view class="option_box" :class="huodong==index?'active':''" v-for="(item,index) in huodArr" :key="index"
								 @click="checkedCur2(index)">
									{{item}}
									<image src="../../static/images/il_gou.png" mode="" v-show="huodong==index"></image>
								</view>
							</view>
						</view>
						<view class="saix_box">
							<view class="sab_title">
								价格
								<text v-if="parseInt(rangeValues3[0])>= parseInt(rangeValues3[1])">￥{{ rangeValues3[1] }}+</text>
								<text v-else>￥{{ rangeValues3[0] }}~{{ rangeValues3[1] }}</text>
							</view>
							<!-- <text>{{ rangeValues3[0] }}</text> -->
							<!-- <text>~</text> -->
							<!-- <text>{{ rangeValues3[1] }}</text> -->
							<RangeSlider
								:width="slideWidth"
								:height="slideHeight"
								:blockSize="slideBlockSize"
								:min="slideMin"
								:max="slideMax"
								:values="rangeValues3"
								:step="step"
								:liveMode="isLiveMode"
								@rangechange="onRangeChange3"
								background-color="#AAAAAA"
								active-color="#FF8B2D"
							>
								<view slot="minBlock" class="range-slider-block"></view>
								<!-- 左边滑块的内容 -->
								<view slot="maxBlock" class="range-slider-block"></view>
								<!-- 右边滑块的内容 -->
							</RangeSlider>
						</view>
						<view class="saix_box">
							<view class="sab_title">
								其他服务
							</view>
							<view class="sab_options">
								<view class="option_box" :class="other==index?'active':''" v-for="(item,index) in otherArr" :key="index"
								 @click="checkedCur3(index)">
									{{item}}
									<image src="../../static/images/il_gou.png" mode="" v-show="other==index"></image>
								</view>
							</view>
						</view>
					    <view class="saix_btns">
					    	<view class="btn_cz btn" @click="chongzhi">重置</view>
							<view class="btn_sure btn">确认</view>
					    </view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import stars from '../../components/stars/stars.vue'
	import RangeSlider from '../../components/range-slider/range-slider.vue';
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				sorts: [{
					title: '中餐'
				}, {
					title: '西餐'
				}, {
					title: '日料'
				}, {
					title: '火锅'
				}, {
					title: '水饮'
				}],
				leftList: [],
				leftList2: [{
					name: '附近'
				}, {
					name: '热门商圈'
				}, {
					name: '新都镇'
				}, {
					name: '大丰街道'
				}, {
					name: '新繁镇'
				}, {
					name: '新都其他'
				}],
				rightList: [],
				rightList2: [{
					name: '附近'
				}, {
					name: '500m'
				}, {
					name: '1km'
				}, {
					name: '3km'
				}, {
					name: '5km'
				}, {
					name: '10km'
				}],
				zonghe: [{
					name: '综合排序'
				}, {
					name: '距离优先'
				}, {
					name: '人气优先'
				}, {
					name: '销量优先'
				}, {
					name: '低价优先'
				}, {
					name: '高价优先'
				}],
				curindex: 0,
				canyArr: ['距离优先', '人气优先', '销量优先', '低价优先', '高价优先'],
				huodArr: ['买单立减', '代金券', '团购套餐'],
				otherArr: ['营业中', '可停车', '有包厢', '可预定', '24小时营业', '有WIFI', '可排队'],
				canyi: null,
				huodong: null,
				other: null,
				slideWidth: 600,
				slideHeight: 30,
				slideBlockSize: 30,
				slideMin: 0,
				slideMax: 300,
				isLiveMode: true,
				step: 50,
				rangeValues3: [0, 300],
				scrTop:0,
				divTop:100,
				startData:{clientX:0,clientY:0}
			};
		},
		components: {
			uniPopup,
			RangeSlider,
			'my-star': stars,
			uniNavBar
		},
		computed:{
			nfixed(){
				if(this.divTop<=10 && this.scrTop>0){
					return true;
				}else{
					return false;
				}
			}
		},
		onPageScroll(res) {
			this.scrTop=res.scrollTop;
			this.getDivtop();
		},
		mounted() {
			this.getDivtop();
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
			// 获取导航距离顶部的位置
			getDivtop(){
				const query = uni.createSelectorQuery().in(this);
				query.select('#the-id').boundingClientRect(data => {
				  // console.log("得到布局位置信息" + JSON.stringify(data));
				  // console.log("节点离页面顶部的距离为" + data.top);
				  this.divTop=data.top;
				}).exec();
			},
			returnPage() {
				uni.navigateBack({});
			},
			open(e, i) {
				// 展开
				if (this.curindex != i) {
					this.curindex = i;
					if (i == 1) { //附近
						this.leftList = this.leftList2;
						this.rightList = this.rightList2;
					} else if (i == 2) { //综合
						this.leftList = this.zonghe;
						this.rightList = [];
					} else if (i == 3) { //筛选

					}
					this.$refs.popup.open();
				} else {
					// 收起
					this.curindex = 0;
					this.$refs.popup.close();
				}

			},
			isShowMask(e) {
				if (!e.show) {
					this.curindex = 0;
				}
			},
			checkedCur(index) {
				this.canyi = index;
			},
			checkedCur2(index) {
				this.huodong = index;
			},
			checkedCur3(index) {
				this.other = index;
			},
			onRangeChange3: function(e) {
				this.rangeValues3 = [e.minValue, e.maxValue];
			},
			chongzhi(){
				this.canyi=null;
				this.huodong=null;
				this.other=null;
				this.rangeValues3=[0,300];
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

	.list_search {
		width: 100%;
		background-color: #FFFFFF;
		// padding: 29upx 33upx 0 22upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
        box-sizing: border-box;
		.ls_jt {
			width: 20upx;
			height: 35upx;
			flex-shrink: 0;
			@include bg-image('../../static/images/bbs_jian');
		}

		.ls_groups {
			width: 100%;
			flex: 1;
			height: 68upx;
			border-radius: 34upx;
			background-color: #F1F1F1;
			margin-left: 47upx;
			display: flex;
			align-items: center;

			.g_icon {
				width: 24upx;
				height: 24upx;
				flex-shrink: 0;
				@include bg-image('../../static/images/dw-search');
				margin: 0 41upx 0 61upx;
				flex-shrink: 0;
			}

			.g_input {
				line-height: 68upx;

				input {
					height: 100%;
					font-size: 26upx;
					color: #666;
				}
			}
		}
	}

	.list_sorts {
		background-color: #FFFFFF;
		display: flex;
		padding: 40upx 0 29upx;

		.sorts_box {
			width: 20%;
			text-align: center;

			.sb_imgs {
				width: 88upx;
				height: 88upx;
				margin: 0 auto;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.sb_title {
				font-size: 26upx;
				color: #9FA7AF;
				margin-top: 27upx;
			}
		}
	}

	.list_navs {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #FFFFFF;
		margin-top: 10upx;
		padding: 20upx 0;
        &.navFixed{
			position: fixed;
			top: 0;
			left: 0;
			margin-top: 0;
			z-index: 11;
		}
		.navs_box {
			font-size: 28upx;
			color: #333333;
			font-weight: bold;

			.nav_jt {
				width: 10upx;
				height: 7upx;
				flex-shrink: 0;
				margin-left: 15upx;
				display: inline-block;
				@include bg-image('../../static/images/index-jt');
				position: relative;
				top: -4upx;
			}

			.nav_jt2 {
				width: 21upx;
				height: 21upx;
				flex-shrink: 0;
				margin-left: 9upx;
				display: inline-block;
				@include bg-image('../../static/images/il_sx');
			}

			&.active {
				color: #ff8b2d;

				.nav_jt {
					@include bg-image('../../static/images/index-jtOn');
				}

				.nav_jt2 {
					@include bg-image('../../static/images/il_sxOn');
				}
			}
		}
	}

	.saixuan {
		background-color: #FFFFFF;
		padding-bottom: 45upx;

		.saix_con {
			border-top: 1upx solid rgba(238, 238, 238, 1);
			margin: 0 36upx 0 43upx;

			.fujin {
				display: flex;

				.fuj_left {
					width: 40%;
					margin-left: 51upx;
					font-size: 28upx;
					color: #333333;

					.name {
						margin-top: 53upx;

						&.active {
							color: #FF8B2D;
						}
					}
				}

				.fuj_right {
					flex: 1;
					font-size: 28upx;
					color: #333333;

					.desc {
						margin-top: 53upx;

						&.active {
							color: #FF8B2D;
						}
					}
				}
			}

			.saix {
				padding-bottom: 124upx;
				.saix_box {
					font-size: 28upx;
					color: #333333;

					.sab_title {
						margin-bottom: 29upx;
						margin-top: 45upx;
						text{
							color: #FF8B2D;
							margin-left: 33upx;
						}
					}

					.sab_options {
						display: flex;
						flex-wrap: wrap;

						.option_box {
							width: 154upx;
							height: 70upx;
							line-height: 70upx;
							border: 1upx solid rgba(170, 170, 170, 1);
							border-radius: 6upx;
							margin-right: 10upx;
							margin-bottom: 20upx;
							text-align: center;
							position: relative;

							&:nth-child(4n) {
								margin-right: 0;
							}

							&.active {
								background: rgba(255, 236, 220, 1);
								border: 1upx solid rgba(255, 139, 45, 1);
								color: #FF8B2D;
							}

							image {
								width: 28upx;
								height: 29upx;
								position: absolute;
								right: 0;
								bottom: 0;
							}
						}
					}
				}
				.saix_btns{
					display: flex;
	                justify-content: space-between;
					margin-top: 68upx;
					box-shadow:0 -10upx 20upx 0 rgba(187,187,187,0.2);
					width: 100%;
					padding: 26upx 45upx;
					position: absolute;
					left: 0;
					bottom: 0;
					box-sizing: border-box;
					.btn{
						width:310upx;
						height:84upx;
						line-height: 84upx;
						border-radius:42upx;
						font-size: 32upx;
						text-align: center;
						&.btn_cz{
						   border:1upx solid rgba(170,170,170,1);
						   color: #666666;
						}
						&.btn_sure{
							color: #FFFFFF;
							background:linear-gradient(90deg,rgba(252,136,64,1),rgba(255,103,51,1));
						}
					}
				}
			}
		}
	}
</style>
