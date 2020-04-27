/* eslint-disable */
export default {
  changeCity: function(state, city) {
    state.city = city; // 相当于 reducer, 更改state的状态
    try {
      localStorage.city = city; // 将 city 存入 localStorage
    } catch (e) {}
  }
};
