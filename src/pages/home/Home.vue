<template>
  <!-- template 只能包裹一个子标签 -->
  <div>
    <!-- 通过属性传值 -->
    <!-- <home-header :city="city"></home-header> -->
    <home-header></home-header>
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
import { mapState } from "vuex";

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
      // city: "",
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo: function() {
      // 切换不同的城市
      axios
        .get("/api/index.json?city=" + this.city)
        .then(this.getHomeInfoSuccess);
    },
    getHomeInfoSuccess: function(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        // this.city = data.city;
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
    // console.log("mounted");
    this.lastCity = this.city; // 对上一次城市做一次保存
    this.getHomeInfo();
  },
  // 对应 keep-alive 标签, 处理不同城市的加载缓冲内容
  activated: function() {
    // console.log("activated");
    // 判断当前城市和上一次城市是否相同，否则就重新加载 .json
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>

<style></style>

// fast 3g online 测试
