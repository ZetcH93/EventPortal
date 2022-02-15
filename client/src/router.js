import { createWebHistory, createRouter } from "vue-router";
import Home from "@/Views/Main/Home";
import About from "@/Views/Main/About";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        props:{ title:'Welcome to the Event Portal'}
    },
    {
        path: "/about",
        name: "About",
        component: About,
        props:{ title:'About'}
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;