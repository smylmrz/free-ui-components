import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GroupView from "../views/GroupView.vue";
import ComponentsView from "../views/ComponentsView.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:package/:category/:group",
      name: "group",
      component: GroupView,
    },
    {
      path: "/components",
      name: "components",
      component: ComponentsView,
    },
  ],
});
