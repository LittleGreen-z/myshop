<template>
  <div>
    <search-bar></search-bar>
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
import SearchBar from '../../components/seach-bar'
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
  components: {
    'search-bar': SearchBar
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

<style scoped lang='scss'>
 @import 'main.scss';
</style>
