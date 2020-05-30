<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://imgs.qunarzz.com/p/tts1/1912/59/43e15ccc37a4d902.jpg_750x440_ac92553b.jpg"
        alt
      />
      <div class="banner-info">
        <div class="banner-title">title</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6f5;</span>66
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose" />
  </div>
</template>

<script>
import CommonGallary from "../../../common/gallary/Gallary";
export default {
  name: "DetailBanner",
  data() {
    return {
      imgs: [
        "https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg",
        "https://imgs.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg"
      ],
      showGallary: false
    };
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner
  overflow: hidden
  height: 0
  padding-bottom: 55%
  position: relative
  color: #fff
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: 0.6rem
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
    .banner-title
      flex: 1
      font-size: 0.32rem
      padding: 0 0.2rem
    .banner-number
      height: 0.32rem
      line-height: 0.32rem
      border-radius: 0.2rem
      backgound: rgba(0, 0, 0, 0.8)
      font-size: 0.24rem
      margin-top: 0.14rem
      padding: 0 0.4rem
      .banner-icon
        font-size: 0.24rem
</style>