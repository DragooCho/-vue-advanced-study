import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutation.js";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    fetchedNews(state) {
      return state.news;
    },
    userInfo(state) {
      return state.user;
    },
    fetchedItem(state) {
      return state.item;
    },
  },
  mutations,
  actions,
});
