import { createStore } from "vuex";

const store = createStore({
  state: {
    isLogin: "",
  },
  mutations: {
    isLogin(state, msg) {
      state.isLogin = msg;
      localStorage.setItem("isLogin", msg);
    },
  },
  getters: {
    isLogin: (state) => state.isLogin,
  },
});

export default store;
