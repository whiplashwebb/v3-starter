import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import logoUrl from '@/assets/Whiplash-Brandmark-RGB.svg';
import type {NavData, StringMap} from '@/types';

export default defineComponent({
	name: 'AppNav',
	props: {
		navData: {
			type: Object as PropType<NavData>,
			required: true,
		},
	},
	data() {
		return {
			logoUrl,
			isDrawerActive: false,
			activeKey: null as string | null,
		};
	},
	methods: {
		toggleNavItem(key: string) {
			this.activeKey = (this.activeKey === key) ? null : key;
		},
	},
});
