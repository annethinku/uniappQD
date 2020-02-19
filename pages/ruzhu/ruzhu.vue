<template>
	<view>
		<uni-nav-bar  left-icon="back" @clickLeft="returnTop" :status-bar="true" :fixed="true"></uni-nav-bar>
		<view class="rz_top1">
			<!-- <image src="../../static/images/bbs_jian@2x.png" mode="widthFix" class="jt" @click="returnTop"></image> -->
			<image src="../../static/images/ruzhu_bigimg.png" mode="widthFix" class="bg"></image>
		</view>
		<view class="bigBG">
			<view class="btns">
				<navigator url="../ruzhuNeed/ruzhuNeed" hover-class="none">
					<image src="../../static/images/ruzhu_btn.png" mode="widthFix"></image>
				</navigator>
			</view>
			<view class="common_color">
				<view class="common_jian leftp">
					<image src="../../static/images/ruzhu_leftGou.png" mode=""></image>
				</view>
				<view class="common_jian rightp">
					<image src="../../static/images/ruzhu_rightGou.png" mode=""></image>
				</view>
				<view class="common_title">
					<view class="line"></view>
					<view class="name">入驻优势</view>
					<view class="line"></view>
				</view>
				<view class="youshi">
					<view class="ys_lis">
						<view class="ys_image">
							<image src="../../static/images/ruzhu_ysicon01.png" mode="aspectFit"></image>
						</view>
						<view class="ys_fonts">
							<view class="orange">
								[ 百万级流量曝光 ]
							</view>
							<view class="desc">
								让附近的人第一时间找到您的店铺
							</view>
						</view>
					</view>
					<view class="ys_lis">
						<view class="ys_fonts">
							<view class="orange">
								[ 款项T+1结算 ]
							</view>
							<view class="desc">
								款项次日到账灵活周转资金
							</view>
						</view>
						<view class="ys_image">
							<image src="../../static/images/ruzhu_ysicon02.png" mode="aspectFit"></image>
						</view>
					</view>
					<view class="ys_lis">
						<view class="ys_image">
							<image src="../../static/images/ruzhu_ysicon03.png" mode="aspectFit"></image>
						</view>
						<view class="ys_fonts">
							<view class="orange">
								[ 卷、团 促销工具]
							</view>
							<view class="desc">
								留住回头客提升淡季交易额
							</view>
						</view>
					</view>
					<view class="ys_lis">
						<view class="ys_fonts">
							<view class="orange">
								[ 费率更低 ]
							</view>
							<view class="desc">
								手机端自助上单限时享更低费率
							</view>
						</view>
						<view class="ys_image">
							<image src="../../static/images/ruzhu_ysicon04.png" mode="aspectFit"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="common_color">
				<view class="common_jian leftp">
					<image src="../../static/images/ruzhu_leftGou.png" mode=""></image>
				</view>
				<view class="common_jian rightp">
					<image src="../../static/images/ruzhu_rightGou.png" mode=""></image>
				</view>
				<view class="common_title">
					<view class="line"></view>
					<view class="name">入驻步骤</view>
					<view class="line"></view>
				</view>
				<view class="rz_buzhou">
					<view class="buzhouli">
						<image src="../../static/images/ruzhu_bzicon01.png" mode="aspectFit"></image>
						<view class="orange">
							账号注册
						</view>
						<view class="desc">
							输入您的手机号完成注册。
						</view>
					</view>
					<view class="buzhouli">
						<image src="../../static/images/ruzhu_bzicon02.png" mode="aspectFit"></image>
						<view class="orange">
							商户入驻
						</view>
						<view class="desc">
							点击个人中心-其他服务-商家入驻
						</view>
					</view>

					<view class="buzhouli">
						<image src="../../static/images/ruzhu_bzicon03.png" mode="aspectFit"></image>
						<view class="orange">
							提交资质，1-3个工作日反馈
						</view>
						<view class="desc">
							输入您的身份证信息、上传身份证正反面照片
							手持营业执照照片局办理营业执照相关资质
						</view>
					</view>

					<view class="buzhouli">
						<image src="../../static/images/ruzhu_bzicon04.png" mode="aspectFit"></image>
						<view class="orange">
							入驻成功
						</view>
						<view class="desc">
							恭喜您入驻成功，祝您开业大吉！
						</view>
					</view>

				</view>
			</view>
			<view class="common_color">
				<view class="common_jian leftp">
					<image src="../../static/images/ruzhu_leftGou.png" mode=""></image>
				</view>
				<view class="common_jian rightp">
					<image src="../../static/images/ruzhu_rightGou.png" mode=""></image>
				</view>
				<view class="common_title">
					<view class="line"></view>
					<view class="name">入驻须知</view>
					<view class="line"></view>
				</view>
				<view class="ruzhu_xuzhi">
					<view class="xuzhili">
						<view class="title">
							1、加入奇豆需要那些条件
						</view>
						<view class="desc">
							输入您的身份证信息、上传身份证正反面照片
							手持营业执照照片局办理营业执照相关资质
						</view>
					</view>
					<view class="xuzhili">
						<view class="title">
							2、加入奇豆需要缴纳相关费用吗？
						</view>
						<view class="desc">
							输入您的身份证信息、上传身份证正反面照片
							手持营业执照照片局办理营业执照相关资质
						</view>
					</view>

					<view class="xuzhili">
						<view class="title">
							3、费率是多少
						</view>
						<view class="desc">
							输入您的身份证信息、上传身份证正反面照片
							手持营业执照照片局办理营业执照相关资质
						</view>
					</view>

					<view class="xuzhili">
						<view class="title">
							4、提交申请后，多久能得到答复？
						</view>
						<view class="desc">
							输入您的身份证信息、上传身份证正反面照片
							手持营业执照照片局办理营业执照相关资质
						</view>
					</view>

					<view class="xuzhili">
						<view class="title">
							5、如何结算？
						</view>
						<view class="desc">
							输入您的身份证信息、上传身份证正反面照片
							手持营业执照照片局办理营业执照相关资质
						</view>
					</view>

					<view class="xuzhili">
						<view class="title">
							6、遇到问题如何联系我们？
						</view>
						<view class="desc">
							输入您的身份证信息、上传身份证正反面照片
							手持营业执照照片局办理营业执照相关资质
						</view>
					</view>

				</view>
			</view>
		</view>
		<view class="ruz_btn">
			立即入驻
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {

			};
		},
		components:{
			uniNavBar
		},
		methods:{
			returnTop(){
				console.log('ss')
				uni.navigateBack({});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.rz_top1 {
		position: relative;

		image.bg {
			width: 100%;
			vertical-align: text-bottom;
		}

		image.jt {
			width: 20upx;
			height: 35upx;
			position: absolute;
			left: 23upx;
			top: 25upx;
			z-index: 11;
		}
	}

	.bigBG {
		background-color: rgb(255, 247, 234);

		.btns {
			padding: 80upx 28upx;

			image {
				width: 100%;
			}
		}

		.common_color {
			background-color: #FFFFFF;
			border-radius: 20upx;
			border: 6upx #fbf6f1 solid;
			position: relative;
			padding: 50upx 30upx 0;
			margin: 0 23upx 60upx;
			box-shadow: 0 0 20upx rgba(0, 0, 0, 0.1);

			.common_jian {
				width: 33upx;
				height: 73upx;
				position: absolute;
				top: -30upx;

				&.leftp {
					left: 40upx;
				}

				&.rightp {
					right: 40upx;
				}

				image {
					width: 100%;
					height: 100%;
				}
			}

			.common_title {
				display: flex;
				justify-content: center;
				align-items: center;

				.line {
					width: 42upx;
					height: 6upx;
					background: rgba(239, 149, 52, 1);
					border-radius: 2upx;
				}

				.name {
					font-size: 36upx;
					color: #333333;
					font-weight: bold;
					margin: 0 70upx;
				}
			}

			.youshi {
				margin-top: 89upx;

				.ys_lis {
					margin-bottom: 80upx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.ys_image {
						flex: 1;
						width: 141upx;
						height: 107upx;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.ys_fonts {
						flex: 1;
						text-align: center;

						.orange {
							font-size: 30upx;
							color: #E5883F;
							font-weight: bold;
						}

						.desc {
							width: 230upx;
							font-size: 28upx;
							color: #333333;
							margin: 21upx auto 0;
							text-align: left;
						}
					}
				}
			}

			.rz_buzhou {
				margin-top: 63upx;

				.buzhouli {
					text-align: center;
					margin-bottom: 74upx;

					image {
						width: 157upx;
						height: 157upx;
					}

					.orange {
						font-size: 30upx;
						color: #E5883F;
						font-weight: bold;
						margin-top: 22upx;
					}

					.desc {
						width: 520upx;
						font-size: 26upx;
						color: #333333;
						margin: 16upx auto 0;
					}
				}
			}

			.ruzhu_xuzhi {
				margin-top: 67upx;

				.xuzhili {
					margin-bottom: 37upx;

					.title {
						font-weight: bold;
						font-size: 28upx;
						color: #333333;
					}

					.desc {
						width: 520upx;
						font-size: 26upx;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						line-height: 40upx;
						margin-left: 44upx;
						margin-top: 26upx;
					}
				}
			}
		}
	
	}
	.ruz_btn {
		margin: 43upx 80upx 44upx;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		background: linear-gradient(0deg, rgba(255, 106, 52, 1), rgba(252, 134, 63, 1));
		border-radius: 50upx;
		font-size: 36upx;
		color: #FFFFFF;
		font-weight: bold;
	}
</style>
