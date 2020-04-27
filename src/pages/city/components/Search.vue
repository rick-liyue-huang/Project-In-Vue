<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="please input..."
        v-model="keyword"
      />
    </div>
    <!-- 通过keyword来显示或者隐藏搜索列表 -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          No Result...
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  data: function() {
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
    hasNoData: function() {
      return !this.list.length;
    }
  },
  watch: {
    keyword: function() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      // 让列表实时反映输入内容
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
      }, 100);
    }
  },
  mounted: function() {
    this.scroll = new Bscroll(this.$refs["search"]); // 为了滚动
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl';

.search {
  height: 0.72rem;
  background: $bgColor;
  padding: 0 0.1rem;

  .search-input {
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    box-sizing: border-box;
    padding: 0 0.1rem;
  }
}
.search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem
    left: 0
    right: 0;
    bottom: 0;
    background: #eee;
    .search-item {
      line-height: .62rem;
      padding-left: .2rem;
      color: #666;
      background: #fff;
    }
  }
</style>
