<template>
	<view class="content">
		<view class="yellow-bg">
			<view class="index-top1">
				<view class="t1-sao" @click="saoFun"></view>
				<view class="t1-search">
					<view class="name">
						<navigator url="../caddress/caddress" hover-class="none">{{curP}}</navigator>
					</view>
					<navigator url="../caddress/caddress" hover-class="none"><view class="jt"></view></navigator>
					<view class="line"></view>
					<view class="search"></view>
					<view class="search-input">
						<input type="text" value="" placeholder="请输入你想搜索的内容" placeholder-class="input-holder" />
					</view>
				</view>
				<navigator url="../messages/messages" hover-class="none">
					<view class="t1-mes">
						<view class="dian"></view>
					</view>
				</navigator>
			</view>
			<view class="index-top2">
				<swiper :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000" indicator-color="rgba(254, 129, 76, 0.4)"
				 indicator-active-color="#FE814C">
					<swiper-item>
						<view class="swiper-item">
							<view class="t2-tools">
								<view class="tool-box" v-for="(item,index) in arrs" :key="index">
									<navigator url="../indexList/indexList" hover-class="none">
										<view class="icon">
											<image :src="item.icon"></image>
										</view>
										<view class="title">
											{{item.title}}
										</view>
									</navigator>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item"></view>
					</swiper-item>
				</swiper>
				<view class="model-other">
					<view :class="'model-box mb0'+(index+1)" v-for="(item,index) in models" :key="index">
						<text>{{item.title}}</text>
					</view>
				</view>
				<view class="index-ad">
					<image src="../../static/images/index-ad.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="index-top3">
				<view id="the-id">
					<scroll-view class="scroll-view_H" scroll-x="true" :class="nfixed?'t3-navs':''"
					@scroll="scroll" scroll-left="0" scroll-with-animation="true">
						<view v-for="(item,index) in navs" :key="index" :class="index==1?'active pb':'pb'">
							{{item}}
							<text class="line" v-show="index==1"></text>
							<text class="line2" v-show="index==1"></text>
						</view>
					</scroll-view>
				</view>
				<view class="t3-contents">
					<view class="t3c-box" v-for="(item,index) in lists" :key="index">
						<view class="t3imgs">
							<image :src="item.img" mode="widthFix"></image>
						</view>
						<view class="title">
							{{item.title}}
						</view>
						<view class="stars-o">
							<view class="out-sbx">
								<view class="stars" v-for="(item,index) in item.star" :key="index">
									<image src="../../static/images/index-star.png" mode="widthFix"></image>
								</view>
							</view>
							<view class="price">
								￥{{item.price}}/人
							</view>
						</view>
						<view class="address">
							<text class="w">{{item.address}}</text>
							<text class="w2">({{item.juli}})</text>
						</view>
					</view>
				</view>
			</view>
			<view class="tabH"></view>
		</view>
		<my-tab mindex="0"></my-tab>
	</view>
</template>

