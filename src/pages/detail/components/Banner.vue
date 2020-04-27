<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1412/89/f92a6d44a1e9a92a307c991bc5cf1ba7.water.jpg_600x330_9223ba24.jpg"
        alt=""
      />
      <div class="banner-info">
        <div class="banner-title">东北虎林园</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6f5;</span>
          13
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
/* eslint-disable */
import CommonGallary from "@/common/gallary/Gallary";
export default {
  name: "DetailBanner",
  data: function() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/piao/fusion/2001/5e/474bb33aec227302.jpg",
        "http://img1.qunarzz.com/piao/fusion/2001/90/b7322f18acec8b02.jpg"
      ]
    };
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick: function() {
      this.showGallary = true;
    },
    handleGallaryClose: function() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img
    width: 100%;
  .banner-info
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      font-size: .32rem;
      padding: 0 .2rem;
      flex: 1;
    .banner-number
      line-height: .4rem
      height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
</style>
