import type {
	APIV21EntitiesCustomer,
	APIV21EntitiesUser,
	APIV21EntitiesWarehouse,
} from '@whiplashmerch/whiplash-api-client-private';
import type { HttpClient } from '@whiplashmerch/whiplash-api-client-private';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import DesktopNav from '@/components/desktop-nav/DesktopNav.vue';
import MobileMainMenu from '@/components/mobile-main-menu/MobileMainMenu.vue';
import MobileNav from '@/components/mobile-nav/MobileNav.vue';
import SiteSearch from '@/components/site-search/SiteSearch.vue';
import UserAccordion from '@/components/user-accordion/UserAccordion.vue';
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
		httpClient: {
			type: Object as PropType<HttpClient>,
			required: true,
		},
		currentCustomer: {
			type: Object as PropType<APIV21EntitiesCustomer | null>,
			default: () => null,
		},
		currentWarehouse: {
			type: Object as PropType<APIV21EntitiesWarehouse | null>,
			default: () => null,
		},
	},
	data() {
		return {
			userDrawerActive: false,
			mainDrawerActive: false,
		};
	},
	components: {
		DesktopNav,
		MobileNav,
		SiteSearch,
		UserAccordion,
		MobileMainMenu,
	},
});
