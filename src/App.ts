import { errorToast, FullLayout, layouts, MinimalLayout } from '@whiplashmerch/design-system';
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import { useUserStore } from '@/stores/user';


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
	mounted() {
		this.userStore.init()
			.catch((e) => {
				console.error('Init error in app', e);
				errorToast(e);
			});
	},
});
