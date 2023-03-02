import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GroupView from "../views/GroupView.vue";
import ComponentsView from "../views/ComponentsView.vue";
import PackageView from "../views/PackageView.vue";
import PasswordGeneratorView from "../views/Password/PasswordGeneratorView.vue";
import SenteceGeneratorView from "../views/Sentence/SenteceGeneratorView.vue";

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
      path: "/:package/:packageId",
      name: "package",
      component: PackageView,
    },
    {
      path: "/components",
      name: "components",
      component: ComponentsView,
    },
    {
      path: '/password-generator',
      name: 'password-generator',
      component: PasswordGeneratorView
    },
    {
      path: '/sentence-generator',
      name: 'sentence-generator',
      component: SenteceGeneratorView
    }
  ],
});
