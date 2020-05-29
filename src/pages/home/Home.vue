<template>
  <div>
    <home-header />
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
export default {
  name: "Home",
  components: {
    HomeHeader
  }
};
</script>

<style lang="stylus">
.home {
  font-size: 50px;
}
</style>
