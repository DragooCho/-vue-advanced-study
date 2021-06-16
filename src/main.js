import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes/index.js"; // routes 폴더로 지어야 다른 폴더하고 확연한 구분을 할 수 있다.
import { store } from "./store/index.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
