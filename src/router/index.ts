import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'DftBase',
        component: () => import('../container/DftBase.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../pages/Home.vue'),
            }
        ]


    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
