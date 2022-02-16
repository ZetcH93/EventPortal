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
        meta: {
            viewTitle: 'Welcome to the Event Portal!',
            desc: 'Find new organizations to join, upcoming events or news!'
        }
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {
            title: 'About',
            viewTitle: 'About',
        }
    },
    {
        path: "/news",
        name: "News",
        component: News,
        meta: {
            title: 'News',
            viewTitle: 'News',
        }
    },
    {
        path: "/organizations",
        name: "Organizations",
        component: Organizations,
        meta: {
            title: 'Organizations',
            viewTitle: 'Organizations',
        }
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: {
            title: 'Contact',
            viewTitle: 'Contact',
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: 'Login',
            viewTitle: 'Login',
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'EventPortal';
    next();
});

export default router;