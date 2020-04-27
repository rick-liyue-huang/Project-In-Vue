<template>
  <div class="header">
    Cities
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl';

.header {
  position: relative;
  height: $headerHeight;
  line-height: $headerHeight;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.33rem;

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>