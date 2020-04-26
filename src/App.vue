// 单页面组件

// 模板
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <!-- router-view 显示当前路由地址所对应的内容, 根据不同的路由设置因此只需要一个路由组件就够了
    里面的东西根据router的index内容变化-->
    <router-view />
  </div>
</template>

// 逻辑
<script>
export default {
  name: "App"
};
</script>

// 样式
<style>
</style>
