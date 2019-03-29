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
		font-size: $font-size;
		color: $font-color;
	}
	.content{
		width: 100%;
		min-height: 400px;
		padding-top:$bar-height;
	}
</style>
