import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
    },
    subtractToCounter(state, payload) {
      state.counter = state.counter - payload;
    },
    resetCounter(state) {
      state.counter = 0;
    },
  },
});

export default store;
