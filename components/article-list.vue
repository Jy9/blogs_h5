<template>
	<view>
		<view v-for="(item,index) in articleList" class="list">
			<image :src="img" class="list_img" v-if="imgIndex<3" :class="{list_img1:item.img_path && item.img_path.length>1,list_img2:imgIndex==0}" mode="aspectFill" v-for="(img,imgIndex) in item.img_path"></image>
			<view class="list_title">{{item.title}}</view>
			<view class="list_time">{{item.time}}</view>
			<view class="list_author">{{item.author}}</view>
			<view class="list_type">
				<view class="list_type_content">{{item.type}}</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			articleList: []
		}
	}
</script>
<style lang="scss" scoped>
	.list {
		width: 710upx;
		margin-left:20upx;
		position: relative;
		font-size: $font-small-size;
		margin-top: 30upx;
		overflow: hidden;
	}
	.list_img{
		float: left;
		width: 710upx;
		height: 400upx;
		border-radius: $border-radius;
	}
	.list_img1{
		width: 230upx;
		height: 160upx;
		margin-left:10upx;
	}
	.list_img2{
		margin:0px;
	}
	.list_title {
		width: 710upx;
		max-height: 120upx;
		line-height: 60upx;
		float: left;
		font-size: $font-big-size;
		color: $font-color;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.list_author,.list_time {
		margin-top:30upx;
	}
	.list_author{
		float: left;
		font-weight: 900;
		color: $font-sign-color;
	}
	.list_time{
		float: right;
		color: $font-nouse-color;
	}

	.list_type {
		float: left;
		margin-top:20upx;
		font-size: $font-small-size;
		border-top: $border;
		line-height: 30upx;
		padding-top:10upx;
		width: 710upx;
		color: $font-nouse-color;
	}
	.list_type_content{
		border:$border;
		border-radius: $border-radius;
		float: left;
		padding: 10upx 20upx;
	}
</style>
