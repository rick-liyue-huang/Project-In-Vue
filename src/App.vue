<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <!-- router-view 显示当前路由地址所对应的内容, 根据不同的路由设置因此只需要一个路由组件就够了
    里面的东西根据router的index内容变化-->

    <!-- 通过观看 network -> shr 查看 .json文件 加载次数  
      keep-alive 标签 是vue自带的标签， 这样当反复路由的时候不会加载重复的内容
      但是当选择不同的城市的时候需要加载不同的内容，因此 需要 .json加载，这时候用到 activated 钩子函数 -->

    <!-- 除了 detail页面的其他的都被缓存 -->
    <keep-alive exclude="Detail">
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
