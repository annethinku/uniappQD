<template>
	<view>
		<uni-popup ref="password" type="bottom">
			<view class="sr_code">
				<view class="code-title">
					<text>输入支付密码</text>
					<image src="../../static/images/art-close.png" mode="" @click="hideCode"></image>
				</view>
				<view class="code_money" v-show="isTixian=='true'">
					提现{{money}}元
				</view>
				<view class="six_code">
					<view class="sixbox" v-for="(item,index) in karr" :key="index">
						<input type="number" :value="item":focus="index==curindex?true:false" maxlength="1" @input="fuzhiC($event,index)"
						 @confirm="isTixian?enterTixian:enterT"/>
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
	import tools from '../../static/js/tools.js'
	export default {
		props:['isTixian','money'],
		data() {
			return {
				curindex:0,
				passArr:'',
				karr:[null,null,null,null,null,null]
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
			fuzhiC(e,i){
				this.curindex=i;
				this.karr[i]=e.detail.value;
				// 密码输入完成
				if(i==5 && e.detail.value){
					if(this.isTixian){
						this.enterTixian();
					}else{
						this.enterT();
					}
				}
			},
			enterT(){
				let _that=this;
				let token = uni.getStorageSync('token');
				// id(订单id),ordersn(订单编号),token(uuid),type(credit)，pwd（操作密码）
				tools.myRequest('api.attestation.order.complete', {
					id:uni.getStorageSync('orderid'),
					ordersn:uni.getStorageSync('ordersn'),
					token: token,
					type:'credit',
					pwd:_that.karr.join('')
					// sign:tools.getAesString(params)
				}, 'POST').then(res => {
					// console.log(res);
					tools.warnMessage(res.status,res.result.message,function(){
					    if(res.result.result){
							uni.reLaunch({
								url:'../../pages/vip/vip'
							})
						}
					});
				
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			},
			enterTixian(){
				let _that=this;
				let token = uni.getStorageSync('token');
				uni.showToast({
					icon:'loading'
				})
				tools.myRequest('api.member.withdrawal.submit', {
					token: token,
					money:_that.money,
					pwd:_that.karr.join('')
				}, '').then(res => {
					// console.log(res);
					uni.hideToast();
					tools.warnMessage(res.status,res.result.message,function(){
						if(res.result.row.status==0){
							uni.showToast({
								icon:'none',
								title:'提现审核中'
							})
						}else if(res.result.row.status==1){
							uni.showToast({
								icon:'none',
								title:'提现成功'
							})
						}else if(res.result.row.status==-1){
							uni.showToast({
								icon:'none',
								title:'已拒绝提现'
							})
						}
				       setTimeout(function(){
						   uni.navigateBack({});
					   },1000)
					});
					
				}).catch(error => {
					console.log('请求失败：');
					console.log(error);
				})
			
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
