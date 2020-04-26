<template>
  <div>
    <div class="title">recommend title</div>
    <ul>
      <!-- 因为引入了一像素的边框 -->
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img :src="item.imgUrl" alt="" class="item-image" />
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
/* eslint-disable */
export default {
  name: "HomeRecommend",
  data: function() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1704/b5/b5ff021abb27e19da3.img.jpg_200x200_1c184696.jpg",
          title: "哈尔滨北方森林动物园",
          desc: "黑龙江省哈尔滨市阿城区哈牡公路鸽子洞地区"
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1412/89/f92a6d44a1e9a92a307c991bc5cf1ba7.water.jpg_200x200_fdc2fb80.jpg",
          title: "东北虎林园",
          desc: "黑龙江省哈尔滨市阿城区哈牡公路鸽子洞地区"
        },
        {
          id: "0003",
          imgUrl:
            "https://imgs.qunarzz.com/sight/p0/1609/8d/8d7623bfa134815ca3.water.jpg_200x200_17279330.jpg",
          title: "哈尔滨香炉山",
          desc: "黑龙江省哈尔滨市阿城区哈牡公路鸽子洞地区"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';
.title
  line-height: .8rem
  background: #eee
  text-indent: .2rem
  margin-top: .2rem
.item
  display: flex
  height: 1.9rem
  overflow hidden
  .item-image
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
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: .44rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: .06rem
      margin-top: .1rem
      color: #fff
</style>

// min-width: 0 match mixins
