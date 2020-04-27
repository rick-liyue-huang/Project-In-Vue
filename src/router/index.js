/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
// @表示 src目录
// 当文件很小的时候 用 同步加载
// import Home from "@/pages/home/Home";
// import City from "@/pages/city/City";
// import Detail from "@/pages/detail/Detail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      // 组件很大的时候 用 异步组件加载
      component: () => import("@/pages/home/Home")
    },
    {
      path: "/city",
      name: "City",
      component: () => import("@/pages/city/City")
    },
    {
      path: "/detail/:id", // 动态路由
      name: "Detail",
      component: () => import("@/pages/detail/Detail")
    }
  ],
  // 每次路由切换的时候让页面回到最顶部，防止页面联动的时候位置相互影响
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
