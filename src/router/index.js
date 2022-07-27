import { createRouter, createWebHistory } from 'vue-router'
import beranda from '../pages/Home.vue'
import setting from '../pages/Setting.vue'
import login from '../pages/Login.vue'
import report from '../pages/Report.vue'

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
        },
        {
            path: '/report',
            name: 'report',
            component: report,
        }
    ]
})
export default router;