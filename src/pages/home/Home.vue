<template>
  <div>
    <home-header />
    <home-swiper :swiperList="swiperList" />
    <home-icons :iconList="iconList" />
    <home-recommend :recommendList="recommendList" />
    <home-weekend :weekendList="weekendList" />
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
// import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";

export default {
  name: "Home",
  components: {
    // 组件之间也可以使用异步组件
    HomeHeader: () => import("./components/Header"),
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      // city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: "" // 判断上一次的城市
    };
  },
  computed: {
    // 得到 vuex的计算属性
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      // 在config/index.js中进行了配置
      axios
        .get("/api/index.json?city=" + this.city)
        .then(this.getHomeInfoSuccess);
    },
    getHomeInfoSuccess(res) {
      // console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        // this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  mounted() {
    this.getHomeInfo();
    // console.log("mounted");
    this.lastCity = this.city;
  },

  // keep-alive 组件应用的时候就使用这个方法, 并且使用 lastCity 的临时缓冲变量
  activated() {
    // console.log("activated");
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  }
};
</script>

<style lang="stylus">
.home
  font-size: 50px
</style>
