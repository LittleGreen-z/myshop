<template>
    <div>
      <!-- 顶部搜索条 -->
      <search-bar></search-bar>
    </div>
</template>

<script>
import SearchBar from '../../components/seach-bar'
import request from '../../utils/request'
export default {
  name: '',
  data () {
    return {}
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
      console.log(res)
    }
  },
}
</script>

<style>
</style>
