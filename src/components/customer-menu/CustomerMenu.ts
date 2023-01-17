import type { APIV21EntitiesCustomer } from '@whiplashmerch/whiplash-api-client-private';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { NavData } from '@/types';

export default defineComponent({
	name: 'CustomerMenu',
	props: {
		navData: {
			type: Object as PropType<NavData>,
			required: true,
		},
		currentCustomer: {
			type: Object as PropType<APIV21EntitiesCustomer | null>,
			default: () => null,
		},
	},
});
