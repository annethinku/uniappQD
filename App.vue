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
   
</style>
