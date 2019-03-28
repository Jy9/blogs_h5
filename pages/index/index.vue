<template>
	<view class="content" @touchmove="pageMove" @touchend="pageEnd">
		<!-- 搜索 -->
		<view class="seach">
			<view>搜索关键字</view>
		</view>
		<!-- banner -->
		
		<!-- 美食 多条 swiper 每页1.3条 -->
		
		<!-- 编程 显示两条 -->
		
		<!-- 最新 列表 -->
		
		<!-- 心 -->
		<Heart :heartList="heartList"></Heart>
	</view>
</template>

<script>
	import Heart from '@/components/heart.vue' 
	import {
		getRGB
	} from '@/common/heart.js'
	
	export default {
		components:{
			Heart
		},
		data() {
			return {
				heartList:[]
			}
		},
		onLoad() {

		},
		methods: {
			pageMove(e){
				let that = this
				that.heartList.push({
					left:e.touches[0].clientX,
					top:e.touches[0].clientY,
					color:getRGB()
				})
			},
			pageEnd(){
				let that = this
				let len=that.heartList.length
				setTimeout(function(len){
					that.heartList.splice(0,len)
				},2000)
			}
		}
	}
</script>

<style lang="scss">
	.content {}
</style>
