<template>
  <div class="header">
    Select City
    <router-link to="/">
      <div class="iconfont city-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
.header
  height: $headerHeight
  line-height: $headerHeight
  overflow: hidden
  text-align: center
  font-size: 0.32rem
  color: #fff
  background: $bgColor
  position: relative
  .city-back
    width: 0.64rem
    text-align: center
    font-size: 0.4rem
    color: #fff
    position: absolute
    top: 0
    left: 0
</style>