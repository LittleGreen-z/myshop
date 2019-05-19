<template>
  <div class="search">
      <div class="search-bar">
        <icon type="search"></icon>
        <span>搜索</span>
      </div>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  }
}
</script>

<style scoped lang='scss'>
.search {
  background-color: #eb4450;
  padding: 10px;
  .search-bar {
    background-color: white;
    text-align: center;
    icon {
      vertical-align: middle;
    }
  }
}
</style>