<script>
	import tabbar from '../../components/tabbar/tabbar.vue'
	import tools from '../../static/js/tools.js'
	export default {
		data() {
			return {
				arrs: [{
						icon: "../../static/images/index-icon01.png",
						title: "美食"
					},
					{
						icon: "../../static/images/index-icon02.png",
						title: "旅游"
					},
					{
						icon: "../../static/images/index-icon03.png",
						title: "酒店"
					},
					{
						icon: "../../static/images/index-icon04.png",
						title: "休闲娱乐"
					},
					{
						icon: "../../static/images/index-icon05.png",
						title: "电影"
					},
					{
						icon: "../../static/images/index-icon06.png",
						title: "美容美甲"
					},
					{
						icon: "../../static/images/index-icon07.png",
						title: "爱车行"
					},
					{
						icon: "../../static/images/index-icon08.png",
						title: "健身"
					}
				],
				models: [{
					title: '吃喝玩乐',
					path: ''
				}, {
					title: '景点攻略',
					path: ''
				}, {
					title: '同城热门',
					path: ''
				}],
				navs: ['美食', '购物', '娱乐', '旅游', '酒店', '健身', '美食', '购物', '娱乐', '旅游', '酒店', '健身'],
				lists: [{
						img: '',
						title: '马尔代夫家庭游，游艇租金减半电视剧发达国家梵蒂冈大家给对方加扣扣',
						star: 4,
						price: '1250',
						address: '新都区 七一国际广场大概几点符合监管框架的开发工具的房价款',
						juli: '3.2km'
					},
					{
						img: '',
						title: '马尔代夫家庭游，游艇租金减半',
						star: 4,
						price: '1250',
						address: '新都区 七一国际广场',
						juli: '3.2km'
					},
					{
						img: '',
						title: '马尔代夫家庭游，游艇租金减半',
						star: 4,
						price: '1250',
						address: '新都区 七一国际广场',
						juli: '3.2km'
					},
					{
						img: '',
						title: '马尔代夫家庭游，游艇租金减半',
						star: 4,
						price: '1250',
						address: '新都区 七一国际广场',
						juli: '3.2km'
					},
					{
						img: '',
						title: '马尔代夫家庭游，游艇租金减半',
						star: 4,
						price: '1250',
						address: '新都区 七一国际广场',
						juli: '3.2km'
					},
					{
						img: '',
						title: '马尔代夫家庭游，游艇租金减半',
						star: 4,
						price: '1250',
						address: '新都区 七一国际广场',
						juli: '3.2km'
					}
				],
				scrTop:0,
				divTop:0,
				curP:'成都'
			}
		},
		computed:{
			nfixed(){
				if(this.divTop<=10){
					return true;
				}else{
					return false;
				}
			}
		},
		components: {
			'my-tab': tabbar
		},
		onLoad() {
			// 暂时将token设置为缓存
			let token = 'a6a95673-351a-aa7b-67bc-fc0b38a81f54';
			// let token = '85d5101b-db7c-974e-b2b8-b61884c17286';
			uni.setStorageSync('token',token);
		},
		onShow() {
			let curp=uni.getStorageSync('curPos');
			this.curP=curp?curp:'成都';
		},
		mounted(){
			this.getDivtop();
		},
		onPageScroll(res) {
			this.scrTop=res.scrollTop;
			this.getDivtop();
		},
		methods: {
			scroll() {

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
			// 扫一扫
			saoFun(){
				// 允许从相机和相册扫码
				uni.scanCode({
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			}
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

	.yellow-bg {
		width: 750upx;
		height: 718upx;
		@include bg-image('../../static/images/yellow-bg');
	}

	.index-top1 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 63upx;
		box-sizing: border-box;
	}

	.t1-sao {
		width: 41upx;
		height: 41upx;
		@include bg-image('../../static/images/index-sao');
		margin: 0 25upx 0 23upx;
	}

	.t1-search {
		flex: 1;
		height: 68upx;
		background-color: #FFFFFF;
		border-radius: 34upx;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.name {
			font-size: 26upx;
			color: #333333;
			margin: 0 7upx 0 40upx;
		}

		.jt {
			width: 10upx;
			height: 7upx;
			@include bg-image('../../static/images/index-jt');
			margin: 0 33upx 0 0upx;
		}

		.line {
			width: 1upx;
			height: 27upx;
			background-color: #DBDBDB;
		}

		.search {
			width: 24upx;
			height: 24upx;
			@include bg-image('../../static/images/index-search');
			margin: 0 21upx 0 40upx;
		}

		.search-input {
			flex: 1;
			font-size: 26upx;
			color: #333333;
			margin-right: 20upx;
		}
	}

	.t1-mes {
		width: 42upx;
		height: 43upx;
		@include bg-image('../../static/images/index-message');
		margin: 0 25upx 0 27upx;
		position: relative;

		.dian {
			width: 16upx;
			height: 16upx;
			background-color: #FF0015;
			border-radius: 50%;
			position: absolute;
			top: -8upx;
			right: -8upx;
		}
	}

	.index-top2 {
		margin: 0 23upx;
		background-color: #FFFFFF;
		border-radius: 50upx;
		padding: 30upx 0 0;
		margin-top: 51upx;

		swiper {
			// padding-bottom: 22upx;
			height: 360upx;
		}
	}

	.t2-tools {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.tool-box {
		width: 25%;
		text-align: center;
		margin-bottom: 25upx;

		.icon {
			width: 80upx;
			height: 80upx;
			margin: 0 auto 16upx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.title {
			font-size: 26upx;
			color: #9FA7AF;
		}
	}

	.model-other {
		margin: 27upx 0 13upx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;

		.model-box {
			width: 214upx;
			height: 132upx;
			font-size: 25upx;
			color: #333333;
			font-weight: bold;

			text {
				padding: 25upx 0 0 27upx;
				display: block;
			}
		}

		.mb01 {
			@include bg-image('../../static/images/index-bg');
		}

		.mb02 {
			@include bg-image('../../static/images/index-bg2');
		}

		.mb03 {
			@include bg-image('../../static/images/index-bg3');
		}
	}

	.index-ad {
		width: 100%;

		image {
			width: 100%;
		}
	}

	uni-swiper .uni-swiper-dots-horizontal {
		bottom: 0 !important;
	}
    .t3-navs{
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
	}
	.scroll-view_H {
		padding: 0 0 0 34upx;
		white-space: nowrap;

		view {
			font-size: 30upx;
			color: #777777;
			margin-right: 67upx;
			display: inline-block;
			position: relative;

			.line {
				width: 37upx;
				height: 4upx;
				background-color: #FF8F34;
				border-radius: 2upx;
				position: absolute;
				left: 0;
				bottom: 0;
			}

			.line2 {
				width: 7upx;
				height: 4upx;
				background-color: #FF8F34;
				border-radius: 2upx;
				position: absolute;
				left: 40upx;
				bottom: 0;
			}
		}

		.pb {
			padding-bottom: 19upx;
		}

		.active {
			font-weight: bold;
			color: #333333;
		}
	}

	.t3-contents {
		margin: 20upx 23upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.t3c-box {
			width: 48%;
			margin-right: 1%;
			margin-bottom: 20upx;
			border-radius: 12upx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0 1upx 22upx 0 rgba(186, 208, 234, 0.32);
			overflow: hidden;

			.t3imgs {
				height: 342upx;
				background-color: #e6e6e6;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.title {
				font-size: 28upx;
				color: #333333;
				margin: 20upx 19upx 0 17upx;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.stars-o {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 20upx 18upx 0;
				.out-sbx{
					display: flex;
					align-items: center;
					.stars {
						margin-right: 4upx;
						image {
							width: 19upx;
							height: 18upx;
						}
						&:last-child {
							margin-right: 0;
						}
					}
				}
				.price {
					font-size: 26upx;
					font-weight: bold;
					color: #E56C5C;
				}
			}

			.address {
				margin: 32upx 15upx 0 13upx;
				font-size: 22upx;
				color: #666666;

				text {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					word-break: break-all;
				}

				text.w {
					width: 70%;
					display: inline-block;
				}

				text.w2 {
					width: 30%;
					display: inline-block;
					text-align: right;
				}
			}
		}

		.t3c-box:nth-child(2n) {
			margin-right: 0
		}
	}
</style>
