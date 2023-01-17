import type { APIV21EntitiesUser } from '@whiplashmerch/whiplash-api-client-private';
import type { APIV21EntitiesCustomer, APIV21EntitiesWarehouse } from '@whiplashmerch/whiplash-api-client-private';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import CustomerMenu from '@/components/customer-menu/CustomerMenu.vue';
import UserMenu from '@/components/user-menu/UserMenu.vue';
import WarehouseMenu from '@/components/warhouse-menu/WarehouseMenu.vue';
import type { NavData } from '@/types';

enum userSections {
	user = 0,
	customer = 1,
	warehouse = 2,
}

export default defineComponent({
	name: 'UserAccordion',
	components: {
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
			activeSection: userSections.warehouse,
			userSections,
			animation: 'slide',
			customerSearchText: '',
		};
	},
	methods: {
		isOpen(section: userSections): boolean {
			return this.activeSection === section;
		},
		handleOpen(section: userSections): void {
			this.activeSection = section;
		},
	},
});
