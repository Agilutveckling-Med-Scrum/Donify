import Vue from "vue";
import VueRouter from "vue-router";
import Walkthrough from "../views/Walkthrough.vue";
<<<<<<< HEAD
import Home from "../views/Home.vue";
=======
>>>>>>> 9fe1b95527a030da38c64c5ebcd00f9baf737cc1

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Walkthrough",
    component: Walkthrough
<<<<<<< HEAD
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "About",
    component: About
=======
>>>>>>> 9fe1b95527a030da38c64c5ebcd00f9baf737cc1
  }
];

const router = new VueRouter({
  routes
});

export default router;
