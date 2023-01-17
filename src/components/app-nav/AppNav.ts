import type {
	APIV21EntitiesCustomer,
	APIV21EntitiesUser,
	APIV21EntitiesWarehouse,
} from '@whiplashmerch/whiplash-api-client-private';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import logoUrl from '@/assets/Whiplash-Brandmark-RGB.svg';
import type { NavData } from '@/types';


export default defineComponent({
	name: 'AppNav',
	props: {
		navData: {
			type: Object as PropType<NavData>,
			required: true,
		},
		currentUser: {
			type: Object as PropType<APIV21EntitiesUser>,
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
