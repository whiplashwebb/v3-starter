import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import AppNav from '@/components/AppNav.vue';
import { navMock } from '@/constants';
import { useUserStore } from '@/stores/user';


export default defineComponent({
	name: 'AppView',
	components: {
		RouterView,
		AppNav,
	},
	setup() {
		return {
			userStore:  useUserStore(),
		};
	},
	data() {
		return {
			navData: navMock,
		};
	},
	mounted() {
		this.userStore.init()
			.catch((e) => {
				console.error('Init error in app', e);
			});
	},
});
