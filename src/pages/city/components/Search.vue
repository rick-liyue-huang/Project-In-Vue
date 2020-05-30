<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="please input city" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="(item, index) of list"
          :key="index"
          @click="handleCityClick(item.name)"
        >{{ item.name }}</li>
        <li class="search-item border-bottom" v-show="hasNoData">on matched cites</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  props: {
    cities: Object
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 200);
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
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl'
.search
  height: 0.72rem
  background: $bgColor
  padding: 0 0.1rem
  .search-input
    height: 0.62rem
    line-height: 0.62rem
    width: 100%
    text-align: center
    border-radius: 0.06rem
    color: #666
    padding: 0 0.1rem
    box-sizing: border-box
.search-content
  z-index: 1
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  background: #eee
  .search-item
    line-height: 0.62rem
    padding-left: 0.2rem
    color: #666
    background: #fff
</style>