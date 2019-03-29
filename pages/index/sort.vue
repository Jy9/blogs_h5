<template>
	<view class="content" @touchend="pageTouchEnd">
		<!-- 搜索 -->
		<view class="seach">
			<view class="seach_btn">搜索关键字</view>
		</view>
		<Seach v-if="ifShowSeach"></Seach>
		<!-- nuv 排序（热门，最新） 分类 -->
		
		<!-- 列表 -->
		
		<!-- 心 -->
		<Heart :heartList="heartList"></Heart>
	</view>
</template>

<script>
	import Heart from '@/components/heart.vue'
	import Seach from '@/components/seach.vue'
	import {
		getRGB,
		globalData
	} from '@/uitl.js'
	export default {
		components:{
			Heart,
			Seach
		},
		data() {
			return {
				heartList:[],
				clearHeart:null,
				ifShowSeach:false,
			};
		},
		onLoad(){
			console.log(globalData.it)
		},
		methods:{
			pageTouchEnd(e){
				let that = this
				that.heartList.push({
					left:e.mp.changedTouches[0].clientX,
					top:e.mp.changedTouches[0].clientY,
					color:getRGB()
				})
				let len = that.heartList.length
				that.clearHeart && clearTimeout(that.clearHeart)
				that.clearHeart = setTimeout(function(){
					that.heartList.splice(0,len)
				},2000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.seach{
		height: 80upx;
		color: $font-nouse-color;
		border-bottom: $border;
		position: relative;
	}
	.seach_btn{
		position: absolute;
		height: 60upx;
		line-height: 60upx;
		top:20upx;
		left:0px;
		padding:0px 30upx;
	}
</style>
