import { layouts } from '@whiplashmerch/design-system';
import { createRouter, createWebHistory } from 'vue-router';

import { routeNames } from '@/router/route-names';
import { useUserStore } from '@/stores/user';
import ClientView from '@/views/client/ClientView.vue';
import LoginView from '@/views/login/LoginView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/client',
			name: routeNames.client,
			component: ClientView,
		},
		{
			path: '/login',
			name: routeNames.login,
			component: LoginView,
			meta: {
				layout: layouts.minimal,
			},
		},
	],
});

router.beforeEach(() => {
	const userStore = useUserStore();

	if(!userStore.token) {
		window.location.href = `${ userStore.baseUrl }/login?redirect_to=${ encodeURIComponent(window.location.href) }`;
		return false;
	}
});

export default router;
