import { createWebHistory, createRouter } from "vue-router";
import Home from "@/Views/Main/Home";
import About from "@/Views/Main/About";
import News from "@/Views/Main/News";
import Organizations from "@/Views/Main/Organizations";
import Contact from "@/Views/Main/Contact";
import Login from "@/Views/Main/Login";
import Register from "@/Views/Main/Register";
import Base from "@/Views/Main/Base";

const routes = [
    {
        path: "/",
        name: "Base",
        component: Base,
        children: [
            {
                path: "",
                name: "Home",
                component: Home,
                meta: {
                    viewTitle: "Welcome to the Event Portal!",
                    description:
                        "Find new organizations to join, upcoming events or news!",
                },
            },
            {
                path: "about",
                name: "About",
                component: About,
                meta: {
                    title: "About",
                    viewTitle: "About",
                },
            },
            {
                path: "news",
                name: "News",
                component: News,
                meta: {
                    title: "News",
                    viewTitle: "News",
                },
            },
            {
                path: "organizations",
                name: "Organizations",
                component: Organizations,
                meta: {
                    title: "Organizations",
                    viewTitle: "Organizations",
                    description:
                        "Here you can search the register in the area of activities you are interested in.",
                },
            },
            {
                path: "contact",
                name: "Contact",
                component: Contact,
                meta: {
                    title: "Contact",
                    viewTitle: "Contact",
                },
            },
        ]
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Login",
            viewTitle: "Login",
        },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: "Login",
            viewTitle: "Register",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "EventPortal";
    next();
});

export default router;
