<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	*{
		box-sizing: border-box;
	}
	page{
		min-height: 100%;
	}
	.content{
		width: 100%;
		padding-top:40upx;
		min-height: 100%;
		position: absolute;
	}
	/* 搜索 */
	.seach{
		height: 60upx;
		color: $font-nouse-color;
		border-bottom: $border;
	}
</style>
