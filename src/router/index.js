import { createRouter, createWebHistory } from 'vue-router'
import beranda from '../pages/Home.vue'
import pakan from '../pages/Pakan.vue'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'beranda',
            component: beranda,
        },
        {
            path: '/pakan',
            name: 'pakan',
            component: pakan,
        }
    ]
})
export default router;