<template>
	<view class="outStars">
		<view class="stars" v-for="(item,index) in 5" :key="index">
			<view class="star_box" :class="index<Math.floor(score)?'active':''"></view>
		</view>
		<view class="scores">{{score}}</view>
	</view>
</template>

<script>
	export default {
		props:['score'],
		data() {
			return {
				
			};
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
	.outStars{
		display: flex;
		align-items: center;
		.stars{
			display: flex;
			align-items: center;
			.star_box{
				width: 19upx;
				height: 18upx;
				margin-right: 6upx;
				@include  bg-image('../../static/images/star_1');
				&.active{
				   @include  bg-image('../../static/images/star_1On');
				}
			}
		}
		.scores{
			font-size: 22upx;
			color: #666;
			margin-left: 12upx;
		}
	}
</style>
