import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import App1 from "../views/App1.vue";
const basename = process.env.NODE_ENV === "production" ? "/demo-main-vue/" : "";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/app1",
    name: "app1",
    component: App1,
  },
  {
    path: "/",
    redirect: "/home",
  },
];

const router = new VueRouter({
  mode: "history",
  base: basename,
  routes,
});

export default router;
