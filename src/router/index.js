import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/projects/:id', name: 'projects-detail', component: ProjectDetailPage },
    ]
});

export { router };