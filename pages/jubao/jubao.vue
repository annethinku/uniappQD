<template>
	<view>
		<view class="jb_content">
			<view class="title">
				举报类别
			</view>
			<view class="options">
				<view class="options_li" :class="liOn==index?'active':''" v-for="(item,index) in contArrs" :key="index" @click="chooseCon(index)">
					<view class="li_left">
						<image src="../../static/images/jubao_gou.png" mode="" v-show="liOn==index"></image>
					</view>
					<view class="li_right">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="title">
				其他问题
			</view>
			<view class="other_con">
                  <textarea value="" placeholder="请输入你所遇到的问题，我们将尽快处理" placeholder-class="texta" @input="fuzhi"/>
			</view>
			<view class="title">
				照片截图
				<text>0/6</text>
			</view>
			<view class="upload_imgs">
				<sunui-upimg @change="getImageInfo1" :upload_auto="true" ref="upimg1" upload_count="6" url=""></sunui-upimg>
			</view>
			<view class="vh"></view>
			<view class="r-btns" @click="submitWt">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	import sunUiUpimg from '@/components/sunui-upimg/sunui-upimg.vue';
	import tools from '../../static/js/tools.js'
	export default {
		data() {
			return {
				liOn: null,
				contArrs: ['标题党', '色情低俗', '过时旧闻', '内容虚假', '内容质量差', '广告软文', '内容引起不适', '错别字、段落重复', '政治铭感', '侵权抄袭'],
				serviceArr1: [],
				content:''
			};
		},
		components:{
			'sunui-upimg': sunUiUpimg
		},
		onLoad(options) {
			let _that=this;
			// _that.$nextTick(function(){
			// 	_that.getInfo();
			// });
			if(options.pid){
				_that.pid=options.pid;
			}
			_that.getData();
		},
		mounted(){
			this.$refs.upimg1.upload_before_list = this.serviceArr1;
		},
		methods:{
			getImageInfo1(e){
				console.log(e);
			},
			chooseCon(index) {
				this.liOn = index;
			},
			async getInfo() {
				await uni.request({
					url: 'http://www.pbdpw.com/info.php',
					method: 'GET',
					data: {},
					success: res => {
						if (res.data.status == 'ok') {
							this.$refs.upimg2.upload_before_list = res.data.data;
						}
					}
				});
			},
			getData(){
				let _that=this;
				tools.myRequest('api.sns.posts.checkPost', {
					postid: _that.pid
				}, 'GET').then(res => {
					// console.log(res);
					uni.hideToast();
					if(res.status==1){
						_that.contArrs=res.result.catelist;
					}
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			},
			submitWt(){
				let _that=this;
				let token=uni.getStorageSync('token');
				if(!_that.contArrs[_that.liOn]){
					uni.showToast({
						title:'请选择投诉类别',
						icon:'none'
					})
					return false;
				}
				if(!_that.content){
					uni.showToast({
						title:'请输入投诉内容',
						icon:'none'
					})
					return false;
				}
				tools.myRequest('api.sns.posts.complain', {
					id: _that.pid,
					type:_that.contArrs[_that.liOn].id,
					content:_that.content,
					images:[],
					token:token
				}, 'GET').then(res => {
					// console.log(res);
					uni.hideToast();
					if(res.status==1){
					  uni.showToast({
					  	icon:'none',
						title:"投诉成功",
						success() {
							uni.navigateBack({});
						}
					  })	
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
			fuzhi(e){
				this.content=e.detail.value;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.jb_content {
		padding: 42upx 29upx 256upx 31upx;
		border-top: 1upx rgba(127, 127, 127, 0.08) solid;

		.title {
			color: #333333;
			font-size: 40upx;
			font-weight: bold;
			text{
				font-size: 30upx;
				color: #B7B7B7;
				font-weight: normal;
				float: right;
			}
		}

		.options {
			margin: 42upx 0 64upx;
			display: flex;
			flex-wrap: wrap;

			.options_li {
				width: 50%;
				margin-top: 30upx;
				display: flex;
				align-items: center;

				&.active {
					.li_left {
						border: 1px #F04242 solid;
					}
				}

				.li_left {
					width: 32upx;
					height: 32upx;
					border-radius: 50%;
					border: 1upx #898989 solid;
					position: relative;

					image {
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
					}
				}

				.li_right {
					color: #333333;
					font-size: 30upx;
					margin-left: 19upx;
				}
			}
		}
		.other_con{
			margin: 32upx 0 56upx;
			background-color: #F6F6F6;
			border-radius: 22upx;
			.texta{
				color: #B7B7B7;
			}
			textarea{
				padding: 32upx 27upx;
				font-size: 30upx;
				box-sizing: border-box;
			}
		}
	}
	.r-btns{
		background-color: #F04242;
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		font-size: 40upx;
		color: #FFFFFF;
		text-align: center;
		position: fixed;
		left: 0;
		bottom: 0;
	}
</style>
