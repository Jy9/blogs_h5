<template>
	<view class="content" @touchend="pageTouchEnd">
		<!-- 搜索/nav -->
		<view class="seach">
			<view class="seach_btn" @click="goSeach">搜索关键字</view>
			<view class="nav_item" :class="{nav_item1:sortIndex==1||sortIndex==2}">时间排序 
				<image class="nav_item_img" v-if="sortIndex==1" src="../../static/icon/top.png" mode="aspectFit"></image>
				<image class="nav_item_img" v-if="sortIndex==2" src="../../static/icon/bottom.png" mode="aspectFit"></image>
				<image class="nav_item_img" v-else src="../../static/icon/direction.png" mode="aspectFit"></image>
			</view>
			<view class="nav_item" :class="{nav_item1:sortIndex==3||sortIndex==4}">热门排序
				<image class="nav_item_img" v-if="sortIndex==3" src="../../static/icon/top.png" mode="aspectFit"></image>
				<image class="nav_item_img" v-if="sortIndex==4" src="../../static/icon/bottom.png" mode="aspectFit"></image>
				<image class="nav_item_img" v-else src="../../static/icon/direction.png" mode="aspectFit"></image>
			</view>
			<view class="nav_item">分类 <image class="nav_item_img" src="../../static/icon/gobottom.png" mode="aspectFit"></image></view>
		</view>
		
		<!-- 列表 -->
		<view class="article_margin"></view>
		<ArticleList :articleList="articleList"></ArticleList>
		
		<!-- 底部没有数据 -->
		<NoData></NoData>
		
		<!-- 心 -->
		<Heart :heartList="heartList"></Heart>
	</view>
</template>

<script>
	import Heart from '@/components/heart.vue'
	import NoData from '@/components/nodata.vue'
	import ArticleList from '@/components/article-list.vue'
	import {
		getRGB,
		globalData
	} from '@/uitl.js'
	export default {
		components:{
			Heart,
			NoData,
			ArticleList
		},
		data() {
			return {
				heartList:[],
				clearHeart:null,
				ifShowSeach:true,
				sortIndex:4,
				articleList:[{
					id:1,
					title:"文章标题",
					img_path:["../../static/banner/banner1.jpg","../../static/banner/banner2.jpg","../../static/banner/banner2.jpg"],
					type:"美食",
					time:"2019-05-12",
					author:"贾越"
				},{
					id:1,
					title:"文章标题",
					img_path:["../../static/banner/banner1.jpg"],
					type:"美食",
					time:"2019-05-12",
					author:"贾越"
				},{
					id:1,
					title:"文章标题",
					img_path:["../../static/banner/banner1.jpg","../../static/banner/banner3.jpg"],
					type:"美食",
					time:"2019-05-12",
					author:"贾越"
				},{
					id:1,
					title:"文章标题",
					img_path:["../../static/banner/banner1.jpg","../../static/banner/banner3.jpg","../../static/banner/banner2.jpg","../../static/banner/banner4.jpg"],
					type:"美食",
					time:"2019-05-12",
					author:"贾越"
				}]
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
			},
			goSeach(){
				uni.navigateTo({
					url:"../seach/seach"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.seach{
		height: 180upx;
		color: $font-nouse-color;
		border-bottom: $border;
		position: fixed;
		top:0px;
		width: 690upx;
		background: $bg-color;
		z-index: 10;
		padding:0px 30upx;
		padding-top:$bar-height;
	}
	.seach_btn{
		height: 60upx;
		line-height: 60upx;
		margin-top:20upx;
		padding-left:20upx;
		width: 670upx;
		float: left;
		border: $border;
		border-radius: $border-radius;
	}
	.nav_item{
		float: left;
		width: 230upx;
		text-align: center;
		line-height: 60upx;
		margin-top:30upx;
		font-size: $font-size;
		color: $font-sign-color;
	}
	.nav_item1{
		color: $font-small-color;
	}
	.nav_item_img{
		width:30upx;
		height: 30upx;
		margin-top:20upx;
		margin-left:10upx;
	}
	.article_margin{
		height: 180upx;
		padding-top:$bar-height;
	}
	
</style>
