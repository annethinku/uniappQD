<template>
	<view>
		<!-- 顶部固定栏目 -->
		<view class="top_fixed" v-show="isTop">
			<view class="infixed">
				<view class="left">
					<image :src="info.post.img?info.post.img:'../../static/images/default.png'" mode=""></image>
				</view>
				<view class="center">
					{{info.post.nickname}}
				</view>
				<view class="right" @click="showMore">
					<view class="dian"></view>
					<view class="dian"></view>
					<view class="dian"></view>
				</view>
			</view>
		</view>
		<view class="det-title">
			{{info.post.title}}
		</view>
		<view class="det-arts" id="artTop">
			<view class="arts-left">
				<image :src="info.post.img?info.post.img:'../../static/images/default.png'" mode=""></image>
			</view>
			<view class="arts-center">
				<view class="name">
					{{info.post.nickname}}
				</view>
				<view class="des">
					作者
				</view>
			</view>
			<view class="arts-right">
				{{info.post.createtime | jiequTime}}
			</view>
		</view>
		<view class="art_desc">
			<rich-text :nodes="info.post.content"></rich-text>
		</view>
		<view class="read_nums">
			阅读 {{info.post.count}}
		</view>
		<view class="hot-comment">
			<view class="hotc-title">
				<view class="line"></view>
				<view class="name">
					热门评论
				</view>
			</view>
			<view class="hotc-cont">
				<view class="cont_li" v-for="(item,index) in info.list" :key="index">
					<view class="li_left">
						<image :src="item.avatar?item.avatar:'../../static/images/default.png'" mode=""></image>
					</view>
					<view class="li_right">
						<view class="lir_top">
							<view class="t1name">
								{{item.nickname}}
							</view>
							<view class="t1img"></view>
							<view class="t1date">
								{{item.createtime | jiequTime}}
							</view>
							<view class="t1zan" @click="dianZan(item.bid,item.id,index)">
								<view class="zanicon" :class="item.active==1?'active':''"></view>
								<text>{{item.like}}</text>
							</view>
						</view>
						<view class="lir_con">
							<!-- {{item.content | imgJq}} -->
							<rich-text :nodes="item.content | imgJq"></rich-text>
						</view>
						<view class="lir_bot" @click="showCommets(item.bid,info.post.id,item.id)" v-show="item.count>0">
							<text>{{item.count}}条回复</text>
							<view class="brjian"></view>
						</view>
						<view class="lir_bot" @click="open(item.id)" v-show="item.count<=0">
							<text>回复</text>
						</view>
					</view>

				</view>
			</view>
		</view>
		<view class="vhf"></view>
		<!-- 底部固定栏 -->
		<view class="bot-fixed">
			<view class="fixed_in">
				<view class="fix_l1" @click="returnPrev"></view>
				<view class="fix_l2" @click="open">
					<input type="text" value="" placeholder="说点什么吧.." placeholder-class="pincl" />
				</view>
				<view class="fix_l3" @click="open"></view>
				<view class="fix_l4" :class="info.post.lk==1?'active':''" @click="dianZan(bid,info.post.id)"></view>
				<view class="fix_l5" @click="open2"></view>
			</view>
		</view>
		<!-- 分享弹窗 -->
		<uni-popup ref="share" type="bottom">
			<view class="share_con">
				<view class="shc_top">
					<view class="top_btn" @click="shareWX">
						<view class="img">
							<image src="../../static/images/share-btn01.png" mode="widthFix"></image>
						</view>
						<view class="name">
							微信
						</view>
					</view>
					<view class="top_btn" @click="sharePYQ">
						<view class="img">
							<image src="../../static/images/share-btn02.png" mode="widthFix"></image>
						</view>
						<view class="name">
							朋友圈
						</view>
					</view>
					<view class="top_btn" @click="shareQQ">
						<view class="img">
							<image src="../../static/images/share-btn03.png" mode="widthFix"></image>
						</view>
						<view class="name">
							QQ
						</view>
					</view>
					<view class="top_btn" @click="shareWB">
						<view class="img">
							<image src="../../static/images/share-btn04.png" mode="widthFix"></image>
						</view>
						<view class="name">
							新浪微博
						</view>
					</view>
				</view>
				<view class="shc_bot" @click="hideShare">
					取消
				</view>
			</view>
		</uni-popup>
		<!-- 投诉分享弹窗 -->
		<uni-popup ref="toushu" type="top">
			<view class="toushuC">
				<view class="tc-li">
					<navigator :url="'../jubao/jubao?pid='+info.post.id">
						投诉
					</navigator>
				</view>
				<view class="tc-li" @click="open2">
					分享
				</view>
			</view>
		</uni-popup>
		<!-- 评论详情弹窗 -->
		<uni-popup ref="comments" type="bottom">
			<view class="comment-mask" :style="'height:'+comHeig+'upx'">
				<view class="comment-top">
					<text>评论详情</text>
					<image src="../../static/images/art-close.png" mode="" @click="hideCommets"></image>
				</view>
				<scroll-view scroll-y="true" class="comment-center">
					<view class="hotc-cont">
						<block v-for="(item,index) in lisarr" :key="index">
							<view class="cont_li">
								<view class="li_left">
									<image :src="item.avatar?item.avatar:'../../static/images/default.png'" mode=""></image>
								</view>
								<view class="li_right">
									<view class="lir_top">
										<view class="t1name">
											{{item.nickname}}
										</view>
										<view class="t1zan" @click="dianZan(item.bid,item.id,index,'detail')">
											<view class="zanicon" :class="item.active==1?'active':''"></view>
											<text>{{item.like}}</text>
										</view>
									</view>
									<view class="lir_con">
										<!-- {{item.content}} -->
										<!-- <rich-text :nodes="item.content | imgJq"></rich-text> -->
										<rich-text :nodes="item.content | imgJq" style="display: inline-block;"></rich-text>
										<text style="color: #999;">{{item.ss}}</text>
									</view>
									<view class="lir_bot2">
										<text class="gray">{{item.createtime | jiequTime2}}</text>
										<text class="d">·</text>
										<navigator :url="'../jubao/jubao?pid='+item.id" style="display: inline-block;">
											举报
										</navigator><text class="d">·</text><text @click="open(item.id,item.nickname)">回复</text>
									</view>
								</view>
							</view>
							<!-- 三层回复展示 -->
							<view v-if="item.ls">
								<view class="cont_li" v-for="(item2,index2) in item.ls" :key="index2">
									<view class="li_left">
										<image :src="item2.avatar?item2.avatar:'../../static/images/default.png'" mode=""></image>
									</view>
									<view class="li_right">
										<view class="lir_top">
											<view class="t1name">
												{{item2.nickname}}
											</view>
											<view class="t1zan" @click="dianZan(item2.bid,item2.id,index2,'detail')">
												<view class="zanicon" :class="item2.active==1?'active':''"></view>
												<text>{{item2.like}}</text>
											</view>
										</view>
										<view class="lir_con">
											<!-- {{item2.content}} -->
											<rich-text :nodes="item2.content | imgJq" style="display: inline-block;"></rich-text>
											<text style="color: #999;">{{item2.ss}}</text>
										</view>
										<view class="lir_bot2">
											<text class="gray">{{item2.createtime | jiequTime2}}</text>
											<text class="d">·</text>
											<navigator :url="'../jubao/jubao?pid='+item2.id" style="display: inline-block;">
												举报
											</navigator><text class="d">·</text><text @click="open(item2.id,item2.nickname)">回复</text>
										</view>
									</view>
								</view>

							</view>
						</block>
					</view>
				</scroll-view>
				<view class="comment-bottom">
					<view class="inbor">
						<input type="text" value="" placeholder="回复:" placeholder-class="plai" @click="open(outCommentid)" />
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- 回复消息弹窗 -->
		<uni-popup ref="popup" type="bottom">
			<view class="replyK">
				<view class="rep-top">
					<view class="rep-left" @click="hideMask">
						<image src="../../static/images/art-close.png" mode="widthFix"></image>
					</view>
					<view class="rep-right" @click="comments(bid,info.post.id,inputValue)">
						发布
					</view>
				</view>
				<view class="rep-center">
					<textarea :value="inputValue" :placeholder="inCommentname?('@'+inCommentname):'说点什么吧.. '" placeholder-class="placeh"
					 :focus="textP" @input="fuzhiBq" />
					</view>
			 <view class="rep-bot">
			 	<view class="repb-left">
			 		<view class="name">
			 			常用：
			 		</view>
					<view class="emjos">
						<image src="../../static/images/emji01.png" mode="widthFix"></image>
						<image src="../../static/images/emji02.png" mode="widthFix"></image>
						<image src="../../static/images/emji03.png" mode="widthFix"></image>
						<image src="../../static/images/emji04.png" mode="widthFix"></image>
					</view>
			 	</view>
				<view class="repb-right" @click="qiehImg">
					<image src="../../static/images/art-smaile.png" mode=""></image>
				</view>
			 </view>
			 <bkhumorEmoji @emotion="getIcon" v-if="haveBq"></bkhumorEmoji>
		</view>
	</uni-popup>
	
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import bkhumorEmoji from "@/components/bkhumor-emoji/index.vue"
	import tools from '../../static/js/tools.js'
	export default {
		data() {
			return {
				desc: '',
				lisarr: [],
				textP:false,
				inputValue:'',
				haveBq:false,
				isTop:false,
				comHeig:1000,
				info:{post:{img:'',nickname:''}},
				bid:null,
				rpid:0,
				outCommentid:null,
				inCommentname:''
			};
		},
		components: {
			uniPopup,
			bkhumorEmoji
		},
		filters:{ 
			jiequTime(val){
				return tools.timestampToTime(val).split(" ")[0];
			},
			jiequTime2(val){
				let a=tools.timestampToTime(val).substr(5,val.length);
				return a;
			},
			imgJq(val){
				let n=val.replace(/\[em_/g,'<img style="position:relative;top:5px;" src="http://qidou.eezzz.cn/attachment/images/emj/bkhumor-emoji/').replace(/]/g,'.gif"/>');
				return n;
			}
		},
		mounted() {
			// 获取到屏幕高度了 但是没生效
			uni.getSystemInfo({
				success(res) {
					this.comHeig=res.windowHeight*2;
					console.log(this.comHeig);
				}
			})
			this.desc =
				'<p style="padding:15px">感觉。 但是一个女孩无论她多么孤傲、 多么特立独行孩之间的故事是最交心的。 感觉。 但是一个女孩无论多么孤傲、 多么特立独行、 多么不被常人肯定， 她也有那么几个好朋友。 两个女孩之间的故事是最交心的感觉。 但是一个女孩无论她多么孤傲、 多么特立独行多么不被常人肯定， 她也总有那么几个好朋友。 两个孩之间的故事是最交心的。</p><img width="100%" src="https://goss.veer.com/creative/vcg/veer/800water/veer-144753511.jpg"/><p style="padding:15px;">感觉。 但是一个女孩无论她多么孤傲、 多么特立独行孩之间的故事是最交心的。 感觉。</p>';
		},
		onLoad(options) {
			if(options.pid){
				this.pid=options.pid;
			}
			if(options.bid){
				this.bid=options.bid;
			}
			this.getData();
		},
		onPageScroll() {
			this.getDivtop();
			if(this.divTop<10){
				this.isTop=true;
			}else{
				this.isTop=false;
			}
		},
		methods: {
			comments(bid,pid,content){
				let _that=this;
				let token=uni.getStorageSync('token')?uni.getStorageSync('token'):'';
				let params={
					bid:bid,
					pid:pid,
					token:token,
					rpid:_that.rpid,
					content:content
				};
				tools.myRequest('api.sns.posts.reply', params, 'POST').then(res => {
					// console.log(res);
				    if(res.status==1){
					  _that.info.list=res.result.list;
					  _that.hideMask();
					  if(_that.outCommentid){
						  // 如果是内层回复 更新内层数据
						  _that.showCommets(bid,pid,_that.outCommentid);
					  }else{
						  uni.pageScrollTo({
						     scrollTop: 99999999999
						  })
					  }
					
					}else{
						uni.showToast({
							icon:'none',
							title:res.result.message
						})
					}
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			},
			dianZan(bid,pid,index,str){
				let _that=this;
				let token=uni.getStorageSync('token')?uni.getStorageSync('token'):'';
				let params={
					bid:bid,
					pid:pid,
					token:token
				};
				uni.showToast({
					icon:'loading'
				})
				tools.myRequest('api.sns.posts.like', params, 'POST').then(res => {
					uni.hideToast();
					// console.log(res);
				    if(res.status==1){
						if(index || index==0){
							// 评论点赞
							if(res.result.isgood==1){//点赞
							   if(str=='detail'){//评论详情弹窗里的点赞
								   _that.lisarr[index].active=1;
								   _that.lisarr[index].like=res.result.good;
							   }else{
								   _that.info.list[index].active=1;
								  	_that.info.list[index].like=res.result.good;
							   }
							}else{//取消点赞
								if(str=='detail'){//评论详情弹窗里的点赞
										_that.lisarr[index].active=0;
										_that.lisarr[index].like=res.result.good;
								}else{
										_that.info.list[index].active=0;
										_that.info.list[index].like=res.result.good;
								}
							}
						}else{
							// 文章点赞
							if(res.result.isgood==1){//点赞
								_that.info.post.lk=1;
							}else{//取消点赞
								_that.info.post.lk=0;
							}
						}
					}else{
						uni.showToast({
							icon:'none',
							title:res.result.message
						})
					}
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			},
			getData(){
				let _that=this;
				let token=uni.getStorageSync('token')?uni.getStorageSync('token'):'';
				uni.showToast({
					icon:'loading'
				});
				let params={
					bid: _that.bid,
					pid:_that.pid,
					token:token
				};
				tools.myRequest('api.sns.posts', params, 'POST').then(res => {
					// console.log(res);
					uni.hideToast();
				    if(res.status==1){
						_that.info=res.result;
					}else{
						uni.showToast({
							icon:'none',
							title:res.result.message
						})
					}
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			},
			// 显示评论详情弹窗
			showCommets(bid,pid,status){
			  this.$refs.comments.open();
			  let _that=this;
			  let token=uni.getStorageSync('token')?uni.getStorageSync('token'):'';
			  let params={
			  	bid:bid,
			  	pid:pid,
				status:status,
			  	token:token
			  };
			  // 记录当前点开评论详情弹窗的评论id
			  _that.outCommentid=status;
			  uni.showToast({
			  	icon:'loading'
			  });
			  tools.myRequest('api.sns.posts.getlist_show', params, 'POST').then(res => {
			  	// console.log(res);
				uni.hideToast();
			      if(res.status==1){
			  	  _that.lisarr=res.result.list.list;
			  	  
			  	}else{
			  		uni.showToast({
			  			icon:'none',
			  			title:res.result.message
			  		})
			  	}
			  }).catch(error => {
			  	console.log('请求失败：');
			  	console.log(error);
			  })
			},
			// 显示回复文本框弹窗
			open(rpid,icname) {
				this.textP=true;
				this.inputValue='';
				this.haveBq=false;
				this.$refs.popup.open();
				// 回复评论记录评论id
				if(rpid){
					this.rpid=rpid;
				}
				if(icname){
					this.inCommentname=icname;
				}
			},
			open2() {
				this.$refs.share.open();
				this.$refs.toushu.close();
				this.isTop=false;
			},
			getIcon(i){
				// console.log(i)
				if(i == '[em_98]') {
					//匹配最后一个表情符号并删除。
					this.inputValue = this.inputValue.replace(/(\[[^\]]+\]|[\s\S])$/, '');
				} else {
					this.inputValue += i;
				}
			},
			hideCommets(){
				this.$refs.comments.close()
			},
			hideMask(){
				this.$refs.popup.close()
			},
			returnPrev(){
				uni.navigateBack()
			},
			qiehImg(){
				this.$emit('foc')
				if(this.haveBq){
					this.haveBq=false;
				}else{
					this.haveBq=true;
				}
			},
			hideShare(){
				this.$refs.share.close();
			},
			// 分享到微信
			shareWX(){
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 2,
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			// 分享到朋友圈
			sharePYQ(){
				uni.share({
				    provider: "weixin",
				    scene: "WXSenceTimeline",
				    type: 0,
				    href: "http://uniapp.dcloud.io/",
				    title: "uni-app分享",
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			// 分享到qq
			shareQQ(){
				uni.share({
				    provider: "qq",
				    scene: "",
				    type: 0,
				    href: "http://uniapp.dcloud.io/",
				    title: "uni-app分享",
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			// 分享到微博
			shareWB(){
				uni.share({
				    provider: "sinaweibo",
				    scene: "",
				    type: 0,
				    href: "http://uniapp.dcloud.io/",
				    title: "uni-app分享",
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			showMore(){
				this.$refs.toushu.open();
			},
			// 获取导航距离顶部的位置
			getDivtop(){
				const query = uni.createSelectorQuery().in(this);
				query.select('#artTop').boundingClientRect(data => {
				  // console.log("得到布局位置信息" + JSON.stringify(data));
				  // console.log("节点离页面顶部的距离为" + data.top);
				  this.divTop=data.top;
				}).exec();
			},
			// 文字赋值
			fuzhiBq(e){
				this.inputValue=e.detail.value;
			}
		}
	}
</script>

<style lang="scss" scoped>
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

	.det-title {
		font-size: 36upx;
		color: #333333;
		margin: 48upx 37upx 29upx 31upx;
		font-weight: bold;
	}

	.det-arts {
		margin: 0 37upx 27upx 29upx;
		display: flex;
		align-items: center;

		.arts-left {
			width: 90upx;
			height: 90upx;
			flex-shrink: 0;
			border-radius: 50%;
			overflow: hidden;
			background-color: #eee;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.arts-center {
			margin-left: 17upx;

			.name {
				font-size: 26upx;
				color: #333333;
				font-weight: bold;
			}

			.des {
				font-size: 22upx;
				color: #666666;
				margin-top: 11upx;
			}
		}

		.arts-right {
			margin-left: auto;
			font-size: 24upx;
			color: #AAAAAA;
		}
	}

	.art_desc {
		font-size: 30upx;
		color: #333333;
		padding: 0 20upx;
		line-height: 50upx!important;
		img{
			width: 100%!important;
		}
	}

	.read_nums {
		font-size: 24upx;
		color: #999999;
		padding: 25upx 36upx;
		border-bottom: 1upx rgba(127, 127, 127, 0.14) solid;
	}

	.hotc-title {
		font-size: 32upx;
		color: #333333;
		display: flex;
		align-items: center;
		margin: 37upx 0 32upx 36upx;

		.line {
			width: 6upx;
			height: 34upx;
			background-color: #FE5B3F;
			border-radius: 4upx;
			margin-right: 13upx;
		}

		.name {
			font-weight: bold;
		}
	}

	.hotc-cont {
		margin: 0 36upx;

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
					margin: 38upx 0;
				}

				.lir_bot {
					background-color: #F5F4F4;
					border-radius: 24upx;
					padding: 13upx 19upx;
					display: inline-block;
					font-size: 24upx;
					color: #999999;

					.brjian {
						width: 7upx;
						height: 17upx;
						@include bg-image('../../static/images/bbs_jian2');
						display: inline-block;
						margin-left: 12upx;
					}
				}
				.lir_bot2{
					font-size: 24upx;
					.gray{
						color: #AAAAAA;
						margin-right: 10upx;
					}
					.d{
						margin: 0 10upx;
					}
				}
			}
		}
	}

	.bot-fixed {
		width: 100%;
		height: 98upx;
		background-color: #F4F4F4;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 2;

		.fixed_in {
			height: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 37upx 0 32upx;

			.fix_l1 {
				width: 20upx;
				height: 35upx;
				@include bg-image('../../static/images/bbs_jian');
			}

			.fix_l2 {
				width: 340upx;
				height: 60upx;
				background-color: #E5E5E5;
				border-radius: 30upx;
				font-size: 24upx;
				color: #333;

				input {
					height: 100%;
					padding: 0 36upx;
				}

				.pincl {
					font-size: 24upx;
					color: #999999;
				}
			}

			.fix_l3 {
				width: 41upx;
				height: 35upx;
				@include bg-image('../../static/images/bbs-comment');
			}

			.fix_l4 {
				width: 40upx;
				height: 36upx;
				@include bg-image('../../static/images/bbs-love');
				&.active{
					@include bg-image('../../static/images/bbs-loveOn');
				}
			}

			.fix_l5 {
				width: 38upx;
				height: 37upx;
				@include bg-image('../../static/images/bbs-share');
			}
		}
	}

	.vhf {
		height: 98upx;
	}
	.replyK{
		background-color: #FFFFFF;
		border-top-left-radius: 22upx;
		border-top-right-radius: 22upx;
		padding: 21upx 23upx;
		.rep-top{
			margin-bottom: 28upx;
			display: flex;
			justify-content: space-between;
			.rep-left{
				width: 40upx;
				height: 40upx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.rep-right{
				font-size: 30upx;
				color: #666666;
			}
			
		}
		.rep-center{
			height: 138upx;
			background-color: #F9F9F8;
			border-radius: 22upx;
			textarea{
				width: 100%;
				padding: 23upx 25upx;
				font-size: 30upx;
				box-sizing: border-box;
				outline: none;
			}
			.placeh{
				font-size: 30upx;
				color: #B7B7B7;
			}
		}
		.rep-bot{
			margin: 42upx 42upx 25upx 22upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.repb-left{
			height: 60upx;
			border-radius: 30upx;
			background-color: #F9F9F8;
			padding: 16upx 24upx 0;
			display: flex;
			.name{
				font-size: 30upx;
				color: #666;
			}
			.emjos{
				image{
					width: 42upx;
					height: 42upx;
					margin-right: 28upx;
					&:last-child{
						margin-right: 0;
					}
				}
			}
		}
		.repb-right{
			width: 44upx;
			height: 44upx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.share_con{
		background-color: #F4F4F4;
		border-top-left-radius: 22upx;
		border-top-right-radius: 22upx;
		padding: 65upx 0 0;
		.shc_top{
			display: flex;
			.top_btn{
				width: 25%;
				text-align: center;
				.img{
					width: 105upx;
					height: 105upx;
					margin: 0 auto;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.name{
					font-size: 24upx;
					color: #666666;
					margin-top: 30upx;
				}
			}
		
		}
		.shc_bot{
			background-color: #FFFFFF;
			font-size: 36upx;
			color: #666666;
			text-align: center;
			padding: 32upx 0;
			margin-top: 36upx;
		}
	}
	.top_fixed{
		width: 100%;
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 111;
		.infixed{
			display: flex;
			align-items: center;
			padding: 14upx 32upx 14upx 27upx;
			.left{
				width: 54upx;
				height: 54upx;
				border-radius: 50%;
				overflow: hidden;
				background-color: #EEEEEE;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.center{
				font-size: 24upx;
				color: #333333;
				margin-left: 22upx;
			}
			.right{
				margin-left: auto;
				display: flex;
				.dian{
					width: 8upx;
					height: 8upx;
					background-color: #333333;
					border-radius: 50%;
					margin-left: 10upx;
				}
			}
		
		}
	}
	.toushuC{
		width: 150upx;
		background-color: #FFFFFF;
		border-radius: 12upx;
		position: absolute;
		top: 100upx;
		right: 20upx;
		.tc-li{
			font-size: 28upx;
			color: #333333;
			border-bottom: 1upx #EEEEEE solid;
			padding: 30upx 0;
			text-align: center;
		}
	}
	.comment-mask{
		width: 100%;
		background-color: #FFFFFF;
		border-top-left-radius: 40upx;
		border-top-right-radius: 40upx;
		.comment-top{
			width: 100%;
			height: 98upx;
			line-height: 98upx;
			text-align: center;
			font-size: 30upx;
			color: #333333;
			font-weight: bold;
			position: absolute;
			top: 0;
			left: 0;
			image{
				width: 40upx;
				height: 40upx;
				position: absolute;
				top:30upx;
				right: 30upx;
			}
		}
		.comment-center{
			width: 100%;
			height: auto;
			position: absolute;
			top: 98upx;
			bottom: 98upx;
		}
		.comment-bottom{
			width: 100%;
			height: 98upx;
			background-color: #F4F4F4;
			position: absolute;
			bottom: 0;
			left: 0;
			.inbor{
				height: 60upx;
				margin: 19upx 45upx 0;
				border-radius: 30upx;
				background: #E5E5E5;
				input{
					padding: 0 38upx;
					width: 100%;
					height: 100%;
					box-sizing: border-box;
					font-size: 24upx;
				}
				.plai{
					color: #999999;
				}
			}
		}
	}
</style>
