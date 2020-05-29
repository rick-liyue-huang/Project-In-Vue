<template>
  <div>
    <div class="recommend-title">Recommend</div>
    <ul>
      <li
        class="recommend-item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">Detail</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
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
    };
  }
};
</script>

<style lang="stylus" scoped>
/* min-width: 0 */
@import '~@/assets/styles/mixins.styl'
.recommend-title
  line-height: .8rem
  background: #eee
  text-indent: .2rem
  margin-top: .2rem
.recommend-item
  display: flex
  height: 1.9rem
  overflow: hidden
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      font-size: .28rem
      color: #ccc
      ellipsis()
    .item-button
      background: #ff9300
      padding: 0 .1rem
      border-radius: .06rem
      margin-top: .2rem
      line-height: .44rem
      margin-top: .16rem
      color: #fff
</style>
