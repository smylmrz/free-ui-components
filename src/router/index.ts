import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GroupView from "../views/UIComponent/GroupView.vue";
import ComponentsView from "../views/UIComponent/ComponentsView.vue";
import PackageView from "../views/UIComponent/PackageView.vue";
import QRCodeView from "../views/QRCodeGenerator/QRCodeView.vue";
import PasswordGeneratorView from "../views/PasswordGenerator/PasswordGeneratorView.vue";
import SentenceGeneratorView from "../views/SentenceGenerator/SentenceGeneratorView.vue";
import NotFound from "../views/404.vue"
import JSONFormatterViewVue from "../views/JSONFormatter/JSONFormatterView.vue";
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
      component: SentenceGeneratorView
    },
    {
      path: "/json-formatter",
      name: "json-formatter",
      component: JSONFormatterViewVue
    },
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component:  NotFound
    }
  ],
});
