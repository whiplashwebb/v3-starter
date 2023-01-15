import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import AppNav from '@/components/app-nav/AppNav.vue';
import MobileNav from '@/components/mobile-nav/MobileNav.vue';
import NavDrawer from '@/components/nav-drawer/NavDrawer.vue';
import type { NavData } from '@/types';

export default defineComponent({
	name: 'FullLayout',
	props: {
		navData: {
			type: Object as PropType<NavData>,
			required: true,
		},
	},
	data() {
		return {
			userDrawerActive: false,
			mainDrawerActive: false,
		};
	},
	components: {
		AppNav,
		MobileNav,
		NavDrawer,
	},
});
