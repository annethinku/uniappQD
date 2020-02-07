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
</style>
