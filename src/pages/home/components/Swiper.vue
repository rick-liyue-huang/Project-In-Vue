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
            "//f-ad-managercp.qunarzz.com/f_ad_manager_f_ad_manager/c48445e4-a0a1-40b0-be86-2efab09e5c7f_912_170%20%E5%9B%BD%E8%88%AA.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "//f-ad-managercp.qunarzz.com/f_ad_manager_f_ad_manager/c6428e69-3d5c-4aa2-bae0-75b350d3d040_912-170-2%20%E7%91%9E%E4%B8%BD.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
// 样式进行穿透，不受 scoped 限制
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
