<template>
  <div>
    <div class="weekend-title">Weekend Play</div>
    <ul>
      <li
        class="weekend-item border-bottom"
        v-for="item of weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
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
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
  },
  data() {
    return {
      /*
      weekendList: [
        {
          id: "0001",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20204/17c0f864dd33bb2c2b2be2299c6da59d.jpeg",
          title: "Title",
          desc: "Description"
        },
        {
          id: "0002",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20205/893a01295971bcf57c6ebd52bcebb91d.jpg",
          title: "Title",
          desc: "Description"
        }
      ]
      */
    };
  }
};
</script>

<style lang="stylus" scoped>
/* min-width: 0 */
@import '~@/assets/styles/mixins.styl'
.weekend-title
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.weekend-img-wrapper
  height: 0
  overflow: hidden
  padding-bottom: 37.09%
.item-img
  width: 100%
.item-info
  padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    font-size: .28rem
    color: #ccc
    ellipsis()
</style>
