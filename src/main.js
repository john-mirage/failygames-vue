import "@assets/styles/index.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./app.vue";
import Home from "@pages/home.vue";
import Leaderboards from "@pages/leaderboards.vue";
import Teams from "@pages/teams.vue";
import Live from "@pages/live.vue";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/leaderboards",
        component: Leaderboards
    },
    {
        path: "/teams",
        component: Teams
    },
    {
        path: "/live",
        component: Live
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
