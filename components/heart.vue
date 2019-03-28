<template>
	<view>
		<view v-for="(item,index) in heartList" :key="index" class="heart" :style="{left:item.left+'px',top:item.top+'px',background:item.color}">
			<view class="heart_circle" :style="{background:item.color}"></view>
			<view class="heart_circle heart_circle_right" :style="{background:item.color}"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			heartList:[]
		}
	}
</script>

<style>
	.heart{
		width:20upx;
		height: 20upx;
		position: fixed;
		animation: heart 2s ease-out;
		animation-fill-mode:forwards;
	}
	.heart_circle{
		width: 100%;
		height: 100%;
		border-radius: 50%;
		left:-10upx;
		position: absolute;
	}
	.heart_circle_right{
		top:-10upx;
		left:0px;
	}
	@keyframes heart{
		from{
			transform: translateY(0px) rotateZ(45deg);
			opacity: 1;
		}
		to{
			transform: translateY(-100px) rotateZ(45deg);
			opacity: 0;
		}
	}
</style>
