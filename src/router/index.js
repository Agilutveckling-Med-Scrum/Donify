import Vue from "vue";
import VueRouter from "vue-router";
import Walkthrough from "../views/Walkthrough.vue";

import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Walkthrough",
    component: Walkthrough
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = new VueRouter({
  routes
});

export default router;
