import { createApp } from "vue";
import { router } from "./router";
import { createHead } from "@vueuse/head";
import "./style.css";
import App from "./App.vue";

const head = createHead()

createApp(App).use(head).use(router).mount("#app");
