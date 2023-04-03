import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
    base: '/',
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: () => import('@/pages/Home.vue') },
        { path: '/page', name: 'page', component: () => import('@/pages/About.vue') },
    ],
})
