import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('src/view/home/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
