<template>
	<view>
		<uni-nav-bar  title="定位选择" :status-bar="true" :fixed="true" left-icon="back" 
		background-color="#FFA446" color="#fff" @clickLeft="returnTop"></uni-nav-bar>
		<view class="address-t1">
		<!-- 	<view class="t1-one">
				<text>定位选择</text>
				<view class="rjian" @click="returnTop"></view>
			</view> -->
			<view class="t1-two">
				<navigator url="../searchCitys/searchCitys" open-type="navigate" hover-class="none">
					<view class="icon"></view>
					<text>输入城市首写或拼音</text>
				</navigator>
			</view>
			<view class="t1-three">
				<view class="t1t-left">
					<view class="icon"></view>
					<text>{{curPos}}</text>
				</view>
				<view class="t1t-right">
					当前定位
				</view>
			</view>
		</view>
		<view class="address-t2">
			<view class="icon"></view>
			<view class="title">
				热门城市
			</view>
		</view>
		<view class="address-hot">
			<view class="hotname" :class="curPos=='成都'?'active':''" @click="chooseAddress('成都',510100)">成都</view>
			<view class="hotname" :class="curPos=='北京'?'active':''" @click="chooseAddress('北京',110100)">北京</view>
			<view class="hotname" :class="curPos=='上海'?'active':''" @click="chooseAddress('上海',310000)">上海</view>
		</view>
		<view class="citys">
			<view class="city_box" v-for="(item,index) in citys" :key="index" :id="'cid'+index">
				<view class="title">
					{{item.title | upperFit}}
				</view>
				<view class="content">
					<view class="con_li" v-for="(item2,index2) in item.lists" :key="index2" @click="chooseAddress(item2.name,item2.code)">
						{{item2.name}}
					</view>
				</view>
			</view>
		</view>
		<view class="zm_fixed">
			<view class="zmf_li" v-for="(item,index) in zimuArr" :key="index" :class="index==zmIndex?'active':''" @click="zpageScroll(index)">{{item}}</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import tools from '../../static/js/tools.js'
	export default {
		data() {
			return {
				zimuArr: [],
				citys: [],
				zmIndex: 0,
				curPos: '成都'
			};
		},
		components:{
			uniNavBar
		},
		filters:{
			upperFit(val){
				return val.toUpperCase();
			}
		},
		mounted() {
			// 获取26个字母
			// for (var i = 0; i < 26; i++) {
			// 	this.zimuArr.push(String.fromCharCode((65 + i)));
			// }
			// 获取城市数据json 加了下面请求就会闪退 希望数据存到后台
			// uni.request({
			// 	url: 'http://qidou.eezzz.cn/attachment/images/emj/city.json',
			// 	data: {},
			// 	header: {},
			// 	success: (res) => {
			// 		this.citys = (res.data.city);
			// 	}
			// });
           this.getCitys();
		},
		onShow() {
			let curp = uni.getStorageSync('curPos');
			this.curPos = curp ? curp : '成都';
		},
		onPageScroll(res) {
			const query = uni.createSelectorQuery().in(this);
			query.selectAll('.city_box').boundingClientRect((res) => {
				res.map((item,index)=>{
					this.getDivtop(item.id);
				})
				
			}).exec()

		},
		methods: {
			// 获取城市数据
			getCitys(){
				let _that=this;
				tools.myRequest('api.delicacy.location',{}, '').then(res => {
					// console.log(res);
					uni.hideToast();
					tools.warnMessage(res.status,res.result.message,function(){
						_that.citys=res.result.list;
						for(let i=0;i<_that.citys.length;i++){
							_that.zimuArr.push(_that.citys[i].title.toUpperCase());
						}
						
					});
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			},
			// 返回上一页箭头
			returnTop() {
				uni.navigateBack({})
			},
			// 滚动元素
			getPos(tag, child) {
				uni.createSelectorQuery().select(tag).boundingClientRect(data => {
					uni.createSelectorQuery().select(child).boundingClientRect((res) => {
						uni.pageScrollTo({
							duration: 500,
							scrollTop: (res.top - data.top) + (580 / 2)
						})
					}).exec()
				}).exec();
			},
			// 点击字母滚动
			zpageScroll(index) {
				this.getPos('.citys', '#cid' + index);
				this.zmIndex = index;
			},
			// 选择地址
			chooseAddress(val,code) {
				this.curPos = val;
				// uni.pageScrollTo({
				//     duration:500,
				//     scrollTop:0
				// })
				uni.setStorageSync('curPos', val);
				uni.setStorageSync('curCode', code);
				this.returnTop();
			},
			// 获取元素距离顶部的位置
			getDivtop(id) {
				const query = uni.createSelectorQuery().in(this);
				query.select('#' + id).boundingClientRect(data => {
					// console.log("得到布局位置信息" + JSON.stringify(data));
					if (data.top <= 100) {
						this.zmIndex = id.replace('cid','');
					}
					
				}).exec();
			},
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

	.address-t1 {
		padding: 33upx 24upx 36upx 22upx;
		background-image: linear-gradient(top, #FFA446, #FE7F4C);

		.t1-one {
			width: 100%;
			text-align: center;
			position: relative;
			font-size: 40upx;
			color: #FFFFFF;

			.rjian {
				width: 19upx;
				height: 35upx;
				@include bg-image('../../static/images/dw-jian');
				position: absolute;
				left: 25upx;
				top: 6upx;
			}
		}

		.t1-two {
			width: auto;
			height: 80upx;
			line-height: 76upx;
			margin: 53upx 24upx 0 22upx;
			background-color: #F8F8F8;
			border-radius: 40upx;
			text-align: center;

			.icon {
				width: 24upx;
				height: 24upx;
				@include bg-image('../../static/images/dw-search');
				display: inline-block;
				margin-right: 33upx;
			}

			text {
				color: #AAAAAA;
				font-size: 26upx;
			}
		}

		.t1-three {
			margin: 58upx 45upx 0 39upx;
			color: #FFFFFF;
			display: flex;
			justify-content: space-between;

			.t1t-left {
				font-size: 26upx;

				.icon {
					width: 19upx;
					height: 25upx;
					@include bg-image('../../static/images/dw-icon');
					margin-right: 14upx;
					display: inline-block;
				}
			}

			.t1t-right {
				font-size: 22upx;
			}
		}
	}

	.address-t2 {
		margin: 31upx 0 0 46upx;
		display: flex;
		align-items: center;

		.icon {
			width: 6upx;
			height: 31upx;
			@include bg-image('../../static/images/dw-line');
			margin-right: 16upx;
		}

		.title {
			font-size: 26upx;
			color: #333333;
		}
	}

	.address-hot {
		margin: 50upx 49upx 44upx 47upx;
		display: flex;
		justify-content: space-between;

		.hotname {
			width: 174upx;
			height: 66upx;
			line-height: 66upx;
			border: 1upx #DCDCDC solid;
			border-radius: 4upx;
			text-align: center;
			font-size: 26upx;
			color: #333333;

			&.active {
				background-color: #FFAB5D;
				color: #FFFFFF;
				border: 1upx #FFAB5D solid;
			}
		}
	}

	.citys {
		margin: 0 76upx 0 49upx;

		.city_box {

			.title {
				font-size: 22upx;
				color: #999999;
				font-weight: bold;
				margin-top: 20upx;
			}

			.content {
				font-size: 26upx;
				color: #333333;

				.con_li {
					padding: 20upx 0 15upx;
					border-bottom: 1upx #E4E4E4 solid;
				}
			}
		}
	}

	.zm_fixed {
		position: fixed;
		right: 40upx;
		bottom: 24upx;
		z-index: 99;
		text-align: center;

		.zmf_li {
			font-size: 20upx;
			color: #333333;

			&.active {
				color: #FEB088;
			}
		}
	}
</style>
