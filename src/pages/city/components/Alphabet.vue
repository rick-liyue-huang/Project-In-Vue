<template>
  <ul class="list">
    <li
      :ref="item"
      class="item"
      v-for="item of letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
/* eslint-disable */
export default {
  name: "CityAlphabet",
  data: function() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null // 数据截流
    };
  },
  computed: {
    letters: function() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters; // ['A', 'B']
    }
  },
  props: {
    cities: Object
  },
  // 钩子
  updated: function() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick: function(e) {
      // console.log(e.target.innerText);
      // 兄弟组件通过父子传递
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart: function() {
      this.touchStatus = true;
      console.log("start");
    },
    handleTouchMove: function(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        // 处理数据节流
        this.timer = setTimeout(() => {
          // const startY = this.$refs["A"][0].offsetTop;
          // console.log(startY);
          const touchY = e.touches[0].clientY - 79;
          // console.log(touchY);
          const index = Math.floor((touchY - this.startY) / 20);
          // console.log(index);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 10);
      }
    },
    handleTouchEnd: function() {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: .4rem;

  .item {
    text-align: center;
    line-height: .4rem
    color: $bgColor;
  }
}
</style>
