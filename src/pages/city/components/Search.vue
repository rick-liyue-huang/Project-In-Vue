<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="please input..." />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "CitySearch"
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
</style>