<template>
	<view>
		<swiper display-multiple-items="2.6" class="swiper">
			<swiper-item v-for="(item,index) in authorList" class="list">
				<view class="user">
					<image class="user_img" :src="item.user_img" mode="aspectFill"></image>
					<view class="user_name">{{item.name}}</view>
					<view class="user_title">{{item.title}}</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			authorList:[]
		}
	}
</script>

<style lang="scss" scoped>
	.swiper{
		margin-top:30upx;
		height: 340upx;
		width: 710upx;
		margin-left: 20upx;
	}
	.user{
		height: 300upx;
		margin:10px 20upx;
		box-shadow: 1upx 1upx 10upx 0px rgba(0,0,0,0.2);
		border-radius: $border-radius;
	}
	.user_img{
		width: 120upx;
		height: 120upx;
		border-radius: $border-circle-radius;
		margin-left:calc(50% - 60upx);
		margin-top:20upx;
	}
	.user_name,.user_title{
		text-align: center;
		color: $font-sign-color;
		font-size: $font-size;
	}
	.user_name{
		line-height: 80upx;
		font-weight: 900;
	}
	.user_title{
		color: $font-color;
		font-size: $font-small-size;
	}
</style>
