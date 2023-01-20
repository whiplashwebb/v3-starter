import { defineComponent } from 'vue';

import { useUserStore } from '@/stores/user';
import type { NavData } from '@/types';

export default defineComponent({
	name: 'ClientView',
	setup() {
		const userStore = useUserStore();

		return {
			userStore,
		};
	},
	data() {
		return {
			output: null as null | NavData,
		};
	},
	mounted() {
		this.loadData();
	},
	methods: {
		loadData() {
			this.userStore.getNav()
				.then((navData) => {
					this.output = navData;
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
});
