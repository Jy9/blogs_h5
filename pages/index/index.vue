<template>
	<view class="content" @touchend="pageTouchEnd">
		<!-- banner -->
		
		<!-- 热榜 显示2条 -->
		
		<!-- 优秀作者 多条 swiper 每页2.4条 -->
		
		<!-- 最新 列表 -->
		
		<!-- 发布按钮 -->
		<AddBtn></AddBtn>
		
		<!-- 心 -->
		<Heart :heartList="heartList"></Heart>
	</view>
</template>

<script>
	import Heart from '@/components/heart.vue'
	import AddBtn from '@/components/addbtn.vue'
	import {
		getRGB,
		globalData
	} from '@/uitl.js'
	
	export default {
		components:{
			Heart,
			AddBtn
		},
		data() {
			return {
				heartList:[],
				clearHeart:null
			}
		},
		onLoad() {
			console.log(globalData.it)
		},
		methods: {
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
	
</style>
