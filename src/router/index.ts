import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory('/portfolio-vue-js/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/experiences',
            name: 'experiences',
            component: () => import('../views/Experiences.vue'),
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('../views/Projects.vue'),
        },
    ],
})

export default router
