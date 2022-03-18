import "@assets/styles/index.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./app.vue";
import Home from "@pages/home.vue";
import Teams from "@pages/teams.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/teams", component: Teams },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
