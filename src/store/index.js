import { createStore } from "vuex";

export default createStore({
  modules: {},
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
