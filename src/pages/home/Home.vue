<template>
  <!-- template 只能包裹一个子标签 -->
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
/* eslint-disable */

// 这是局部组件，因此需要在组件中注册
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";

export default {
  name: "Home",
  components: {
    HomeHeader, // 对应 home-header
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
};
</script>

<style></style>

// fast 3g online 测试
