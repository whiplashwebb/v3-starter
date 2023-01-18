import type { APIV21EntitiesCustomer } from '@whiplashmerch/whiplash-api-client-private';
import type { HttpClient } from '@whiplashmerch/whiplash-api-client-private';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { NavData } from '@/types';
import { getAllCustomersUrl } from '@/utils';

export default defineComponent({
	name: 'CustomerMenu',
	props: {
		navData: {
			type: Object as PropType<NavData>,
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
	},
	computed: {
		allCustomersUrl(): string {
			return getAllCustomersUrl(this.navData);
		},
	},
});
