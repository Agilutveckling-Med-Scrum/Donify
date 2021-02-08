import Vue from "vue";
import VueRouter from "vue-router";
import Walkthrough from "../views/Walkthrough.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Walkthrough",
    component: Walkthrough
  },
];

const router = new VueRouter({
  routes
});

export default router;
