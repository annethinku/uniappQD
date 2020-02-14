<template>
	<view class="login">
		<view class="login_title">
			请输入验证码
			<view class="desc">
				短信验证码已发送至155****6656
			</view>
		</view>
		<view class="yzm_kua">
			<view class="kua_box" v-for="(item,index) in karr" :key="index" :class="curindex==index?'active':''">
				<!-- <input type="number" value="" maxlength="1" @focus="addClass(index)" :focus="index==0?true:false"/> -->
				<input type="number" :value="item":focus="index==curindex?true:false" maxlength="1" @input="fuzhiC($event,index)" @confirm="enterT"/>
			</view>
		</view>
		<view class="gray_tis">
			59s后<text class="ml">重新发送</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				curindex:0,
				passArr:'',
				karr:[null,null,null,null,null,null],
			};
		},
		methods: {
			fuzhiC(e,i){
				this.curindex=i;
				this.karr[i]=e.detail.value;
				// 密码输入完成
				if(i==5 && e.detail.value){
					this.enterT();
				}
			},
			enterT(){
				let _that=this;
				let token = uni.getStorageSync('token');
				// id(订单id),ordersn(订单编号),token(uuid),type(credit)，pwd（操作密码）
				console.log(_that.karr.join(''));
				// tools.myRequest('api.attestation.order.complete', {
				// 	id:uni.getStorageSync('orderid'),
				// 	ordersn:uni.getStorageSync('ordersn'),
				// 	token: token,
				// 	type:'credit',
				// 	pwd:_that.karr.join('')
				// 	// sign:tools.getAesString(params)
				// }, 'POST').then(res => {
				// 	// console.log(res);
				// 	tools.warnMessage(res.status,res.result.message,function(){
				// 	    if(res.result.result){
				// 			uni.reLaunch({
				// 				url:'../../pages/vip/vip'
				// 			})
				// 		}
				// 	});
				
				// }).catch(error => {
				// 	console.log('请求失败：');
				// 	console.log(error);
				// })
			},
			addClass(i){
				this.curindex=i;
			}
		}
	}
</script>

<style lang="scss" scoped>
.ml{
	margin-left: 40upx;
}
.yzm_kua{
	display: flex;
	margin: 0 33upx;
	.kua_box{
		flex:1;
		border-bottom: 1upx #E9E9E9 solid;
		padding: 0 0 40upx;
		margin: 0 40upx 0 0;
		text-align: center;
		&:last-child{
			margin: 0 0 0 0;
		}
		&.active{
				border-bottom: 1upx #FE834C solid;
		}
		input{
			font-size: 90upx;
			color: #333333;
		}
	}
}
</style>
