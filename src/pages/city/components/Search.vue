<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="please input city" />
  </div>
</template>

<script>
export default {
  name: "CitySearch"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
.search
  height: 0.72rem
  background: $bgColor
  padding: 0 0.1rem
  .search-input
    height: 0.62rem
    line-height: 0.62rem
    width: 100%
    text-align: center
    border-radius: 0.06rem
    color: #666
    padding: 0 0.1rem
    box-sizing: border-box
</style>