import type { NavigationGuardWithThis } from 'vue-router';

import { DEFAULT_PRIVATE_ROUTE, DEFAULT_PUBLIC_ROUTE } from '@/router/route-names';
import { useUserStore } from '@/stores/user';

export const publicNavigationGuard: NavigationGuardWithThis<undefined> = async () => {
	const userStore = useUserStore();

	if (userStore.token) {
		return { name: DEFAULT_PRIVATE_ROUTE };
	}
};

export const privateNavigationGuard: NavigationGuardWithThis<undefined> = async () => {
	const userStore = useUserStore();

	if (!userStore.token) {
		// window.location.href = `${ userStore.baseUrl }/login?redirect_to=${ encodeURIComponent(window.location.href) }`;
		// return false;

		return { name: DEFAULT_PUBLIC_ROUTE };
	}
};
