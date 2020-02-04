<template>
	<view>
		<view class="messbox">
			<view class="title">
				消息列表
			</view>
			<view class="contents">
				<uni-swipe-action>
					<uni-swipe-action-item :options="options" @click="onClick($event,index)" v-for="(item,index) in messages" :key="index">
						<navigator :url="'../messageList/messageList?title='+item.title" hover-class="none">
							<view class="con_lis" v-if="!item.delete">
								<view class="lis_left">
									<image :src="item.icon" mode=""></image>
									<view class="red" v-show="item.new">{{item.num}}</view>
								</view>
								<view class="lis_right">
									<view class="r_title">
										<view class="rt_left">
											{{item.title}}
										</view>
										<view class="rt_right">
											{{item.time}}
										</view>
									</view>
									<view class="r_desc">
										{{item.desc}}
									</view>
								</view>
							</view>
						</navigator>
					</uni-swipe-action-item>
				</uni-swipe-action>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		data() {
			return {
				messages:[{
					icon:'../../static/images/mess_icon01.png',
					title:'服务通知',
					desc:'	您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请',
					num:12,
					time:'2小时前',
					new:true
				},{
					icon:'../../static/images/mess_icon02.png',
					title:'账户通知',
					desc:'	您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请',
					num:12,
					time:'3天前',
					new:true
				},{
					icon:'../../static/images/mess_icon03.png',
					title:'订单交易',
					desc:'	您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请',
					num:12,
					time:'2019-5-2',
					new:true
				},{
					icon:'../../static/images/mess_icon04.png',
					title:'奇豆客服',
					desc:'	您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请您已成功开通银豆永久VIP服务，详情请',
					num:12,
					time:'2019-1-2',
					new:true
				}],
				options: [{
					text: '标记已读',
					style: {
						backgroundColor: '#FFA13C'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#F15E5E'
					}
				}]
			};
		},
		components: {
			uniSwipeAction,
			uniSwipeActionItem
		},
		methods: {
			onClick(e,index) {
				console.log('当前点击的是第' + e.index + '个按钮，点击内容是' + e.content.text)
				if(e.content.text=='删除'){
					// this.messages[index].delete=true;
					this.$set(this.messages[index],'delete',true);
				}else{
					// 标记已读
					// this.messages[index].new=false;
					this.$set(this.messages[index],'new',false);
				}
			},
			change(open) {
				console.log('当前开启状态：' + open)
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F8F9F7;
	}

	.messbox {
		background-color: #FFFFFF;
		margin-top: 19upx;

		.title {
			padding: 25upx 45upx;
			border-bottom: 1upx #EEEEEE solid;
			font-size: 28upx;
			color: #333333;
			font-weight: bold;
		}

		.contents {
			.con_lis {
				padding: 36upx 43upx;
				display: flex;

				.lis_left {
					width: 107upx;
					height: 107upx;
					position: relative;
					flex-shrink: 0;

					image {
						width: 100%;
						height: 100%;
					}

					.red {
						width: 30upx;
						height: 30upx;
						line-height: 30upx;
						border-radius: 50%;
						position: absolute;
						top: -15upx;
						right: -15upx;
						text-align: center;
						color: #FFFFFF;
						font-size: 18upx;
						background-color: #F15A5A;
						border: 1upx #FFFFFF solid;
					}
				}

				.lis_right {
					height: 100%;
					margin-left: 40upx;

					.r_title {
						display: flex;
						justify-content: space-between;
						align-items: flex-end;

						.rt_left {
							font-size: 30upx;
							color: #333333;
							font-weight: bold;
						}

						.rt_right {
							font-size: 26upx;
							color: #AAAAAA;
						}
					}

					.r_desc {
						width: 520upx;
						flex: 1;
						font-size: 26upx;
						color: #AAAAAA;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						margin-top: 30upx;
					}
				}
			}
		}
	}
</style>
