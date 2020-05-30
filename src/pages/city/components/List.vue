<template>
  <div class="list" ref="wrapper">
    <!-- 符合 better-scroll要求 -->
    <div>
      <div class="area">
        <div class="title border-topbottom">current city</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">Melbourne</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">Hot city</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >{{ innerItem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 实现上下屏幕滚动
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  }
};
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  .title
    line-height: 0.54rem
    background: #eee
    padding-left: 0.2rem
    color: #666
    font-size: 0.26rem
  .button-list
    padding: 0.1rem
    overflow: hidden
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      width: 33.33%
      float: left
      .button
        margin: 0.1rem
        padding: 0.1rem 0
        text-align: center
        border: 0.02rem solid #ccc
        border-radius: 0.06rem
  .item-list
    .item
      line-height: 0.76rem
      padding-left: 0.2rem
</style>
