<template>
  <div class="list" ref="wrapper">
    <!-- 这样布局符合 better-scroll 应用 -->
    <div>
      <div class="area">
        <div class="title border-topbottom">Current</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">Hot</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item border-bottom">alaer</div>
          <div class="item border-bottom">alaer</div>
          <div class="item border-bottom">alaer</div>
          <div class="item border-bottom">alaer</div>
          <div class="item border-bottom">alaer</div>
        </div>
        <div class="title">A</div>
        <div class="item-list">
          <div class="item border-bottom">alaer</div>
          <div class="item border-bottom">alaer</div>
          <div class="item border-bottom">alaer</div>
          <div class="item border-bottom">alaer</div>
          <div class="item border-bottom">alaer</div>
        </div>
        <div class="title">A</div>
        <div class="item-list">
          <div class="item border-bottom">alaer</div>
          <div class="item border-bottom">alaer</div>
          <div class="item border-bottom">alaer</div>
          <div class="item border-bottom">alaer</div>
          <div class="item border-bottom">alaer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Bscroll from "better-scroll";

export default {
  name: "CityList",
  mounted: function() {
    // 使用 better-scroll 可以实现上下拉动， 但是需要设置 overflow:hidden
    this.scroll = new Bscroll(this.$refs.wrapper);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl';

// 更改 1像素边框的颜色
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  // 防止页面滚动
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    padding: 0.1rem;
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      width: 33.33%;
      float: left;

      .button {
        text-align: center;
        margin: 0.1rem;
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
