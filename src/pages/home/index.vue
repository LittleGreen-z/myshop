<template>
  <div>
    <div class="search">
      <div class="search-bar">
        <icon type="search"></icon>
        <span>搜索</span>
      </div>
    </div>
    <!-- 轮播图 -->
    <swiper :indicator-dots='indicatorFlag' indicator-color='rgba(255, 255, 255, .3)' circular='true'>
      <swiper-item v-for="(item, index) in imgUrls" :key='index'>
        <image :src="item" class="slide-image"></image>
      </swiper-item>
    </swiper>
    <!-- 菜单 -->
    <div class="menu">
      <img v-for="(item1,index) in menus" :key='index' :src='item1.image_src' class="img1">
    </div>
    <!-- 楼层效果 -->
    <div class="floor" v-for="(item,i) in floors" :key="i">
      <div class="floor-title">
        <img :src="item.floor_title.image_src">
      </div>
      <div class="floor-content">
        <div class="left">
          <img :src="item.product_list[0].image_src" >
        </div>
        <div class="right">
          <div v-for='(ite,index) in item.product_list' :key='index'>
            <img v-if='index>0'  :src='ite.image_src' />
          </div>
        </div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <div class="to-top" v-if="ishow" @click="goTop">
      ︿
      <p>顶部</p>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request'
export default {
  name: "",
  data() {
    return {
      imgUrls:[
      // 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      // 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      // 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      menus: [],
      floors: [],
      indicatorFlag: true,
      ishow: false
    }
  },
  methods: {
    goTop () {
      mpvue.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    },
    async initData () {
      // 轮播图
      let res = await request('home/swiperdata')
      let list = res.data.message
       list= list.map (item => {
          return item.image_src
         })
         this.imgUrls = list
        //  菜单接口调用
        let menuRes= await request('home/catitems')
        this.menus =menuRes.data.message
        // 楼层
        let floorRes = await request('home/floordata')
        this.floors = floorRes.data.message
    }
  },
  async created() {

    // mpvue.request({
    //   url:'https://zhengzhicheng.cn/api/public/v1/home/swiperdata',
    //   success: function (res) {
    //     let list = res.data.message
    //     list= list.map (item => {
    //       return item.image_src
    //     })
    //     that.imgUrls = list
    //   }
    // }),
    // request('https://zhengzhicheng.cn/api/public/v1/home/swiperdata')
    // .then(res => {
    //   let list = res.data.message
    //    list= list.map (item => {
    //       return item.image_src
    //      })
    //      that.imgUrls = list
    // })

    // mpvue.request({
    //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/catitems',
    //   success: function (res) {
    //     const {message} = res.data
    //     that.menus = message
    //   }
    // })
    this.initData()
  },
  onPageScroll(event) {
    this.ishow = event.scrollTop>50
  },
  onPullDownRefresh () {
    this.initData()
  }
};
</script>

<style>
.search {
  background-color: #eb4450;
  padding: 10px;
}
.search .search-bar {
  background-color: white;
  text-align: center;
}
.search .search-bar icon {
  vertical-align: middle;
}
.slide-image {
  width: 750rpx
}
.menu {
  display: flex;
  justify-content: space-around
}
.menu .img1{
  width: 128rpx;
  height: 140rpx;
}
.floor {
  margin-top: 20rpx
}
.floor .floor-title img {
  width: 750rpx;
  height: 80rpx;
}
.floor .floor-content {
  display: flex
}
.floor .floor-content .left {
  width: 240rpx
}
.floor .floor-content .left img{
  width: 240rpx;
  height: 380rpx;
}
.floor .floor-content .right {
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.floor .floor-content .right img {
  width: 232rpx;
  height: 188rpx;
  border-radius: 4px;
}
.to-top {
  width:100rpx;
  height:100rpx;
  border-radius: 50%;
  background:rgba(255,255,255,0.8);
  position: fixed;
  right:40rpx;
  bottom:40rpx;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.to-top p {
  font-size: 16px;
}
</style>
