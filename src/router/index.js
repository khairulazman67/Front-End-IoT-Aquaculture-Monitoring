import { createRouter, createWebHistory } from 'vue-router'
import beranda from '../pages/Home.vue'
import setting from '../pages/Setting.vue'
import login from '../pages/Login.vue'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'beranda',
            component: beranda,
        },
        {
            path: '/setting',
            name: 'setting',
            component: setting,
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        }
    ]
})
export default router;