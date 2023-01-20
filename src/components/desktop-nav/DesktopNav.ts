import type {
	APIV21EntitiesCustomer,
	APIV21EntitiesUser,
	APIV21EntitiesWarehouse,
} from '@whiplashmerch/whiplash-api-client-private';
import type { HttpClient } from '@whiplashmerch/whiplash-api-client-private';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import logoUrl from '@/assets/Whiplash-Brandmark-RGB.svg';
import CustomerMenu from '@/components/customer-menu/CustomerMenu.vue';
import SiteSearch from '@/components/site-search/SiteSearch.vue';
import UserMenu from '@/components/user-menu/UserMenu.vue';
import WarehouseMenu from '@/components/warhouse-menu/WarehouseMenu.vue';
import type { NavData } from '@/types';


export default defineComponent({
	name: 'DesktopNav',
	components: {
		SiteSearch,
		UserMenu,
		CustomerMenu,
		WarehouseMenu,
	},
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
			logoUrl,
			isDrawerActive: false,
			activeKey: null as string | null,
			customerKey: 'customer',
			warehouseKey: 'warehouse',
			searchKey: 'search',
			userKey: 'user',
		};
	},
	methods: {
		toggleNavItem(key: string) {
			this.activeKey = (this.activeKey === key) ? null : key;
		},
	},
});
