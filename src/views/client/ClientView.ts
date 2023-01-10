import { getApiV21Nav, HttpClient } from '@whiplashmerch/whiplash-api-client-private';
import { defineComponent } from 'vue';

import type { NavData } from '@/types';

export default defineComponent({
	name: 'ClientView',
	data() {
		return {
			output: null as any,
		};
	},
	methods: {
		loadData() {
			const token = '8YrF-5pgFc4jtSqDnEWBpTJjBV-jDYUTx7xikD_QMTU';
			const client = new HttpClient({
				baseURL: 'https://qa.getwhiplash.com',
				headers: {
					Authorization: `Bearer ${ token }`,
				},
			});

			getApiV21Nav(client)
				.then((response) => {
					this.output = response;
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
	mounted() {
		this.loadData();
	},
});
