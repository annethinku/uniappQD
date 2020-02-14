<template>
	<view>
		<view class="records-list">
			<navigator url="../tixianDetail/tixianDetail" hover-class="none" v-for="(item,index) in list" :key="index">
				<view class="reco-li">
					<view class="rel-left">
						<view class="title">
							{{item.title}}
						</view>
						<view class="time">
							{{item.createtime | timeChuli}}
						</view>
					</view>
					<view class="rel-right">
						<view class="num">
							{{item.money}}
						</view>
						<view class="desc" :class="item.status!=1?'red':''">
							{{item.status==0?'审核中':(item.status==1?'提现成功':'被拒绝')}}
						</view>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import tools from '../../static/js/tools.js'
	export default {
		data() {
			return {
				list: []
			};
		},
		filters:{
			timeChuli(val){
				return tools.timestampToTime(val);
			}
		},
		mounted() {
			this.getList();
		},
		methods: {
			getList() {
				let _that = this;
				let token = uni.getStorageSync('token');
				tools.myRequest('api.member.withdrawal.record', {
					token: token
				}, 'POST').then(res => {
					// console.log(res);
					tools.warnMessage(res.status, res.result.message, function() {
						_that.list = res.result.list;
					});

				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.records-list {
		.reco-li {
			margin: 0 29upx;
			border-bottom: 1upx #EEEEEE solid;
			padding: 28upx 30upx 28upx 14upx;
			display: flex;
			justify-content: space-between;

			.rel-left {
				color: #666666;

				.title {
					font-size: 30upx;
					margin-bottom: 17upx;
				}

				.time {
					font-size: 24upx;
				}
			}

			.rel-right {
				text-align: right;

				.num {
					font-size: 30upx;
					color: #333333;
					margin-bottom: 17upx;
				}

				.desc {
					font-size: 24upx;
					color: #666666;

					&.red {
						color: #FF5842;
					}
				}
			}

		}
	}
</style>
