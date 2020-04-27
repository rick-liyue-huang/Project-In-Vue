<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-bas-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "DetailHeader",
  data: function() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll: function() {
      // console.log("scroll"); // 这个scroll 对 home组件也有影响
      console.log(document.documentElement.scrollTop);
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated: function() {
    // 因为使用了 keep-alive组件
    // 这是 全局事件 需要 解绑
    window.addEventListener("scroll", this.handleScroll);
  },
  // 就在这里解绑！！！！！！！！！！！必须解绑
  deactivated: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl';

.header-abs
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .8rem
  height: .8rem;
  line-height: .8rem;
  border-radius: .4rem
  text-align: center;
  background: rgba(0, 0, 0, .8);
  .header-bas-back
    color: #fff;
    font-size: .4rem;

.header-fixed
  z-index: 90
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.33rem;
  .header-fixed-back
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
</style>
