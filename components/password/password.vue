<template>
	<view>
		<uni-popup ref="password" type="bottom">
			<view class="sr_code">
				<view class="code-title">
					<text>输入支付密码</text>
					<image src="../../static/images/art-close.png" mode="" @click="hideCode"></image>
				</view>
				<view class="code_money">
					提现1300元
				</view>
				<view class="six_code">
					<view class="sixbox" v-for="(item,index) in 6" :key="index">
						<input type="number" value="":focus="index==curindex?true:false" maxlength="1" @input="fuzhiC(index)"/>
					</view>
				</view>
				<view class="forget_code">
					忘记密码？
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				curindex:0
			};
		},
		components:{
			uniPopup
		},
		methods:{
			showCode(){
				this.$refs.password.open();
			},
			hideCode(){
				this.$refs.password.close();
			},
			fuzhiC(i){
				this.curindex=i;
			}
		}
	}
</script>

<style lang="scss" scoped>
.sr_code{
	background-color: #FFFFFF;
	padding-bottom: 84upx;
	.code-title{
		text-align: center;
		border:2upx solid rgba(229,229,229,1);
		font-size: 32upx;
		color: #333333;
		font-weight: bold;
		position: relative;
		padding: 35upx 0;
		image{
			width:40upx;
			height:40upx;
			position: absolute;
		    right:30upx;
			top: 35upx;
		}
	}
	.code_money{
		font-size: 28upx;
		color: #333333;
		margin-top: 40upx;
		text-align: center;
	}
	.six_code{
		margin: 22upx 34upx 18upx;
		display: flex;
		border:2upx solid rgba(229,229,229,1);
		border-radius:10upx;
		.sixbox{
			flex: 1;
			border-right:2upx solid rgba(229,229,229,1);
			&:last-child{
				border-right: none;
			}
			input{
				width: 100%;
				height: 100upx;
				text-align: center;
				font-size: 40upx;
			}
		}
	}
	.forget_code{
		text-align: right;
		margin: 0 32upx;
		font-size: 28upx;
		color: #3DB4EB;
	}
}
</style>
