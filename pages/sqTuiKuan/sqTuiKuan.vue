<template>
	<view>
		 <view class="tuik_product">
		 	<view class="tk_name">
		 		退款商品
		 	</view>
			<view class="pro_detail">
				<view class="prod_left">
					<image src="" mode=""></image>
				</view>
				<view class="prod_center">
					<view class="name">
						阿斯顿餐厅代金卷
					</view>
					<view class="desc">
						<view class="">
							订单编号： HG 8156542
						</view>
						<view class="">
							商品数量：8
						</view>
					</view>
				</view>
				<view class="prod_right">
					￥79
				</view>
			</view>
		 </view>
		 <view class="tuik_money">
		 	<view class="tkm_li">
		 		<view class="li_left">
		 			退款金额：
		 		</view>
				<view class="li_right">
					￥79
				</view>
		 	</view>
			<view class="tkm_li">
				<view class="li_left">
					退款方式：
				</view>
				<view class="li_right">
					原路返还
				</view>
			</view>
		 </view>
		 <view class="tuikz_yuany">
		 	<view class="title">
		 		退款原因
				<text>（至少填写一个）</text>
		 	</view>
			<view class="tky_cons">
				<view class="yuany_li" v-for="(item,index) in arrs" :key="index" @click="chooseMe(index)">
					<view class="name">
						{{item.name}}
					</view>
					<view class="choose" :class="item.isChoose?'active':''">
						<image src="../../static/images/pay-wgou.png" v-show="item.isChoose" ></image>
					</view>
				</view>
			</view>
		 </view>
		 <view class="detail_yy">
		 	<view class="title">
		 		详细原因
		 		<text>（可不填）</text>
		 	</view>
			<view class="textar">
				<textarea value="" placeholder="" maxlength="200" @input="fuzhid"/>
				<view class="numchange">
					{{num}}/200
				</view>
			</view>
		 </view>
		 <view class="compay-btn">
		 	申请退款
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arrs:[{name:'拍多拍错',isChoose:false},{name:'计划有变',isChoose:false},{name:'已用其他渠道支付',isChoose:false},
				{name:'店里活动更优惠',isChoose:false},{name:'联系不上店家',isChoose:false},{name:'商家营业但不接待',isChoose:false},
				{name:'去过了，不太满意',isChoose:false},{name:'买多了，买错了',isChoose:false},{name:'后悔了，不想要了',isChoose:false}],
				num:0
			};
		},
		methods:{
			chooseMe(index){
				if(this.arrs[index].isChoose){
					this.arrs[index].isChoose=false;
				}else{
					this.arrs[index].isChoose=true;
				}
			},
			fuzhid(e){
				this.num=e.detail.cursor
			}
		}
		
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #F8F9F7;
}
.tuik_product{
	background-color: #FFFFFF;
	padding: 39upx 41upx;
	margin-top: 20upx;
	.tk_name{
		font-size: 32upx;
		color: #333333;
	}
	.pro_detail{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 36upx;
		.prod_left{
			width: 130upx;
			height: 130upx;
			background-color: #EEEEEE;
			border-radius: 4upx;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.prod_center{
			margin-left: 36upx;
			.name{
				font-size: 26upx;
				color: #333333;
				margin-bottom: 30upx;
			}
			.desc{
				color: #AAAAAA;
				font-size: 24upx;
			}
		}
		.prod_right{
			font-size: 28upx;
			color: #333333;
			font-weight: bold;
		}
	}
}
.tuik_money{
	background-color: #FFFFFF;
	margin-top: 20upx;
	.tkm_li{
		border-bottom: 1upx #EEEEEE solid;
		padding: 38upx 46upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28upx;
		color: #333333;
		&:last-child{
			border-bottom: none;
		}
	}
}
.tuikz_yuany{
	margin-top: 49upx;
	.title{
		padding: 0 0 31upx 46upx;
		font-size: 32upx;
		color: #333333;
		font-weight: bold;
		text{
			font-size: 24upx;
			color: #999999;
			font-weight: normal;
		}
	}
}
.tky_cons{
	background-color: #FFFFFF;
	.yuany_li{
		padding: 30upx 0;
		margin: 0 44upx;
		border-bottom: 1upx #EEEEEE solid;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&:last-child{
			border-bottom: none;
		}
		.name{
			font-size: 30upx;
			color: #888888;
		}
		.choose{
			width:30upx;
			height:30upx;
			border:3upx solid rgba(255,150,37,1);
			border-radius:50%;
			image{
				width: 80%;
				height: 80%;
				position: relative;
				top: -14upx;
				left: 4upx;
			}
			&.active{
				background-color: #FF9625;
			}
		}
	}
}
.detail_yy{
	margin: 30upx 0 70upx;
	background-color: #FFFFFF;
	padding: 34upx 45upx;
	.title{
		font-size: 32upx;
		color: #333333;
		font-weight: bold;
		text{
			font-size: 24upx;
			color: #999999;
			font-weight: normal;
		}
	}
	.textar{
		position: relative;
		height:200upx;
		background:rgba(244,244,244,1);
		box-shadow:0 1upx 10upx 0 rgba(207,207,207,0.1);
		border-radius:30upx;
		margin-top: 23upx;
		textarea{
			padding: 20upx 20upx 60upx;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			font-size: 28upx;
			color: #333333;
		}
		.numchange{
			position: absolute;
			bottom: 23upx;
			right: 34upx;
			font-size: 24upx;
			color: #999999;
		}
	}
}
</style>
