import type { APIV21EntitiesWarehouse } from '@whiplashmerch/whiplash-api-client-private';
import type { HttpClient } from '@whiplashmerch/whiplash-api-client-private';
import { getApiV21Warehouses } from '@whiplashmerch/whiplash-api-client-private';
import { debounce } from 'lodash';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { NavData } from '@/types';
import type { AutocompleteResult } from '@/types';
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
	data() {
		return {
			results: [] as AutocompleteResult[],
			isLoading: false,
			selected: null,
		};
	},
	computed: {
		allWarehousesUrl(): string {
			return getAllWarehousesUrl(this.navData);
		},
	},
	methods: {
		getResults(query: string): void {
			if (!query || query.length < 3) {
				this.results = [];
				return;
			}

			this.isLoading = true;
			getApiV21Warehouses(this.httpClient, {
				search: `{ "name_start": "${ query }" }`,
				sort: 'name asc',
				fields: 'id, name',
				// TODO : remove this ignore once the client is fixed
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				page: 1,
				per_page: 5,
			})
				.then((warehouses ) => {
					this.results = warehouses as AutocompleteResult[];
				})
				.catch((e) => {
					// TODO : better error handling!
					console.error(e);
				});
		},
		getDebouncedResults: debounce(function(query: string) {
			// TS gets confused about this here. It does work. Maybe don't use lodash?
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			this.getResults(query);
		}, 500),
	},
});
