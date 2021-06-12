import Vue from "vue";
import VueRouter from "vue-router";
// import로 Vue, VueRouter를 불러오고 Vue.use(VueRouter)로 사용한다.
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";

Vue.use(VueRouter);

// 이 뷰 인스턴스가 라우터의 내용을 담게된다.
export const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      // path: url 주소
      component: NewsView,
      // component: url 주소로 갔을 때 표시될 컴포넌트
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
  ],
});
