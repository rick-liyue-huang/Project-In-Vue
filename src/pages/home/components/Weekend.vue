<template>
  <div>
    <div class="title">Weekend Play</div>
    <ul>
      <!-- 因为引入了一像素的边框 -->
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-image" />
        </div>

        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "HomeWeekend",
  data: function() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1505/e3/e9761259adfc1d.jpg_r_640x214_21b96532.jpg",
          title: "冰城踏青",
          desc: "黑龙江省哈尔滨市阿城区哈牡公路鸽子洞地区"
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6c/37b9116a55d226.jpg_r_640x214_b6296033.jpg",
          title: "哈尔滨必游",
          desc: "黑龙江省哈尔滨市阿城区哈牡公路鸽子洞地区"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';
.title
  line-height: .8rem
  background: #eee
  text-indent: .2rem
  margin-top: .2rem
.item-img-wrapper
  height: 0
  overflow: hidden
  padding-bottom: 33.9%
  .item-image
    width: 100%
.item-info
  padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()
</style>

// min-width: 0 match mixins
