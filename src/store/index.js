/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   city: defaultCity
  // },
  state,
  actions: {
    changeCity: function(ctx, city) {
      // console.log(ctx, city);
      ctx.commit("changeCity", city);
    }
  },
  mutations,
  // 有些类似 组件中的computed属性
  getters: {
    doubleCity: function(state) {
      return state.city + " " + state.city;
    }
  }
});
