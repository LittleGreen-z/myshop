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
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      imgUrls:[
      // 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      // 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      // 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      indicatorFlag: true
    }
  },
  created() {
    let that = this
    mpvue.request({
      url:'https://zhengzhicheng.cn/api/public/v1/home/swiperdata',
      success: function (res) {
        let list = res.data.message
        list= list.map (item => {
          return item.image_src
        })
        that.imgUrls = list
      }
    })
  },
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
</style>
