<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      please input...
    </div>
    <!-- 路由跳转就使用 router-link -->
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
/* eslint-disable */ // 将 Home 里面的组件都放到这里
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>


<style lang="stylus" scoped>
// css文件样式引用需要用 @import, 并且 引用路径 ~@ 因为有些样式需要全局使用，
@import '~@/assets/styles/variable.styl';

// @import '~styles/variable.styl'; // 需要处理webpack配置文件
.header {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.9rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    background: #fff;
    border-radius: 0.1rem;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    color: #ccc;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    color: #fff;

    .arrow-icon {
      font-size: 0.24rem;
      margin-left: -0.04rem;
    }
  }
}
</style>


// 用 stylus 写样式， 并且需要 只是对当前组件有效 scoped // 1rem = html
font-size = 50px, 因此 43px = 0.86rem
