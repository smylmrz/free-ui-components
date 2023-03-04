import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GroupView from "../views/GroupView.vue";
import ComponentsView from "../views/ComponentsView.vue";
import PackageView from "../views/PackageView.vue";
import QRCodeView from "../views/QRCode/QRCodeView.vue";
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
      path: '/qr-code-generator',
      name: 'qr-code-generator',
      component: QRCodeView
    },
    {
      path: '/sentence-generator',
      name: 'sentence-generator',
      component: SenteceGeneratorView
    }
    // todo: add a new page for generators
    // todo: update homepage
  ],
});
