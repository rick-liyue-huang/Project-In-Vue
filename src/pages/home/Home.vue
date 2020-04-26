<template>
  <!-- template 只能包裹一个子标签 -->
  <div>
    <!-- 通过属性传值 -->
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
/* eslint-disable */

// 这是局部组件，因此需要在组件中注册
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader, // 对应 home-header
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data: function() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  methods: {
    getHomeInfo: function() {
      axios.get("/api/index.json").then(this.getHomeInfoSuccess);
    },
    getHomeInfoSuccess: function(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
      console.log(res);
    }
  },
  // axios 数据获取, 组件加载完毕后
  mounted() {
    this.getHomeInfo();
  }
};
</script>

<style></style>

// fast 3g online 测试
