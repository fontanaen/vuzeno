import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "vue-sonner/style.css";

createApp(App).use(router).mount("#app");
