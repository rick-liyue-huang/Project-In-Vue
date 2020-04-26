// 将 Home 里面的组件都放到这里

<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      please input...
    </div>
    <div class="header-right">
      city
      <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

// 用 stylus 写样式， 并且需要 只是对当前组件有效 scoped // 1rem = html
font-size = 50px, 因此 43px = 0.86rem
<style lang="stylus" scoped>
// css文件样式引用需要用 @import, 并且 引用路径 ~@ 因为有些样式需要全局使用，
@import '~@/assets/styles/variable.styl'
// @import '~styles/variable.styl'; // 需要处理webpack配置文件
.header
  display: flex
  line-height: 0.86rem
  background: $bgColor
  color: #fff
  .header-left
    width: .9rem
    float: left
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    background: #fff
    border-radius: .1rem
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    color: #ccc
  .header-right
    width: 1.24rem
    float right
    text-align: center
    .arrow-icon
      font-size: .24rem
      margin-left: -.04rem
</style>
