import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/tailwind.css";
import init from "./util/cduDataParser";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");

init();
