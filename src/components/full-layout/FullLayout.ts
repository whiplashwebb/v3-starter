import type { APIV21EntitiesUser } from '@whiplashmerch/whiplash-api-client-private';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import AppNav from '@/components/app-nav/AppNav.vue';
import MobileNav from '@/components/mobile-nav/MobileNav.vue';
import NavDrawer from '@/components/nav-drawer/NavDrawer.vue';
import NavMenu from '@/components/NavMenu/NavMenu.vue';
import { labeledSearchTypes, searchTypes } from '@/constants';
import type { NavData } from '@/types';

export default defineComponent({
	name: 'FullLayout',
	props: {
		navData: {
			type: Object as PropType<NavData>,
			required: true,
		},
		currentUser: {
			type: Object as PropType<APIV21EntitiesUser>,
			required: true,
		},
	},
	data() {
		return {
			userDrawerActive: false,
			mainDrawerActive: true,
			labeledSearchTypes,
			searchType: searchTypes.orders,
			searchText: '',
		};
	},
	components: {
		AppNav,
		MobileNav,
		NavDrawer,
		NavMenu,
	},
});
