import { createWebHistory, createRouter } from "vue-router";
import Home from "@/Views/Main/Home";
import About from "@/Views/Main/About";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;