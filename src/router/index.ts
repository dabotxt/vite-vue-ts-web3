import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../view/home/index.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Root',
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'Home',
                component: Home,
                meta: {
                    title: 'Metaease | Profile'
                }
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
