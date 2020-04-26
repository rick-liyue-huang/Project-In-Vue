<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <!-- 轮播图 -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "HomeSwiper",
  data: function() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true // 支持 循环轮播
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1505/91/04b59ae6faf17a.jpg_r_640x214_ce69a65a.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1507/4f/80e2bd1e0dc932.jpg_r_640x214_4e1a667d.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: white !important
.wrapper
  width: 100%
  height: 0
  overflow hidden
  padding-bottom: 31.25%
  background: #eee

  .swiper-image
    width: 100%
</style>

// 样式进行穿透，不受 scoped 限制
