<template>
    <div>
      <!-- 顶部搜索条 -->
      <search-bar></search-bar>
      <div class="content">
        <div class="left">
          <div @click="changeMenu(menu.cat_id)" class="menu-item" :class="{active: menu.cat_id == currentId}" :key='i' v-for='(menu,i) in list'>
            {{menu.cat_name}}
          </div>
        </div>
        <div class="right">
          <!-- 第一层遍历 大分类 -->
          <div v-for='(second,index1) in rightData' :key='index1' class="brand-item">
            <!-- 二级分类标题 -->
            <div class="brand-title">{{second.cat_name}}</div>
            <!-- 二级分类内容 -->
            <div class="brand-list">
              <!-- 三级列表的分类 -->
              <div class="brand" v-for="brand in second.children" :key="brand.cat_id">
                <img :src="brand.cat_icon" mode="aspectFill">
                <p>{{brand.cat_name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import SearchBar from '../../components/seach-bar'
import request from '../../utils/request'
export default {
  name: '',
  data () {
    return {
      list: [],
      currentId: 1,
    }
  },
  computed: {
    rightData () {
      let rd =this.list.filter(item => {
        return item.cat_id == this.currentId
      })
      let ret = rd[0].children
      return ret
    }
  },
  components: {
    'search-bar': SearchBar
  },
  created() {
    this.queryData()
  },
  methods: {
    async queryData () {
      let res = await request('categories')
      this.list = res.data.message
    },
    changeMenu (id) {
      this.currentId = id
    }
  },
}
</script>

<style scoped lang='scss'>
@import 'main.scss';
</style>
