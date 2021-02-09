import Vue from "vue";
import VueRouter from "vue-router";
import Walkthrough from "../views/Walkthrough.vue";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Walkthrough",
    name: "Walkthrough",
    component: Walkthrough
  }
];

const router = new VueRouter({
  routes
});

export default router;
