<template>
	<view>
		<uni-nav-bar  title="社区" :status-bar="true"></uni-nav-bar>
		<view class="bbs-con">
			<view class="bc-navs" id="the-id">
				<scroll-view scroll-x="true" class="bc-scroll" :class="top<10&&top?'fixed':''">
					<view class="nav_li" v-for="(item,index) in navList" :key="index" :class="index==curIndex?'active':''" @click="changeNav(index,item.id)">
						{{item.title}}
					</view>
				</scroll-view>
			</view>
			<view class="bc-content">
				<view class="bcc_li" v-for="(item,index) in conList" :key="index">
			     <navigator :url="'../articleDetail/articleDetail?pid='+item.id+'&bid='+item.bid" hover-class="none">
					 <view class="li_title">
					 		{{item.title}}
					 	</view>
					 	<view class="li_imgs">
					 		<image :src="item.img" mode="aspectFill"></image>
					 	</view>
					 	<view class="li_controls">
					 		<view class="control_left">
					 			<image src="../../static/images/bbs-love@2x.png" mode="widthFix"></image>
					 			<text>{{item.like}}</text>
					 		</view>
					 		<view class="control_right">
					 			{{item.createtime | timeChange}}
					 		</view>
					 	</view>
					 
				 </navigator>
			   </view>
			</view>
		</view>
		<view class="tabH"></view>
		<my-tab mindex="3"></my-tab>
	</view>
</template>

<script>
	import tools from '../../static/js/tools.js'
	import tabbar from '../../components/tabbar/tabbar.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				navList: ['热门', '同城话题', '旅行旅拍', '特色美食', '旅行旅拍', '特色美食', '旅行旅拍', '特色美食'],
				conList: 6,
				top:null,
				bid:null,
				curIndex:0
			};
		},
		components: {
			'my-tab': tabbar,
			uniNavBar
		},
		filters:{
			timeChange(val){
				return tools.timeFormat(val);
			}
		},
		mounted() {
			this.getData();
		},
		onPageScroll(e){
			this.getDivtop();
		},
		methods:{
			getData(){
				let _that=this;
				uni.showToast({
					icon:'loading',
					title:'加载中'
				});
				tools.myRequest('api.sns.posts', {
					bid: _that.bid
				}, 'GET').then(res => {
					// console.log(res);
					uni.hideToast();
					tools.warnMessage(res.status,res.result.message,function(){
						 _that.navList=res.result.category;
						 _that.conList=res.result.list;
						 if(!_that.bid){
						 	_that.bid=res.result.category[0].id;
						 }
					});
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			},
			changeNav(index,id){
				this.curIndex=index;
				this.bid=id;
				this.getData();
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
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F9F7;
	}
	.bbs-con {
		margin-top: 21upx;
		.bc-navs {
			width: 100%;
			overflow: hidden;
			.bc-scroll {
				background-color: #FFFFFF;
				border-bottom: 1upx #EEEEEE solid;
				padding-left: 37upx;
				white-space: nowrap;
				.nav_li {
					display: inline-block;
					padding: 29upx 0;
					margin-right: 63upx;
					font-size: 32upx;
					color: #666666;
					&.active {
						font-size: 36upx;
						color: #333333;
						font-weight: bold;
						border-bottom: 4upx #FFA127 solid;
					}
				}
			}
			.fixed {
				position: fixed;
				top:0;
				left: 0;
				z-index: 111;
			}
		}
		.bcc_li {
			background-color: #FFFFFF;
			margin-bottom: 40upx;
			padding: 20upx 32upx 27upx 28upx;

			.li_title {
				font-size: 30upx;
				color: #333333;
				font-weight: bold;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.li_imgs {
				width: auto;
				height: 280upx;
				background: rgba(191, 217, 236, 1);
				border-radius: 10upx;
				margin-top: 17upx;
                overflow: hidden;
				image {
					width: 100%;
					height: 100%;
				}
			}

			.li_controls {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 27upx;
				font-size: 24upx;
				color: #AAAAAA;

				.control_left {
					image {
						width: 23upx;
						height: 20upx;
						margin-right: 10upx;
						position: relative;
						top: 2upx;
					}
				}
			}
		}
	}
</style>
