import { createRouter, createWebHistory } from 'vue-router';

import StyleGuideView from '../views/style-guide/StyleGuideView.vue';

import { routeNames } from '@/router/route-names';
import ClientView from '@/views/client/ClientView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: routeNames.styleGuide,
			component: StyleGuideView,
		},
		{
			path: '/client',
			name: routeNames.client,
			component: ClientView,
		},
	],
});

export default router;
