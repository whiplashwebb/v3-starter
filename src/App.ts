import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import FullLayout from '@/components/full-layout/FullLayout.vue';
import MinimalLayout from '@/components/minimal-layout/MinimalLayout.vue';
import { layouts } from '@/constants';
import { useUserStore } from '@/stores/user';
import { errorToast } from '@/utils/notifications';


export default defineComponent({
	name: 'AppView',
	components: {
		RouterView,
		FullLayout,
		MinimalLayout,
	},
	setup() {
		return {
			userStore:  useUserStore(),
		};
	},
	data() {
		return {
			layouts,
		};
	},
	mounted() {
		this.userStore.init()
			.catch((e) => {
				console.error('Init error in app', e);
				errorToast(e);
			});
	},
	computed: {
		layoutKey(): layouts {
			const routeLayout = this.$route.meta?.layout as layouts;

			if (Object.values(layouts).includes(routeLayout)) {
				return routeLayout;
			} else {
				return layouts.full;
			}
		},
	},
});
