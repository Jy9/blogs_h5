<template>
	<view class="content" @touchend="pageTouchEnd">
		<!-- banner -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true">
			<swiper-item v-for="(item,index) in banners">
				<image :src="item.img_path" mode="aspectFill" class="banner_img"></image>
			</swiper-item>
		</swiper>
		
		<!-- 热榜 显示2条 -->
		<ArticleList :articleList="hotList"></ArticleList>
		
		<!-- 优秀作者 多条 swiper 每页2.4条 -->
		<HeadLine title="优秀作者"></HeadLine>
		<AuthorsList :authorList="authorList"></AuthorsList>
		
		<!-- 最新 列表 -->
		<HeadLine title="最近十天"></HeadLine>
		<ArticleList :articleList="articleList"></ArticleList>
		
		<!-- 到底了 -->
		<NoData></NoData>
		
		<!-- 发布按钮 -->
		<AddBtn></AddBtn>
		
		<!-- 心 -->
		<Heart :heartList="heartList"></Heart>
	</view>
</template>

<script>
	import Heart from '@/components/heart.vue'
	import AddBtn from '@/components/addbtn.vue'
	import AuthorsList from '@/components/authors-list.vue'
	import ArticleList from '@/components/article-list.vue'
	import NoData from '@/components/nodata.vue'
	import HeadLine from '@/components/headline.vue'
	
	import {
		getRGB,
		globalData
	} from '@/uitl.js'
	
	export default {
		components:{
			Heart,
			AddBtn,
			AuthorsList,
			ArticleList,
			NoData,
			HeadLine
		},
		data() {
			return {
				heartList:[],
				clearHeart:null,
				banners:[{
					img_path:"../../static/banner/banner1.jpg",
					id:1
				},{
					img_path:"../../static/banner/banner2.jpg",
					id:1
				},{
					img_path:"../../static/banner/banner3.jpg",
					id:1
				},{
					img_path:"../../static/banner/banner4.jpg",
					id:1
				}],
				hotList:[{
					id:1,
					title:"我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题",
					type:"美食",
					time:"2019-05-12",
					author:"贾越"
				},{
					id:2,
					title:"我是标题",
					type:"美食",
					time:"2019-05-12",
					author:"贾越"
				}],
				authorList:[{
					user_id:1,
					name:"贾越",
					user_img:"../../static/banner/banner2.jpg",
					title:"美食家"
				},{
					user_id:1,
					name:"贾越",
					user_img:"../../static/banner/banner2.jpg",
					title:"美食家"
				},{
					user_id:1,
					name:"贾越",
					user_img:"../../static/banner/banner2.jpg",
					title:"美食家"
				},{
					user_id:1,
					name:"贾越",
					user_img:"../../static/banner/banner2.jpg",
					title:"美食家"
				},{
					user_id:1,
					name:"贾越",
					user_img:"../../static/banner/banner2.jpg",
					title:"美食家"
				},{
					user_id:1,
					name:"贾越",
					user_img:"../../static/banner/banner2.jpg",
					title:"美食家"
				}],
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
	.content{
		padding-top:0px;
	}
	.swiper{
		height: 400upx;
	}
	.banner_img{
		width: 750upx;
		height: 400upx;
	}
	
</style>
