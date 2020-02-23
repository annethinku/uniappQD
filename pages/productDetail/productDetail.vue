<template>
	<view>
		<view class="sp_top1">
			<swiper class="swiper" :autoplay="true" style="height: 420upx;" @change="swiperChange">
				<swiper-item class="mswiper-item" v-for="(item,index) in 3" :key="index">
					<image src="http://img01.tooopen.com/Downs/images/2011/7/19/sy_2011071921372597307.jpg" mode="" @load="imgLoad"></image>
				</swiper-item>
			</swiper>
			<view class="swiper-dian">
				{{cur+1}}/3
			</view>
		</view>
		<view class="sp_orange">
			<view class="spo_left">
				<text class="font1">￥</text>
				<text class="font2">79.00</text>
				<text class="font3">原价¥ 100</text>
			</view>
			<view class="spo_right">
				月售：800
			</view>
		</view>
		<view class="sp_fonts">
			<view class="name">
				79元 2-3人餐
			</view>
			<view class="desc">
				宅在家也要吃的巴适火锅！109元=双人/198元=5-6人抢聚宝
				盆火锅外卖！品牌火锅！安全美味，好吃放心！全是火锅必点
				菜—自尊虾滑、嫩牛肉、毛肚、千层肚、郡霸、肥牛... 一应俱
				全！7荤四素/十二荤8素
			</view>
		</view>
		<view class="sp_guige" v-show="isTaocan">
			<view class="guige_title">
				规格选择
			</view>
			<view class="gg_content">
				<scroll-view scroll-x="true" class="gg_scroll">
					<view class="ggs_box" v-for="(item,index) in arrs" :key="index" :class="index==curIndex?'active':''" @click="chooseMe(index)">
						{{item}}
						<image src="../../static/images/il_gou.png" mode="" v-show="index==curIndex"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="sp_guige">
			<view class="guige_title">
				商品详细
			</view>
		</view>
        <view class="product_detail">
        	<rich-text :nodes="details"></rich-text>
        </view>
		<view style="height:150upx;"></view>
		<view class="fixed-btn">
			<view class="fbflex">
				<view class="fb_right">
					立即购买
				</view>
				<view class="fb_left">
					总计：
					<text>￥79.00</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgHeight: 0,
				cur: 0,
				arrs: ['79元 2-3人餐', '168元 4-6人餐', '328元 6-8人餐'],
				curIndex: 0,
				details:'',
				isTaocan:true
			};
		},
		mounted(){
			this.details='<div><h4>肥牛套餐</h4><p style="width:80%;margin:20px auto;">'+
                            '这里是标这里是标题这里是标题题'+
							'这里是标这里是标题这里是标题题'+
							'这里是标这里是标题这里是标题题'+
                            '</p><img src="http://pic1.zhimg.com/50/v2-d5d077f05fdaadf654ab43c85ccd7db2_hd.jpg" style="width:80%"/></div>';
		},
		onLoad(options) {
			if(options.isTaocan){
				this.isTaocan=JSON.parse(options.isTaocan);
			}
		},
		methods: {
			imgLoad(e) {
				this.imgHeight = e.detail.height;
			},
			swiperChange(e) {
				this.cur = e.detail.current;
			},
			chooseMe(index) {
				this.curIndex = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F9F7;
	}

	.sp_top1 {
		width: 100%;
		position: relative;

		.swiper-dian {
			width: 80upx;
			height: 40upx;
			line-height: 40upx;
			background: rgba(0, 0, 0, 0.4);
			border-radius: 20upx;
			position: absolute;
			right: 22upx;
			bottom: 30upx;
			font-size: 28upx;
			color: #FFFFFF;
			text-align: center;
		}

		.mswiper-item {
			width: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.sp_orange {
		height: 100upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FF8048;
		color: #FFFFFF;
		padding: 0 33upx 0 26upx;

		.spo_left {
			.font1 {
				font-size: 43upx;
				font-weight: bold;
			}

			.font2 {
				font-size: 60upx;
				font-weight: bold;
			}

			.font3 {
				font-size: 20upx;
				margin-left: 32upx;
				text-decoration: line-through;
			}
		}

		.spo_right {
			font-size: 28upx;
		}
	}

	.sp_fonts {
		background-color: #FFFFFF;
		padding: 20upx;

		.name {
			font-size: 28upx;
			color: #232326;
		}

		.desc {
			margin-top: 23upx;
			font-size: 26upx;
			color: #999999;
		}
	}

	.sp_guige {
		margin-top: 20upx;
		background-color: #FFFFFF;

		.guige_title {
			font-size: 26upx;
			color: #AAAAAA;
			border-bottom: 1upx #EEEEEE solid;
			padding: 32upx 21upx;
		}

		.gg_content {
			padding: 44upx 26upx;

			.gg_scroll {
				white-space: nowrap;

				.ggs_box {
					display: inline-block;
					width: 250upx;
					height: 70upx;
					line-height: 70upx;
					border: 1px solid rgba(170, 170, 170, 1);
					border-radius: 6px;
					text-align: center;
					font-size: 28upx;
					color: #333333;
					margin-right: 30upx;
					position: relative;

					&.active {
						background: rgba(255, 236, 220, 1);
						border: 1upx solid rgba(255, 139, 45, 1);
						border-radius: 6upx;
						color: #FF8B2D;
					}

					image {
						width: 30upx;
						height: 30upx;
						position: absolute;
						right: 0;
						bottom: 0;
					}
				}
			}
		}
	}
	.product_detail{
		text-align: center;
		padding: 43upx 0;
	}
	.fixed-btn{
		width: 100%;
		height: 128upx;
		background-color: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 2;
		box-shadow:0 1upx 20upx 0 rgba(102,102,102,0.2);
		.fbflex{
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
			.fb_left{
				color: #333333;
				font-size: 28upx;
				font-weight: bold;
				margin-right: 35upx;
				text{
					color: #FB7F42;
				}
			}
			.fb_right{
				width:230upx;
				height:128upx;
				line-height: 128upx;
				font-size: 36upx;
				color: #FFFFFF;
				font-weight: bold;
				text-align: center;
				background:rgba(251,127,66,1);
			}
		}
	}
</style>
