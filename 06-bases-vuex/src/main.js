import { createApp } from "vue";
import store from "./store/index";
import App from "./App.vue";

import "./assets/main.css";

createApp(App).use(store).mount("#app");
