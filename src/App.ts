import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import FullLayout from '@/components/full-layout/FullLayout.vue';
import { useUserStore } from '@/stores/user';


export default defineComponent({
	name: 'AppView',
	components: {
		RouterView,
		FullLayout,
	},
	setup() {
		return {
			userStore:  useUserStore(),
		};
	},
	mounted() {
		this.userStore.init()
			.catch((e) => {
				console.error('Init error in app', e);
			});
	},
});
