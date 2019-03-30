<template>
	<view class="content">
		<view class="add_btn">发布</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.add_btn{
		position: fixed;
		bottom: 20upx;
		left:0px;
		right: 0px;
		margin: auto;
		background: $bg-btn2-color;
		width: 240upx;
		line-height: 68upx;
		text-align: center;
		color: $font-opposite-color;
		border-radius: 10upx;
	}
</style>
