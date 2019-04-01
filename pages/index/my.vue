<template>
	<view class="content" @touchend="pageTouchEnd">
		<view class="header">
			<image class="header_bgimg" src="../../static/banner/banner1.jpg" mode="aspectFill"></image>
			<image class="header_userimg" src="../../static/banner/banner3.jpg" mode="aspectFill"></image>
			<view class="header_username">贾越</view>
		</view>
		<view class="nav">目前有<text class="nav_text">{{userInfo.lovePeoplesLen}}</text>人喜欢你呦</view>
		<HeadLine title="相关文章"></HeadLine>
		<view class="tools">
			<view class="tool">
				<image class="tool_img" src="../../static/icon/article.png" mode="aspectFit"></image>
				<view class="tool_title">已发文章</view>
				<view class="tool_num">{{userInfo.oldArticle}}篇</view>
			</view>
			<view class="tool">
				<image class="tool_img" src="../../static/icon/love.png" mode="aspectFit"></image>
				<view class="tool_title">收藏文章</view>
				<view class="tool_num">{{userInfo.collectArticle}}篇</view>
			</view>
		</view>
		<HeadLine title="未发布"></HeadLine>
		<ArticleList :articleList="articleList"></ArticleList>
		<NoData></NoData>
		<Heart :heartList="heartList"></Heart>
	</view>
</template>

<script>
	import HeadLine from '@/components/headline.vue'
	import ArticleList from '@/components/article-list.vue'
	import Heart from '@/components/heart.vue'
	import NoData from '@/components/nodata.vue'
	
	import {
		getRGB,
		globalData
	} from '@/uitl.js'
	export default {
		components:{
			HeadLine,
			ArticleList,
			Heart,
			NoData
		},
		data() {
			return {
				heartList:[],
				clearHeart:null,
				userInfo:{
					lovePeoplesLen:22,
					oldArticle:12,
					collectArticle:23,
				},
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
	.header{
		height: 600upx;
		position: relative;
	}
	.header_bgimg{
		width: 750upx;
		height: 600upx;
	}
	.header_userimg{
		position: absolute;
		left:30upx;
		top:210upx;
		width: 160upx;
		height: 160upx;
		border-radius: $border-circle-radius;
	}
	.header_username{
		position: absolute;
		top:280upx;
		left:260upx;
		font-weight: 900;
		font-size: $font-name-size;
		color: $font-opposite-color;
	}
	
	.nav{
		height: 100upx;
		background: $bg-color;
		position: relative;
		top:-80upx;
		border-top-left-radius: 50upx;
		border-top-right-radius: 50upx;
		color: $font-nouse-color;
		text-align: center;
		line-height: 100upx;
		font-size: $font-size;
	}
	.nav_text{
		color: $font-small-color;
		font-size: $font-big-size;
	}
	
	.tools{
		width: 690upx;
		padding:0px 30upx;
		height: 260upx;
		margin-top:60upx;
		border-bottom: $border;
	}
	.tool{
		width: 305upx;
		height: 200upx;
		margin:0px 20upx;
		float: left;
	}
	.tool_img{
		width:80upx;
		height: 80upx;
		margin-left:112.5upx;
	}
	.tool_title,.tool_num{
		margin-top:20upx;
		text-align: center;
		line-height: 30upx;
	}
	.tool_title{
		line-height: 60upx;
	}
	.tool_num{
		color: $font-nouse-color;
	}
</style>
