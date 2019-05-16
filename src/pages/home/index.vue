<template>
  <div>
    <div class="search">
      <div class="search-bar">
        <icon type="search"></icon>
        <span>搜索</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {}
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
  vertical-align: middle
}
</style>
