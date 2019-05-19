<template>
  <div class="search">
      <div class="search-input">
        <icon type='search' size='16'/>
        <input @input="keywordSearch" v-model="keyword" placeholder="请输入关键字" />
      </div>
      <button @click="cancelSearch" v-if="keyword" class="cancel">取消</button>
      <div  v-if="keyword" class="search-modal">
        <div v-for="(item,i) in kdList" :key="i" class="search-item">
          {{item.goods_name}}
        </div>
      </div>
  </div>
</template>

<script>
import request from '../../utils/request'
export default {
  name: '',
  data () {
    return {
      keyword: '',
      kdList: []
    }
  },
  methods: {
    cancelSearch () {
      this.keyword= ''
    },
    async keywordSearch () {
      let ret = await request('goods/qsearch','get',{
        query: this.keyword
      })
      this.kdList = ret.data.message
    }
  },
}
</script>

<style scoped lang=scss>
@import 'main.scss';
</style>
