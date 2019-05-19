<template>
    <div>
      <!-- 顶部搜索条 -->
      <search-bar></search-bar>
      <div class="content">
        <div class="left">
          <div class="menu-item" :class="{active: menu.cat_id == currentId}" :key='menu.cat_id' v-for='menu in list'>
            {{menu.cat_name}}
          </div>
        </div>
        <div class="right"></div>
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
      currentId: 1
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
    }
  },
}
</script>

<style scoped lang='scss'>
@import 'main.scss';
</style>
