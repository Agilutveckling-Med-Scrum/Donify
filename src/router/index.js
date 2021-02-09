import Vue from "vue";
import VueRouter from "vue-router";
import Walkthrough from "../views/Walkthrough.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Walkthrough",
    component: Walkthrough
  },
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
