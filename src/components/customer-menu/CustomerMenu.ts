import type { APIV21EntitiesCustomer } from '@whiplashmerch/whiplash-api-client-private';
import type { HttpClient } from '@whiplashmerch/whiplash-api-client-private';
import { getApiV21Customers } from '@whiplashmerch/whiplash-api-client-private';
import { debounce } from 'lodash';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { AutocompleteResult, NavData } from '@/types';
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
	data() {
		return {
			results: [] as AutocompleteResult[],
			isLoading: false,
			selected: null,
		};
	},
	computed: {
		allCustomersUrl(): string {
			return getAllCustomersUrl(this.navData);
		},
	},
	methods: {
		getResults(query: string): void {
			if (!query || query.length < 3) {
				this.results = [];
				return;
			}

			this.isLoading = true;
			getApiV21Customers(this.httpClient, {
				search: `{ "name_start": "${ query }" }`,
				sort: 'name asc',
				fields: 'id, name',
				// TODO : remove this ignore once the client is fixed
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				page: 1,
				per_page: 5,
			})
				.then((customers ) => {
					this.results = customers as AutocompleteResult[];
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
