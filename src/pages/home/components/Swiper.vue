<template>
  <div class="wrapper">
    <!-- 在 main.js中引入了swiper因此这里可以使用 -->
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        // 这些选项都是swiper自带的
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_600x330_1abc2773.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1911/29/29d9b9078000774fa3.img.jpg_600x330_d22705b4.jpg"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_600x330_8db87481.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
/* 样式穿透，这样就不受scoped限制 */
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
.wrapper
  width: 100%
  height: 0
  overflow: hidden
  padding-bottom: 55%
  background: #eee
  .swiper-img
    width: 100%
</style>
