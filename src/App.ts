import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import AppNav from '@/components/app-nav/AppNav.vue';
import MobileNav from '@/components/mobile-nav/MobileNav.vue';
import NavDrawer from '@/components/nav-drawer/NavDrawer.vue';
import { navMock } from '@/constants';
import { useUserStore } from '@/stores/user';


export default defineComponent({
	name: 'AppView',
	components: {
		RouterView,
		AppNav,
		MobileNav,
		NavDrawer,
	},
	setup() {
		return {
			userStore:  useUserStore(),
		};
	},
	data() {
		return {
			navData: navMock,
			userDrawerActive: false,
			mainDrawerActive: false,
		};
	},
	mounted() {
		this.userStore.init()
			.catch((e) => {
				console.error('Init error in app', e);
			});
	},
});
