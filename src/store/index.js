/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: "北京"
  },
  actions: {
    changeCity: function(ctx, city) {
      // console.log(ctx, city);
      ctx.commit("changeCity", city);
    }
  },
  mutations: {
    changeCity: function(state, city) {
      state.city = city; // 相当于 reducer
    }
  }
});
