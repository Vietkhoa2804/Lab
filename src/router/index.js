import { createRouter, createWebHistory } from "vue-router";
import Home from "../labs/Lab7/Bai1/Home.vue";
import About from "../labs/Lab7/Bai1/About.vue";
import ProductDetail from "../labs/Lab7/Bai2/ProductDetail.vue";
import Login from "../labs/Lab7/Bai3.vue";
import Dashboard from "../labs/Lab7/Bai4/Dashboard.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/product/:id", component: ProductDetail },
  { path: "/login", component: Login },
  { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth) && !localStorage.getItem("token")) {
    next({ path: "/login" });
  } else {
    next();
  }
});

export default router; 