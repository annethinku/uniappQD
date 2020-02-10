<template>
	<view>
		<view class="three-thumb">
			<view class="thumbbox" v-for="(item,index) in 3" :key="index" :style="'width:'+myWidth+'upx;height:'+myWidth+'upx'">
				<image src="http://a3.att.hudong.com/35/34/19300001295750130986345801104.jpg" mode=""></image>
			</view>
			<view class="rightb_nums">
				<image src="../../static/images/detail_thumb.png" mode=""></image>
			     <text>6</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['myWidth'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.three-thumb{
	display: flex;
	justify-content: space-between;
	position: relative;
	.thumbbox{
		border-radius: 6upx;
		overflow: hidden;
		margin-right: 26upx;
		&:nth-child(3){
			margin-right: 0;
		}
		image{
			width: 100%;
			height: 100%;
		}
	}
	.rightb_nums{
		width:82upx;
		height:36upx;
		line-height: 36upx;
		background:rgba(0,0,0,0.6);
		border-radius:18upx;
		position: absolute;
		right: 10upx;
		bottom: 10upx;
		color: #FFFFFF;
		font-size: 22upx;
		text-align: center;
		image{
			width: 24upx;
			height: 20upx;
			margin-right: 9upx;
			vertical-align: middle;
			position: relative;
			top: -2upx;
		}
	}
}
</style>
