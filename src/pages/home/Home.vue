// template 只能包裹一个子标签
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// 这是局部组件，因此需要在组件中注册
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
export default {
  name: "Home",
  components: {
    HomeHeader, // 对应 home-header
    HomeSwiper
  }
};
</script>

<style></style>

// fast 3g online 测试
