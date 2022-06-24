import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Productos from "../views/ProductosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/productos",
    name: "Productos",
    component: Productos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
