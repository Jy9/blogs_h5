<template>
	<view>
		<view class="title">{{title}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			title:""
		}
	}
</script>

<style lang="scss" scoped>
	.title{
		line-height: 40upx;
		padding-top:50upx;
		color: $font-sign-color;
		font-size: $font-big-size;
		font-weight: 900;
		padding-left:60upx;
		position: relative;
	}
	.title::before{
		content:"";
		width:6upx;
		height:40upx;
		position:absolute;
		left:30upx;
		top:50upx;
		background: $bg-btn2-color;
	}
</style>
