<template>
	<view>
		<uni-nav-bar :status-bar="true" style="padding-top: 40upx;">
		    <view class="list_search">
				<view class="ls_jt" @click="returnPage"></view>
				<view class="ls_groups">
					<view class="g_icon"></view>
					<view class="g_input">
						<input type="text" :value="keyword" placeholder="佛跳墙" @input="fuzhiSearch" @confirm="enterSearch"/>
					</view>
				</view>
			</view>
		</uni-nav-bar>
		<view class="list_sorts">
			<view class="sorts_box" v-for="(item,index) in sorts" :key="index" @click="changeSorts(item.id)">
				<view class="sb_imgs">
					<image :src="item.thumb" mode=""></image>
				</view>
				<view class="sb_title">
					{{item.navname}}
				</view>
			</view>
		</view>
		<view class="list_navs" id="the-id" :class="(nfixed?'navFixed':'')">
			<view class="navs_box" @click="open($event,1)" :class="curindex==1?'active':''">
				<text v-if="leftList[curName]">{{leftList[curName].name}}</text>
				<text v-else>附近</text>
				<text class="nav_jt"></text>
			</view>
			<view class="navs_box" @click="open($event,2)" :class="curindex==2?'active':''">
				<text v-if="zhList[zhcurName]">{{zhList[zhcurName].name}}</text>
				<text v-else>综合</text>
				<text class="nav_jt"></text>
			</view>
			<view class="navs_box" @click="open($event,3)" :class="curindex==3?'active':''">
				<text>筛选</text>
				<text class="nav_jt2"></text>
			</view>
		</view>
		<view class="list_contents">
			<!-- <view class="cont_li" v-for="(item,index) in 10" :key="index">111</view> -->
			<navigator url="../detail/detail" v-for="(item,index) in list" :key="index">
				<view class="cont_li">
					<view class="cl_left">
						<view class="thumb">
							<image :src="item.logo" mode=""></image>
						</view>
						<view class="pinpai" v-show="item.catename"></view>
						<view class="xiuxi" v-show="item.ztyy!=1">
							休息中
						</view>
					</view>
					<view class="cl_right">
						<view class="clr_title elisOne">
							{{item.merchname}}
						</view>
						<view class="clr_pos">
							<view class="starCompo">
								<my-star score="4.88"></my-star>
							</view>
							<view class="pricePer" v-show="item.avgs">
								￥{{item.avgs}}/人
							</view>
							<view class="pos">
								{{item.dist | juliFit}}km
							</view>
						</view>
						<view class="clr_name">
							<view class="name_l">
								{{item.address}}
							</view>
							<view class="name_xl" v-show="item.count>0">
								月销量{{item.count}}
							</view>
						</view>
						<view class="clr_paihang">
							<text class="bor">您收藏的餐厅</text>
							<text>新都区中餐销量排行NO.1</text>
						</view>
						<view class="clr_quan" v-for="(item2,index2) in item.temporary" :key="index2">
							<image :src="item2.advimg" mode=""></image>
							<text class="elisOne">{{item2.title}}</text>
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
							<input type="text" :value="keyword" placeholder="佛跳墙"  @input="fuzhiSearch" @confirm="enterSearch"/>
						</view>
					</view>
				</view>
				<view class="list_navs">
					<view class="navs_box" @click="open($event,1)" :class="curindex==1?'active':''">
						<text v-if="leftList[curName]">{{leftList[curName].name}}</text>
						<text v-else>附近</text>
						<text class="nav_jt"></text>
					</view>
					<view class="navs_box" @click="open($event,2)" :class="curindex==2?'active':''">
						<text v-if="zhList[zhcurName]">{{zhList[zhcurName].name}}</text>
						<text v-else>综合</text>
						<text class="nav_jt"></text>
					</view>
					<view class="navs_box" @click="open($event,3)" :class="curindex==3?'active':''">
						<text>筛选</text>
						<text class="nav_jt2"></text>
					</view>
				</view>
				<view class="saix_con">
					<!-- 附近 -->
					<view class="fujin" v-show="curindex==1">
						<view class="fuj_left">
							<scroll-view scroll-y="true" class="fujscroll">
								<view class="name" :class="'附近'==curName?'active':''" @click="clickFujin(0,'附近')">
									附近
								</view>
								<view class="name" v-for="(item,index) in leftList" :key="index" 
								:class="index==curName?'active':''" @click="clickFujin(item.code,index)">
									{{item.name}}
								</view>
							</scroll-view>
						</view>
						<view class="fuj_right">
							<scroll-view scroll-y="true" class="fujscroll">
								<view class="desc" :class="'附近'==curMi?'active':''" 
								@click="clickFjjuli(0,'附近')">
									附近
								</view>
								<view class="desc" v-for="(item,index) in rightList" :key="index" :class="index==curMi?'active':''" 
								@click="clickFjjuli(item,index)">
									{{item | cljuli}}
								</view>
							</scroll-view>
						</view>
					</view>
					<!-- 综合 -->
					<view class="fujin" v-show="curindex==2">
						<view class="fuj_left">
							<scroll-view scroll-y="true" class="fujscroll">
								<view class="name" v-for="(item,index) in zhList" :key="index" 
								:class="index==zhcurName?'active':''" @click="clickZonghe(item.eng,index)">
									{{item.name}}
								</view>
							</scroll-view>
						</view>
					</view>
					<!-- 筛选 -->
					<view class="saix" v-show="curindex==3">
					   <scroll-view scroll-y="true" class="fujscroll">					
					   		<view class="saix_box">
					   			<view class="sab_title">
					   				活动促销
					   			</view>
					   			<view class="sab_options">
					   				<view class="option_box" :class="item.active?'active':''" v-for="(item,index) in huodArr" :key="index"
					   				 @click="checkedCur(index)">
					   					{{item.name}}
					   					<image src="../../static/images/il_gou.png" mode="" v-show="item.active"></image>
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
					   			<RangeSlider ref="progress"
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
					   				<view class="option_box" :class="item.active?'active':''" v-for="(item,index) in otherArr" :key="index"
					   				 @click="checkedCur2(index)">
					   					{{item.navname}}
					   					<image src="../../static/images/il_gou.png" mode="" v-show="item.active"></image>
					   				</view>
					   			</view>
					   		</view>
					   </scroll-view>
					   <view class="saix_btns">
					   	<view class="btn_cz btn" @click="chongzhi">重置</view>
					   	<view class="btn_sure btn" @click="sureSaixuan">确认</view>
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
	import tools from '../../static/js/tools.js'
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
				zhList: [{
					name: '综合排序',
					eng:0
				}, {
					name: '距离优先',
					eng:'distance'
				}, {
					name: '人气优先',
					eng:'popularity'
				}, {
					name: '销量优先',
					volume:'volume'
				}, {
					name: '低价优先',
					eng:'low_price'
				}, {
					name: '高价优先',
					eng:'high_price'
				}],
				curindex: 0,
				curMi:null,
				curName:null,
				zhcurName:null,
				canyArr: ['距离优先', '人气优先', '销量优先', '低价优先', '高价优先'],
				huodArr: ['买单立减', '代金券', '团购套餐'],
				otherArr: ['营业中', '可停车', '有包厢', '可预定', '24小时营业', '有WIFI', '可排队'],
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
				list:[],
				// 获取列表所传参数
				lat:30.821124,
				lng:104.172203,
				delicacy_category:0,
				page:1,
				comprehensive:0,
				activity:[],
				money:[],
				service:[],
				code:510100,
				codes:0,
				keyword:''
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
		filters:{
			juliFit(val){
				let nv=val.split("公里")[0];
				return parseFloat(nv).toFixed(1);
			},
			cljuli(val){
				let str='';
				if(val>=1000){
					str=(val/1000)+'km';
				}else{
					str=(val)+'m';
				}
				return str;
			}
		},
		onPageScroll(res) {
			this.scrTop=res.scrollTop;
			this.getDivtop();
		},
		onLoad(options){
			if(options.lat){
				this.lat=options.lat;
			}
			if(options.lng){
				this.lng=options.lng;
			}
			if(uni.getStorageSync('curCode')){
				this.code=uni.getStorageSync('curCode');
			}
		},
		mounted() {
			let _that=this;
			_that.getDivtop();
			_that.getData();
		},
		onReachBottom(){
			this.page=this.page+1;
			this.getData();
		},
		methods: {
			// 获取列表数据
			getData(){
				// lat（当前位置纬度），lng（当前位置经度），delicacy_category（美食分类id，点击分类则携带），page（页数），
				// code（用户定位或者选择地址的代码），comprehensive（综合,默认是综合排序，0或者不携带就是综合排序，距离distance，
				// 人气popularity，销量volume，低价low_price，高价high_price），activity[]（活动，数组传输），
				// money（数组，money[0]：最低价格，money[1]：最高价格），service（服务id，数组）
				// codes（附近地区的行政代码）mi（米），token（有就带），keyword（查询内容）
				let _that=this;
				let token=uni.getStorageSync('token');
				let params={
					lat:_that.lat,
					lng:_that.lng,
					delicacy_category:_that.delicacy_category,
					page:_that.page,
					code:_that.code,
					comprehensive:_that.comprehensive,
					activity:_that.activity,
					money:_that.rangeValues3,
					service:_that.service,
					mi:_that.mi,
					codes:_that.codes,
					token:token,
					keyword:_that.keyword
				};
				tools.myRequest('api.delicacy.list',params, '').then(res => {
					// console.log(res);
					uni.hideToast();
					tools.warnMessage(res.status,res.result.message,function(){
						_that.sorts=res.result.category;
						_that.list=res.result.list;
					});
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			},
			// 获取附近数据
			getFujing(){
				let _that=this;
				tools.myRequest('api.delicacy.list.nearby',{code:_that.code}, '').then(res => {
					// console.log(res);
					uni.hideToast();
					tools.warnMessage(res.status,res.result.message,function(){
						_that.leftList = res.result.data.dq;
						_that.rightList = res.result.data.mi;
					});
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
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
			// 点击筛选获取数据
			getSaixuan(){
				let _that=this;
				tools.myRequest('api.delicacy.list.screen',{code:_that.code}, '').then(res => {
					// console.log(res);
					uni.hideToast();
					tools.warnMessage(res.status,res.result.message,function(){
						if(!_that.huodArr[0].name){
							_that.huodArr = res.result.activity;
							_that.otherArr = res.result.service;
						}else{
							console.log('重新赋值了')
						}
					});
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			},
			// 点击附近数据
			clickFujin(codes,index){
				this.codes=codes;
				this.curName=index;
			},
			// 点击综合数据
			clickZonghe(eng,index){
				this.comprehensive=eng;
				this.zhcurName=index;
				this.$refs.popup.close();
				this.getData();
			},
			// 点击附近数据距离
			clickFjjuli(mi,index){
				this.mi=mi;
				this.curMi=index;
				this.$refs.popup.close();
				this.getData();
			},
			// 返回上一页
			returnPage() {
				uni.navigateBack({});
			},
			open(e, i) {
				// 展开
				if (this.curindex != i) {
					this.curindex = i;
					if (i == 1) { //附近
						this.getFujing();
					} else if (i == 2) { //综合
					
					} else if (i == 3) { //筛选
                       this.getSaixuan();
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
				if(this.huodArr[index].active){
					// this.huodArr[index].active=false;
					this.$set(this.huodArr[index],'active',false);
				}else{
					// this.huodArr[index].active=true;
					this.$set(this.huodArr[index],'active',true);
				}
			},
			checkedCur2(index) {
				if(this.otherArr[index].active){
					// this.otherArr[index].active=false;
					this.$set(this.otherArr[index],'active',false);
				}else{
					// this.otherArr[index].active=true;
					this.$set(this.otherArr[index],'active',true);
				}
			},
			onRangeChange3: function(e) {
				this.rangeValues3 = [e.minValue, e.maxValue];
			},
			chongzhi(){
				this.rangeValues3=[0,300];
				this.slideWidth=600;
				this.slideHeight= 30;
				this.slideBlockSize= 30;
				this.slideMin= 0;
				this.slideMax= 300;
				this.isLiveMode= true;
				this.step= 50;
				this.activity=[];
				this.service=[];
				this.$refs.progress._refresh();
				for(let i=0;i<this.huodArr.length;i++){
					this.huodArr[i].active=false;
				}
				for(let i=0;i<this.otherArr.length;i++){
					this.otherArr[i].active=false;
				}
			},
			sureSaixuan(){
				this.money=this.rangeValues3;
				for(let i=0;i<this.huodArr.length;i++){
					if(this.huodArr[i].active){
						this.activity.push(this.huodArr[i].id);
					}
				}
				for(let i=0;i<this.otherArr.length;i++){
					if(this.otherArr[i].active){
						this.service.push(this.otherArr[i].id);
					}
				}
				this.$refs.popup.close();
				this.getData();
			},
			fuzhiSearch(e){
				this.keyword=e.detail.value;
			},
			enterSearch(){
				this.$refs.popup.close();
				this.getData();
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
	.fujscroll{
		height: 600upx;
	}
</style>
