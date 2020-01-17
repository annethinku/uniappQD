<template>
	<view>
		<view class="bbs-con">
			<view class="bc-navs" id="the-id">
				<scroll-view scroll-x="true" class="bc-scroll" :class="top<10&&top?'fixed':''">
					<view class="nav_li" v-for="(item,index) in navList" :key="index" :class="index==0?'active':''">
						{{item}}
					</view>
				</scroll-view>
			</view>
			<view class="bc-content">
				<view class="bcc_li" v-for="(item,index) in conList" :key="index">
			     <navigator url="../articleDetail/articleDetail" hover-class="none">
					 <view class="li_title">
					 		得花一支，孤闻方圆百里。无一是景，无一是情dfffffffffffffffffffffg
					 	</view>
					 	<view class="li_imgs">
					 		<image src="" mode="aspectFill"></image>
					 	</view>
					 	<view class="li_controls">
					 		<view class="control_left">
					 			<image src="" mode="widthFix"></image>
					 			<text>1.232</text>
					 		</view>
					 		<view class="control_right">
					 			今天
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
	import tabbar from '../../components/tabbar/tabbar.vue'
	export default {
		data() {
			return {
				navList: ['热门', '同城话题', '旅行旅拍', '特色美食', '旅行旅拍', '特色美食', '旅行旅拍', '特色美食'],
				conList: 6,
				top:null
			};
		},
		components: {
			'my-tab': tabbar
		},
		onPageScroll(e){
			this.getDivtop();
		},
		methods:{
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
				top: 88upx;
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
						vertical-align: middle;
					}
				}
			}
		}
	}
</style>
