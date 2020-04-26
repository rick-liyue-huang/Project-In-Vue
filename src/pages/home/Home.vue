// template 只能包裹一个子标签
<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
// 这是局部组件，因此需要在组件中注册
import HomeHeader from "./components/Header";
export default {
  name: "Home",
  components: {
    HomeHeader // 对应 home-header
  }
};
</script>

<style></style>
