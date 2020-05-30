<template>
  <div>
    <div class="recommend-title">Recommend</div>
    <ul>
      <router-link
        tag="li"
        class="recommend-item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <!-- :to="'/detail' + item.id" 动态绑定 -->
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">Detail</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  },
  data() {
    return {
      /*
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_200x200_444cc7e8.jpg",
          title: "Title",
          desc: "Description"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_200x200_444cc7e8.jpg",
          title: "Title",
          desc: "Description"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_200x200_444cc7e8.jpg",
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
.recommend-title
  line-height: 0.8rem
  background: #eee
  text-indent: 0.2rem
  margin-top: 0.2rem
.recommend-item
  display: flex
  height: 1.9rem
  overflow: hidden
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: 0.1rem
  .item-info
    flex: 1
    padding: 0.1rem
    min-width: 0
    .item-title
      line-height: 0.54rem
      font-size: 0.32rem
      ellipsis()
    .item-desc
      line-height: 0.4rem
      font-size: 0.28rem
      color: #ccc
      ellipsis()
    .item-button
      background: #ff9300
      padding: 0 0.1rem
      border-radius: 0.06rem
      margin-top: 0.2rem
      line-height: 0.44rem
      margin-top: 0.16rem
      color: #fff
</style>
