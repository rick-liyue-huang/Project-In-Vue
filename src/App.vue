
<template>
  <!-- 这里面就是子组件 -->
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <!-- 路由的内容加载过一次后，就将其放入到内存中，不需要重新渲染页面 -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
/* eslint-disable */
// 单页面组件 /* eslint-disable */ // 模板
export default {
  name: "App"
};
</script>

// 样式
<style></style>
