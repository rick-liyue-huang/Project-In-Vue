export default {
  changeCity(state, city) {
    state.city = city;
    // 使用localStorage
    try {
      localStorage.city = city;
    } catch (e) {}
  }
};
