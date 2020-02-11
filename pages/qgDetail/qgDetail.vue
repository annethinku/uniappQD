<template>
	<view>
		<view class="dp_top1">
			<view class="dpt1_left" @click="returnPage"></view>
			<view class="dpt1_right">
				<view class="collect active"></view>
				<view class="share" @click="showSh"></view>
				<view class="more" @click="showMore">
					<view class="dian"></view>
				</view>
			</view>
		</view>
		<view class="qg_quan">
			<view class="quan_left">
				<view class="name">
					阿斯顿餐厅代金卷
				</view>
				<view class="title">
					79元代100元 代金卷
				</view>
				<view class="price">
					￥79.00
				</view>
			</view>
			<view class="quan_right">
				<view class="time">
					周一至周日
				</view>
				<view class="btn">
					月售255
				</view>
			</view>
		</view>
		<!-- 使用规则 -->
		<view class="useRules">
			<view class="title">
				使用规则
			</view>
			<view class="desc">
				<view class="desc_li">
					不限张数  随时退  到期自动退  到店吃
					<text class="wenhao">?</text>
				</view>
				<view class="desc_li">
					 有效期：2020.1.20 至 2020.1.28 23:59 （周末、法
					定节假日通用）                    
				</view>
				<view class="desc_li">
					使用时间：09:00 - 22:00                 
				</view>
				<view class="desc_li">
					使用范围：仅适用于菜品              
				</view>
				<view class="desc_li">
					无需预约，消费高峰期可能需要排队    
				</view>
			</view>
			<view class="moreRules">
				更多规则
				<image src="../../static/images/index-up@2x.png" mode=""></image>
			</view>
		</view>
		<!-- 餐厅介绍 -->
		<view class="canting_desc">
			<view class="title">
				餐厅介绍
			</view>
			<view class="cant_con">
				<view class="cantcleft">
					<image src="" mode=""></image>
				</view>
				<view class="cantccenter">
					<view class="name">
						大小先生小碗菜
					</view>
					<my-star score="4.86"></my-star>
					<view class="dianm">
						新都七一广场店
					</view>
				</view>
				<view class="cantcright">
					<view class="ccrj">
						<image src="../../static/images/detail_rightJ.png" mode=""></image>
					</view>
					<view class="phone">
						<image src="../../static/images/order_phone.png" mode=""></image>
						<text>联系商家</text>
					</view>
				</view>
			</view>
			<view class="cant_address">
				<image src="../../static/images/detail_address2.png" mode="" class="l"></image>
				<view class="elisOne">
					距离355米   新都区七一国际广场5楼22号5楼22号大家好过分的可控硅
				</view>
				<image src="../../static/images/bbs_jian2@2x.png" mode="" class="r"></image>
			</view>
		</view>
		<view class="youh_navs">
		
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
	   <view style="height: 150upx;"> </view>
	  <!-- 底部支付等按钮 -->
	  <view class="bottom-btns">
	  	  <view class="out-flex">
	  	  	  <view class="l_price">
	  	  	  	￥79.00
	  	  	  </view>
			<!--  <view class="r_btns">
			  	去支付
			  </view> -->
			  <!-- 非第一次购买显示 -->
			  <view class="r_btns2">
			  	  <view class="btn-one black">
			  	  	  <image src="../../static/images/detail_shareM.png" mode="aspectFit"></image>
			  	      <text>分享赚￥3.12</text>
				  </view>
				  <view class="btn-one">
				  	  <image src="../../static/images/detail_money.png" mode="aspectFit"></image>
				      <text>自购省￥2.26</text>
				  </view>
			  </view>
	  	  </view>
	  </view>
	   <!-- 商家详情 更多 弹窗 -->
	   <uni-popup ref="mores" type="top">
	   	<view class="toushuC">
	   		<view class="tc-li">
	   			<navigator url="../jubao/jubao" hover-class="none" >
	   				<image src="../../static/images/detail_ricon01@2x.png" mode="aspectFit"></image> 商户报错
	   			</navigator>
	   		</view>
	   		<view class="tc-li">
	   			<navigator url="../jubao/jubao" hover-class="none" >
	   					<image src="../../static/images/detail_ricon02@2x.png" mode="aspectFit"></image> 投诉
	   			</navigator>
	   		</view>
			<view class="tc-li">
				<navigator url="../jubao/jubao" hover-class="none" >
						<image src="../../static/images/detail_ricon03@2x.png" mode="aspectFit"></image> 商家入驻
				</navigator>
			</view>
			<view class="tc-li">
				<navigator url="../messages/messages" hover-class="none" >
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
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 1000
			};
		},
		components: {
			'my-star': stars,
			 mythumb,
			 uniPopup,
			 share
		},
		computed:{
		},
		mounted(){
		},
		methods: {
			returnPage() {
				uni.navigateBack({})
			},
			showMore(){
				this.$refs.mores.open();
			},
			showSh(){
				// 调用分享子组件的方法
				this.$refs.myShare.showShare();
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

	.dp_top1 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 23upx 36upx 23upx 25upx;
		background-color: #FFFFFF;
        position: relative;
		z-index: 999;
		.dpt1_left {
			width: 19upx;
			height: 35upx;
			@include bg-image('../../static/images/bbs_jian');
		}

		.dpt1_right {
			display: flex;
			align-items: center;

			.collect {
				width: 46upx;
				height: 44upx;
				@include bg-image('../../static/images/detail_collect');
				margin-right: 33upx;
				&.active{
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
	}

	.youh_navs{
		margin: 0 23upx;
		.tuij_cai{
			background:rgba(255,255,255,1);
			box-shadow:0 1upx 20upx 0px rgba(187,187,187,0.2);
			border-radius:20upx;
			margin: 20upx 0 0;
			padding: 36upx 20upx;
			.common_title{
				display: flex;
				align-items: center;
				.title_left{
					font-size: 32upx;
					color: #333333;
					font-weight: bold;
				}
				.title_right{
					width: 12upx;
					height: 20upx;
					margin-left: auto;
					image{
						width: 100%;
						height: 100%;
						vertical-align: text-top;
					}
				}
			}
			.caic_top{
				height:300upx;
				border-radius:12upx;
				margin: 38upx 0 48upx;
				overflow: hidden;
				position: relative;
				background-color: #EEEEEE;
				image{
					width: 100%;
					height: 100%;
				}
				.caict_mask{
					width: 100%;
					padding: 20upx;
					position: absolute;
					left: 0;
					bottom: 0;
					background-color: rgba(255,255,255,0.8);
					font-size: 28upx;
					color: #333333;
					display: flex;
					justify-content: space-between;
					box-sizing: border-box;
					.price{
						font-weight: bold;
					}
				}
			}
			.caic_bot{
				display: flex;
				.cbbox{
					margin-right: 17upx;
					text-align: center;
					&:last-child{
						margin-right: 0;
					}
					.cbbox_top{
						width:210upx;
						height:150upx;
						border-radius:12upx;
						overflow: hidden;
						image{
							width: 100%;
							height: 100%;
						}
					}
					.name{
						font-size: 26upx;
						color: #333333;
						margin-top: 23upx;
					}
				}
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
								&.active{
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
	.other_sj{
		margin: 37upx 23upx 16upx;
		.title{
			font-size: 32upx;
			font-weight: bold;
			color: #333333;
			margin-left: 17upx;
		}
	}
	.toushuC{
		width: 259upx;
		height: 453upx;
		@include bg-image('../../static/images/detail_wbg');
		position: absolute;
		top: 80upx;
		right: 0;
		line-height: 27upx;
		.tc-li{
			width: 75%;
			margin: 0 auto;
			font-size: 26upx;
			color: #333333;
			border-bottom: 1upx #EAEAEA solid;
			padding: 20upx 0 20upx 10upx;
			box-sizing: border-box;
			position: relative;
			&:first-child{
				padding-top: 60upx;
			}
			&:last-child{
				border-bottom: none;
			}
			image{
				width: 36upx;
				height: 36upx;
				margin-right: 17upx;
				vertical-align: middle;
				position: relative;
				top: -4upx;
			}
			.dian{
				width:16upx;
				height:16upx;
				background:rgba(255,0,21,1);
				border:1upx solid rgba(255,255,255,1);
				border-radius:50%;
				position: absolute;
				left: 34upx;
				top: 10upx;
			}
		}
	}
	.qg_quan{
		width: auto;
		height: 200upx;
		@include bg-image('../../static/images/detail_quanbg');
		margin: 20upx 23upx 0;
		display: flex;
		align-items: center;
		.quan_left{
			padding: 40upx 20upx;
			color: #333333;
			line-height: 27upx;
			.name{
				font-size: 22upx;
			}
			.title{
				font-size: 32upx;
				font-weight: bold;
				margin-top: 29upx;
			}
			.price{
				font-size: 30upx;
				color: #FE7639;
				margin-top: 31upx;
				font-weight: bold;
			}
		}
		.quan_right{
			margin-left: auto;
			text-align: center;
			width: 150upx;
			text-align: center;
			color: #FFFFFF;
			font-size: 24upx;
			.btn{
				display: inline-block;
				padding: 0 20upx;
				height:26upx;
				line-height: 26upx;
				background:rgba(255,238,228,1);
				border-radius:11upx;
				margin-top: 50upx;
				font-size: 18upx;
				color: #FE7338;
			}
		}
	}
	.useRules{
		background:rgba(255,255,255,1);
		box-shadow:0 1upx 20upx 0 rgba(187,187,187,0.2);
		border-radius:20upx;
		margin: 20upx 23upx 0;
		.title{
			font-size: 32upx;
			color: #333333;
			font-weight: bold;
			padding: 27upx 0 38upx 20upx;
		}
		.desc{
			font-size: 28upx;
			color: #333333;
			line-height: 44upx;
			.desc_li{
				margin-bottom: 20upx;
				padding: 0 22upx;
				.wenhao{
					width:26upx;
					height:26upx;
					line-height: 26upx;
					border:1upx solid rgba(51,51,51,1);
					border-radius:50%;
					font-size: 24upx;
					text-align: center;
					margin-left: 28upx;
					display: inline-block;
				}
			}
		}
		.moreRules{
			border:1upx solid rgba(238,238,238,1);
			padding: 26upx 29upx;
			font-size: 28upx;
			color: #333333;
			text-align: right;
			image{
				width: 20upx;
				height: 12upx;
				margin-left: 21upx;
				vertical-align: middle;
			}
		}
	}
	.canting_desc{
		background:rgba(255,255,255,1);
		box-shadow:0 1upx 20upx 0 rgba(187,187,187,0.2);
		border-radius:20upx;
		margin: 20upx 23upx 0;
		.title{
			font-size: 32upx;
			color: #333333;
			font-weight: bold;
			padding: 34upx 19upx;
		}
		.cant_con{
			padding: 0 21upx;
			display: flex;
			.cantcleft{
				width:150upx;
				height:150upx;
				border-radius:6upx;
				overflow: hidden;
				background-color: #EEEEEE;
				flex-shrink: 0;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.cantccenter{
				margin-left: 26upx;
				.name{
					font-size: 30upx;
					color: #333333;
					font-weight: bold;
					margin-bottom: 20upx;
				}
				.dianm{
					font-size: 22upx;
					color: #666;
					margin-top: 21upx;
				}
			}
			.cantcright{
				margin-left: auto;
				.ccrj{
					width: 160upx;
					text-align: right;
					margin-bottom: 65upx;
					image{
						width: 12upx;
						height: 20upx;
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
			}
		}
		.cant_address{
			width: 100%;
			border:1upx solid rgba(238,238,238,1);
			padding: 25upx 18upx;
			font-size: 26upx;
			color: #A4A4A4;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			.l{
				width: 17upx;
				height: 25upx;
				margin-right: 16upx;
				flex-shrink: 0;
			}
			.r{
				width: 12upx;
				height: 20upx;
				margin-left: auto;
				flex-shrink: 0;
			}
		}
	}
	.bottom-btns{
		width: 100%;
		height: 128upx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		box-shadow:0 -1upx 20upx 0 rgba(102,102,102,0.2);
		.out-flex{
			height: 100%;
			padding: 0 23upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.l_price{
				font-size: 36upx;
				color: #FE7639;
				font-weight: bold;
			}
			.r_btns{
				width:260upx;
				height:84upx;
				line-height: 84upx;
				text-align: center;
				background:linear-gradient(90deg,rgba(252,136,64,1),rgba(255,103,51,1));
				border-radius:42upx;
				font-size: 32upx;
				font-weight: bold;
				color: #FFFFFF;
			}
			.r_btns2{
				width:524upx;
				height:84upx;
				line-height: 84upx;
				display: flex;
				align-items: center;
				overflow: hidden;
				background:linear-gradient(90deg,rgba(252,136,64,1),rgba(255,103,51,1));
				border-radius:42upx;
				text-align: center;
				.btn-one{
					width: 50%;
					height: 100%;
					font-size: 28upx;
					color: #FFFFFF;
					&.black{
						background-color: #313131;
					}
					image{
						width: 30upx;
						height: 30upx;
						margin-right: 12upx;
						vertical-align: middle;
					}
				}
			}
		}
	}
</style>
