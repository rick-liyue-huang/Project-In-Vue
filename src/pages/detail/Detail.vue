<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";

export default {
  name: "Detail",
  // 名字的作用： 1. 处理 keep-alive exclude, 2. 递归组件 3. Vue 浏览器工具
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data: function() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      categoryList: []
    };
  },
  methods: {
    getDetailInfo: function() {
      // match with path: "/detail/:id", // 动态路由
      // axios.get("/api/detail.json?id=" + this.$route.params.id);
      axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleDetailSuccess);
    },
    handleDetailSuccess: function(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        // console.log(data);
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.categoryList = data.categoryList;
      }
    }
  },
  mounted: function() {
    this.getDetailInfo();
  }
  // activated 可以使用 activated 来处理 keep-alive 的问题, 但是这里在 App.vue里面处理
};
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
