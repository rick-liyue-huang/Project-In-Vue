/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import fastClick from "fastclick";
// 全局引入 swiper 库
import VueAwesomeSwiper from "vue-awesome-swiper";
import App from "./App";
import router from "./router";
// 在入口文件引入 全局css 样式
import "@/assets/styles/reset.css";
// 手机 1像素边框问题
import "@/assets/styles/border.css";
import "swiper/dist/css/swiper.css";
// iconfont 引入
import "@/assets/styles/iconfont.css";

Vue.config.productionTip = false;
// 引入 fastclick 解决 移动端 点击 事件 延迟 300ms问题
fastClick.attach(document.body);
// 全局使用 swiper插件
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
// 定义了子组件 App 需要在这里配置
new Vue({
  // 对应 index.html 挂载点
  el: "#app",
  router, // 使用了 router，相当于注册
  components: { App },
  template: "<App/>"
});

// 路由就是根据网址的不同返回不同的内容

// 多页面应用： 页面跳转 返回 HTML， 请求需要处理服务器返回
// 优点: 首屏时间快， SEO 效果好
// 缺点：页面切换慢

// 单页应用 页面跳转 js 渲染， 可以在前端解决
// 优点： 页面跳转块
// 缺点：首屏时间慢， SEO差
