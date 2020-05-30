<template>
  <div class="list" ref="wrapper">
    <!-- 符合 better-scroll要求 -->
    <div>
      <div class="area">
        <div class="title border-topbottom">current city</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              <!-- {{ this.$store.state.city }} -->
              {{ this.currentCity }}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">Hot city</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{ innerItem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 实现上下屏幕滚动
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, { click: true });
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
  },
  watch: {
    letter() {
      // console.log(this.letter);
      // betterscroll 自带的
      if (this.letter) {
        const ele = this.$refs[this.letter][0]; // 这是数组
        this.scroll.scrollToElement(ele);
      }
    }
  },
  methods: {
    handleCityClick(city) {
      // alert(city);
      // 调用 vuex actions
      // this.$store.dispatch("changeCity", city);
      // this.$store.commit("changeCity", city);
      this.changeCity(city); // 因为使用了 mapMutations
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
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
