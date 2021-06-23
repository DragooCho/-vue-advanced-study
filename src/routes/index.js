import Vue from "vue";
import VueRouter from "vue-router";
// import로 Vue, VueRouter를 불러오고 Vue.use(VueRouter)로 사용한다.
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

Vue.use(VueRouter);

// 이 뷰 인스턴스가 라우터의 내용을 담게된다.
export const router = new VueRouter({
  mode: "history", // mode: 'history' 이 코드가 주소창의 해시값(#)을 제거해준다.
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
