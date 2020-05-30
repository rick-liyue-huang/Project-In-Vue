//  vuex
import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  // state: {
  //   city: defaultCity
  // },

  //this.$store.dispatch("changeCity", city);
  // -> ctx.commit("changeCity", city);
  // -> state.city = city;

  // actions: {
  //   changeCity(ctx, city) {
  //     // console.log(city);
  //     ctx.commit("changeCity", city);
  //   }
  // },
  mutations: mutations,

  // 类似于组件中的computed
  getters: {
    doubleCity(state) {
      return state.city + " " + state.city;
    }
  }
});
