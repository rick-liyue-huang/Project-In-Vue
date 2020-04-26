<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" class="icon-img-content" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data: function() {
    return {
      // 防止自动滚动
      swiperOption: {
        autoplay: false
      }
      // iconList: [
      //   {
      //     id: "0001",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
      //     desc: "one"
      //   },
      //   {
      //     id: "0002",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
      //     desc: "two"
      //   },
      //   {
      //     id: "0003",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
      //     desc: "three"
      //   },
      //   {
      //     id: "0004",
      //     imgUrl:
      //       "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
      //     desc: "four"
      //   },
      //   {
      //     id: "0005",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
      //     desc: "five"
      //   },
      //   {
      //     id: "0006",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
      //     desc: "six"
      //   },
      //   {
      //     id: "0007",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
      //     desc: "seven"
      //   },
      //   {
      //     id: "0008",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
      //     desc: "eight"
      //   },
      //   {
      //     id: "0009",
      //     imgUrl:
      //       "https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
      //     desc: "nine"
      //   }
      // ]
    };
  },
  computed: {
    pages: function() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        console.log("page: ----", page);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl';
@import '~@/assets/styles/mixins.styl';
.icons >>> .swiper-container
  width: 100%
  height: 0
  padding-bottom: 50%
  overflow hidden
.icons
  margin-top: .1rem
  .icon
    position relative
    width: 25%
    height: 0
    float: left
    padding-bottom: 25%
    overflow hidden
    .icon-img
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        height: 100%
        display: block
        margin: 0 auto
    .icon-desc
      position absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .44rem
      height: .44rem
      color: $darkTextColor
      text-align: center
      ellipsis()
</style>
