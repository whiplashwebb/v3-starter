import { layouts } from '@whiplashmerch/design-system';
import { createRouter, createWebHistory } from 'vue-router';

import { privateNavigationGuard, publicNavigationGuard } from '@/router/guards';
import { routeNames } from '@/router/route-names';
import ClientView from '@/views/client/ClientView.vue';
import LoginView from '@/views/login/LoginView.vue';
import NotFoundView from '@/views/not-found/NotFoundView.vue';
import UnauthorizedView from '@/views/unauthorized/UnauthorizedView.vue';
import WrapperView from '@/views/wrapper/Wrapper.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '',
			component: WrapperView,
			beforeEnter: privateNavigationGuard,
			meta: {
				layout: layouts.full,
			},
			children: [
				{
					path: '/client',
					name: routeNames.client,
					component: ClientView,
				},
			],
		},
		{
			path: '',
			component: WrapperView,
			beforeEnter: publicNavigationGuard,
			meta: {
				layout: layouts.minimal,
			},
			children: [
				{
					path: '/login',
					name: routeNames.login,
					component: LoginView,
				},
			],
		},
		{
			path: '/unauthorized',
			name: routeNames.unauthorized,
			component: UnauthorizedView,
			meta: {
				layout: layouts.minimal,
			},
		},
		// Not found needs to go last to work properly
		{
			path: '/:pathMatch(.*)*',
			name: routeNames.notFound,
			component: NotFoundView,
			meta: {
				layout: layouts.minimal,
			},
		},
	],
});

export default router;
