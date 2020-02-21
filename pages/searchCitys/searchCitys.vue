<template>
	<view>
		<uni-search-bar :radius="34" placeholder="输入城市首写或拼音" @confirm="enterSearch" @input="searchSS" cancelButton="none"
		 bgColor="#F8F8F8"></uni-search-bar>
		<view class="sea_con">
			<view class="sc_li" v-for="(item,index) in result" :key="index" @click="returnIndex(item)">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import tools from '../../static/js/tools.js'
	export default {
		data() {
			return {
				citys: [],
				chinaList: [],
				englishList: [],
				englishList2: [],
				result: []
			};
		},
		components: {
			uniSearchBar
		},
		mounted() {
			// 获取城市数据json
			// uni.request({
			// 	url: '../../static/js/city.json',
			// 	data: {},
			// 	header: {},
			// 	success: (res) => {
			// 		this.citys = (res.data.city);
			// 		this.citys.map((item, index) => {
			// 			item.lists.map((item2, index2) => {
			// 				this.chinaList.push(item2.name);
			// 				this.englishList.push(item2.sp);
			// 				this.englishList2.push(item2.qp);
			// 			});
			// 		});
			// 	}
			// });
			this.getCitys();
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
						_that.citys.map((item, index) => {
							item.lists.map((item2, index2) => {
								_that.chinaList.push(item2.name);
							});
						});
					});
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			},
			enterSearch(e) {
				let val = e.value;
				let _that=this;
				_that.result=[];
				_that.chinaList.map((item, index) => {
					if (item == val) {
						if(_that.result.indexOf(item)==-1){
							_that.result.unshift(item);
						}
					}
				})
			},
			searchSS(e) {
				let _that = this;
				let deaa = debounce(function() {
					let val = e.value;
					if (val) {
						_that.chinaList.map((item, index) => {
							if (item.indexOf(val) != -1) {
								if(_that.result.indexOf(item)==-1){
									_that.result.unshift(item);
								}
							}
						})
					} else {
						_that.result = [];
					}
				}, 500);
				deaa();
			},
			returnIndex(name){
				let _that=this;
				uni.setStorageSync('curPos',name);
				_that.citys.map((item, index) => {
					item.lists.map((item2, index2) => {
						if(item2.name==name){
							uni.setStorageSync('curCode',item2.code);
						}
					});
				});
				uni.navigateBack({
					delta:2
				})
				
			}
		}
	}
	// 防抖
	export function debounce(fn, delay) {
		let timer = null;
		return function() {
			let th = this;
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				fn.apply(th, arguments);
			}, delay)
		}
	}
</script>

<style lang="scss" scoped>
	.sea_con {
		margin: 20upx 69upx 0 49upx;

		.sc_li {
			font-size: 26upx;
			color: #333333;
			padding: 19upx 0 15upx 10upx;
			border-bottom: 1upx #E4E4E4 solid;
		}
	}
</style>
