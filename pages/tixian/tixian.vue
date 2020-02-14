<template>
	<view>
		<view class="tx-top">
			<view class="top-title">
				<view class="title-left" @click="returnTop"></view>
				<view class="title-right">
					<navigator url="../tixianRecords/tixianRecords" hover-class="none">
						提现记录
					</navigator>
				</view>
			</view>
			<view class="zh-yue">
				<text>账户余额 (元)</text>
				<view class="zh-nums">
					{{info.money}}
				</view>
			</view>
			<view class="white-box">
				<view class="wb-title">
					余额提现
				</view>
				<view class="wb-group">
					<view class="group-left">
						<text>￥</text>
						<input type="number" :value="money" @input="fuzhi"/>
					</view>
					<view class="group-right" @click="clickAll">全部</view>
				</view>
				<view class="wb-desc">
					手续费每笔{{info.withdrawmoney}}%手续费，提现后24小时内到账
				</view>
			</view>
		</view>
		<view class="tx-center">
			<view class="txc-lis" @click="showSorts">
				<view class="lis-left">
					收款账户
				</view>
				<view class="lis-right">
					<image src="../../static/images/wechat.png" mode="widthFix" class="img01"></image>
					<text>{{zhname}}</text>
					<image src="../../static/images/bbs_jian2@3x.png" mode="widthFix" class="img02"></image>
				</view>
			</view>
			<view class="txc-lis">
				<view class="lis-left">
					{{detailed.navname}}
				</view>
				<view class="lis-right">
					<image src="../../static/images/bbs_jian2@3x.png" mode="widthFix" class="img02"></image>
				</view>
			</view>
			<view class="txc-btn" @click="tixian">
				确认提现
			</view>
		</view>
		<view class="tx-foot">
			<navigator url="" hover-class="none">《{{explain.navname}}》</navigator>
			<navigator url="" hover-class="none">《{{privacy.navname}}》</navigator>
		</view>
		<!-- 选择收款账户弹窗 -->
		<chooseZh :info="info.type_array" ref="zhanghu" tixian="true" @getName="getName"></chooseZh>
		<!-- 输入支付密码弹窗 -->
		<myCode ref="password" isTixian="true" :money="money"></myCode>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import tools from '../../static/js/tools.js'
	import myCode from '@/components/password/password.vue'
	import chooseZh from '@/components/chooseZhanghu/chooseZhanghu.vue'
	export default {
		data() {
			return {
               info:[],
			   money:'',
			   explain:{},
			   privacy:{},
			   detailed:{},
			   zhname:'微信账户'
			};
		},
		components: {
			uniPopup,
			myCode,
			chooseZh
		},
		mounted(){
			let _that=this;
			let token=uni.getStorageSync('token');
			uni.showToast({
				icon:'loading'
			})
			tools.myRequest('api.member.withdrawal', {
				token: token
			}, '').then(res => {
				// console.log(res);
				uni.hideToast();
				tools.warnMessage(res.status,res.result.message,function(){
					_that.info=res.result;
					_that.explain=res.result.explain;
					_that.privacy=res.result.privacy;
					_that.detailed=res.result.detailed;
				});
			}).catch(error => {
				console.log('请求失败：');
				console.log(error);
			})
		},
		methods: {
			getName(name){
				this.zhname=name;
			},
			fuzhi(e){
				if(parseFloat(e.detail.value)>parseFloat(this.info.money)){
					this.money=this.info.money;	
				}else{
					this.money=e.detail.value;
				}
			},
			returnTop() {
				uni.navigateBack({});
			},
			showSorts() {
				this.$refs.zhanghu.showZhanghu();
			},
			clickAll(){
				 this.money=this.info.money;	
			},
			tixian(){
				let _that=this;
				let token=uni.getStorageSync('token');
				if(!_that.money){
					uni.showToast({
						title:"请输入提现金额",
						icon:"none"
					})
					return false;
				}
				tools.myRequest('api.member.withdrawal.cli', {
					token: token
				}, '').then(res => {
					// console.log(res);
					uni.hideToast();
					tools.warnMessage(res.status,res.result.message,function(){
						  _that.$refs.password.showCode();
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
	@mixin bg-image($url) {
		background-image: url($url + "@2x.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;

		@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
			background-image: url($url + "@3x.png");
			background-size: 100% 100%;
			background-repeat: no-repeat;
		}
	}

	.tx-top {
		padding: 34upx 25upx 0;
		background: linear-gradient(top, #FD7B5E, #FE6D4F);
		position: relative;

		.top-title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 30upx;
			color: #FFFFFF;

			.title-left {
				width: 19upx;
				height: 35upx;
				@include bg-image('../../static/images/dw-jian');
			}
		}

		.zh-yue {
			width: 300upx;
			margin: 37upx auto 0;
			color: #FFFFFF;

			text {
				font-size: 22upx;
			}

			view {
				font-size: 64upx;
				font-weight: bold;
				margin-top: 29upx;
				padding-bottom: 161upx;
			}
		}

		.white-box {
			width: 670upx;
			height: 290upx;
			background-color: #FFFFFF;
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			bottom: -200upx;
			z-index: 11;
			border-radius: 10upx;
			box-shadow: 0 1upx 24upx 0 rgba(136, 136, 136, 0.2);

			.wb-title {
				font-size: 26upx;
				color: #333333;
				padding: 29upx 0 0 106upx;
			}

			.wb-group {
				display: flex;
				margin-top: 43upx;

				.group-left {
					width: 410upx;
					margin-left: 104upx;
					flex-shrink: 0;
					border-bottom: 1upx #e5e5e5 solid;
					display: flex;
					align-items: center;
					padding-bottom: 20upx;
					color: #333333;
					font-weight: bold;

					text {
						font-size: 36upx;
					}

					input {
						font-size: 48upx;
					}
				}

				.group-right {
					width: 106upx;
					height: 49upx;
					line-height: 49upx;
					background: linear-gradient(-90deg, rgba(251, 111, 80, 1), rgba(252, 102, 81, 1));
					border-radius: 25upx;
					text-align: center;
					color: #FFFFFF;
					font-size: 28upx;
				}
			}

			.wb-desc {
				font-size: 24upx;
				color: #999999;
				text-align: center;
				margin-top: 40upx;
			}
		}
	}

	.tx-center {
		margin: 270upx 40upx 0;

		.txc-lis {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1upx #EEEEEE solid;
			padding: 27upx 0;

			.lis-left {
				font-size: 32upx;
				color: #333333;
				font-weight: bold;
			}

			.lis-right {
				image {
					vertical-align: middle;
				}

				.img01 {
					width: 33upx;
					height: 33upx;
				}

				text {
					font-size: 30upx;
					color: #666666;
					margin: 0 22upx 0 10upx;
				}

				.img02 {
					width: 12upx;
					height: 20upx;
				}
			}
		}

		.txc-btn {
			margin: 152upx 40upx 0;
			width: auto;
			height: 92upx;
			line-height: 92upx;
			background: linear-gradient(90deg, rgba(253, 123, 94, 1), rgba(253, 78, 62, 1));
			border-radius: 46upx;
			font-size: 36upx;
			color: #FFFFFF;
			text-align: center;
		}
	}

	.tx-foot {
		display: flex;
		justify-content: space-around;
		font-size: 24upx;
		color: #999999;
		margin-top: 100upx;
	}

	
</style>
