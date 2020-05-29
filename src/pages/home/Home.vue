<template>
  <div>
    <div class="home">home</div>
    <router-link to="/list" class="home">list</router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="stylus">
.home {
  font-size: 50px;
}
</style>
