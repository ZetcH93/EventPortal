import {createWebHistory, createRouter} from "vue-router";
import Home from "@/Views/Main/Home";
import About from "@/Views/Main/About";
import News from "@/Views/Main/News";
import Organizations from "@/Views/Main/Organizations";
import Contact from "@/Views/Main/Contact";
import Login from "@/Views/Main/Login";


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
    {
        path: "/news",
        name: "News",
        component: News,
    },
    {
        path: "/organizations",
        name: "Organizations",
        component: Organizations,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;