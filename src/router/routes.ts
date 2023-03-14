import HomeView from "../views/HomeView.vue";
import GroupView from "../views/UIComponent/GroupView.vue";
import PackageView from "../views/UIComponent/PackageView.vue";
import ComponentsView from "../views/UIComponent/ComponentsView.vue";
import PasswordGeneratorView from "../views/PasswordGenerator/PasswordGeneratorView.vue";
import QRCodeView from "../views/QRCodeGenerator/QRCodeView.vue";
import SentenceGeneratorView from "../views/SentenceGenerator/SentenceGeneratorView.vue";
import JSONFormatterViewVue from "../views/JSONFormatter/JSONFormatterView.vue";
import NotFound from "../views/404.vue";
import FakeApiView from "../views/FakeApiView.vue";

export const routes = [
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
        path: "/fake-api",
        name: "fake-api",
        component: FakeApiView
    },
    {
        path: '/:pathMatch(.*)',
        name: 'not-found',
        component:  NotFound
    }
]