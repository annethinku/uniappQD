<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			returnPage(){
				uni.navigateBack({});
			}
		}
	}
</script>
 
<style lang="scss">
	// 每个页面公共css 
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
   .input-holder{
	   font-size: 26upx;
	   color: #C6C6C6;
   }
   .tabH{
	   width: 100%;
	   height: 100upx;
   }
   .elisOne{
	  white-space:nowrap;
	  text-overflow:ellipsis;
	  -webkit-text-overflow:ellipsis;
	  overflow:hidden;
   }
   .elisTwo{
	   display: -webkit-box;
	   text-overflow: ellipsis;
	   overflow: hidden;
	   -webkit-line-clamp: 2;
	   -webkit-box-orient: vertical;
   }
   // 商家列表
   .list_contents {
   	margin: 0 22upx;
   
   	.cont_li {
   		background-color: #FFFFFF;
   		padding: 21upx 19upx 30upx 17upx;
   		box-shadow: 0 1upx 20upx 0 rgba(187, 187, 187, 0.2);
   		border-radius: 6upx;
   		display: flex;
   		margin-top: 20upx;
   
   		.cl_left {
   			width: 172upx;
   			height: 172upx;
   			flex-shrink: 0;
   			position: relative;
   
   			.thumb {
   				width: 172upx;
   				height: 172upx;
   				border-radius: 6upx;
   				overflow: hidden;
   				background-color: #EEEEEE;
   
   				image {
   					width: 100%;
   					height: 100%;
   				}
   			}
   
   			.pinpai {
   				width: 72upx;
   				height: 35upx;
   				@include bg-image('static/images/il_pinpai');
   				position: absolute;
   				top: 0;
   				left: 0;
   			}
   
   			.xiuxi {
   				width: 82upx;
   				height: 36upx;
   				line-height: 36upx;
   				background: rgba(255, 255, 255, 1);
   				box-shadow: 0 1upx 10upx 0 rgba(51, 51, 51, 0.1);
   				border-radius: 18upx;
   				font-size: 20upx;
   				color: #666666;
   				text-align: center;
   				position: absolute;
   				bottom: -18upx;
   				left: 50%;
   				margin-left: -41upx;
   			}
   		}
   
   		.cl_right {
   			flex: 1;
   			line-height: 27upx;
   			margin-left: 29upx;
   
   			.clr_title {
   				font-size: 30upx;
   				color: #333333;
   				font-weight: bold;
   			}
   
   			.clr_pos {
   				display: flex;
   				align-items: center;
   				margin-top: 20upx;
   
   				.pricePer {
   					font-size: 22upx;
   					color: #666666;
   					margin-left: 20upx;
   				}
   
   				.pos {
   					margin-left: auto;
   					font-size: 22upx;
   					color: #666666;
   				}
   			}
   
   			.clr_name {
   				display: flex;
   				align-items: center;
   				justify-content: space-between;
   				margin-top: 20upx;
   
   				.name_l {
   					font-size: 22upx;
   					color: #666666;
   				}
   
   				.name_xl {
   					font-size: 22upx;
   					color: #FD773A;
   				}
   			}
   
   			.clr_paihang {
   				margin-top: 20upx;
   
   				text {
   					font-size: 22upx;
   					color: #FD773A;
   				}
   
   				.bor {
   					color: rgba(253, 119, 58, 1);
   					border: 1upx solid rgba(255, 200, 176, 1);
   					border-radius: 6upx;
   					padding: 7upx;
   					margin-right: 12upx;
   					font-weight: bold;
   				}
   			}
   
   			.clr_quan {
   				margin-top: 20upx;
   				font-size: 22upx;
   				color: #666;
   
   				image {
   					width: 24upx;
   					height: 24upx;
   					margin-right: 18upx;
   				}
   
   				text {
   					width: 90%;
   					display: inline-block;
   				}
   			}
   		}
   	}
   }
   // 支付按钮等公用按钮样式
   .compay-btn{
   	width:auto;
   	height:84upx;
   	line-height: 84upx;
   	background:linear-gradient(90deg,rgba(252,136,64,1),rgba(255,103,51,1));
   	border-radius:42upx;
   	margin:0 33upx;
   	font-size: 32upx;
   	color: #FFFFFF;
   	font-weight: bold;
   	text-align: center;
   }
   // 登录样式
   .login{
   	
   	.login_title{
   		font-size: 42upx;
   		color: #444444;
   		font-weight: bold;
   		margin: 77upx 0 170upx 46upx;
		.desc{
			font-size: 24upx;
			color: #999999;
			margin-top: 23upx;
		}
   	}
   	.login_phone{
   		margin: 0 36upx 35upx;
   		padding-bottom: 39upx;
   		border-bottom: 1upx #E6E6E6 solid;
   		display: flex;
   		align-items: center;
		.phead{
			image{
				width: 33upx;
				height: 39upx;
			}
		}
   		.phead,.inputs{
   			font-size: 30upx;
   			color: #666666;
   			font-weight: bold;
   		}
   		.inputs{
   			flex: 1;
   			margin: 0 40upx;
   			font-weight: normal;
   		}
		.close{
			image{
				width: 32upx;
				height: 33upx;
			}
		}
   	}
   	.gray_tis{
   		font-size: 26upx;
   		color: #999999;
   		margin-top: 29upx;
   		text-align: center;
   		text{
   			color: #FE7238;
   		}
   	}
   	.orange-btn{
   		height:90upx;
   		line-height: 90upx;
   		margin: 84upx 50upx 0;
   		background:linear-gradient(90deg,rgba(252,136,64,1),rgba(255,103,51,1));
   		border-radius:45upx;
   		font-size: 36upx;
   		color: #FFFFFF;
   		font-weight: bold;
   		text-align: center;
   	}
   	.other-contorl{
   		display: flex;
   		align-items: center;
   		justify-content: center;
   		margin-top: 52upx;
   		font-size: 22upx;
   		color: #444444;
   		.line{
   			width:1upx;
   			height:26upx;
   			border-left:1upx solid rgba(141,141,141,1);
   			margin: 0 107upx;
   		}
   	}
   	.other-login{
   		text-align: center;
   		margin: 200upx 0 60upx;
   		.name{
   			font-size: 22upx;
   			color: #888888;
   		}
   		.icon{
   			margin-top: 34upx;
   			image{
   				width: 72upx;
   				height: 72upx;
				vertical-align: middle;
   			}
   		}
   	}
	.yzm{
		width:150upx;
		height:50upx;
		line-height: 50upx;
		font-size: 22upx;
		color: #333333;
		background:rgba(238,238,238,1);
		border-radius:25upx;
		text-align: center;
	}
   }
   .contentPass{
   	display: flex;
   	align-items: center;
   	justify-content: space-between;
	flex: 1;
	margin: 0 40upx;
	font-weight: normal;
		input {
			width: 80%;
		}
   }
   .common_font{
	   font-size: 28upx;
	   color: #333333;
   }
</style>
