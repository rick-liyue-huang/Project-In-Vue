<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <!-- 轮播图 -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-image" :src="item" alt="" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true
        // swiper插件只要监听到本身或者父级元素dom结构发生变化，会自动的自我刷新，从而解决宽度的问题
      }
    };
  },
  methods: {
    handleGallaryClick: function() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit;
.container
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wrapper
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .gallary-image
      width: 100%;
    .swiper-pagination
      color: #fff;
      bottom: -1rem;
</style>
