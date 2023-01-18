import type { APIV21EntitiesWarehouse } from '@whiplashmerch/whiplash-api-client-private';
import type { HttpClient } from '@whiplashmerch/whiplash-api-client-private';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { NavData } from '@/types';
import { getAllWarehousesUrl } from '@/utils';

export default defineComponent({
	name: 'WarhouseMenu',
	props: {
		navData: {
			type: Object as PropType<NavData>,
			required: true,
		},
		httpClient: {
			type: Object as PropType<HttpClient>,
			required: true,
		},
		currentWarehouse: {
			type: Object as PropType<APIV21EntitiesWarehouse | null>,
			default: () => null,
		},
	},
	computed: {
		allWarehousesUrl(): string {
			return getAllWarehousesUrl(this.navData);
		},
	},
});
