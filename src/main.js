import "modern-normalize/modern-normalize.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(createPinia());
app.use(ElementPlus, { size: "default", zIndex: 3000 });
app.mount("#app");
