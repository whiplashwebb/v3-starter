import { defineComponent } from 'vue';

import logoUrl from '@/assets/Whiplash-Brandmark-RGB.svg';

export default defineComponent({
	name: 'MobileNav',
	props: {
		mainActive: {
			type: Boolean,
			required: true,
		},
		userActive: {
			type: Boolean,
			required: true,
		},
	},
	emits: [
		'update:mainActive',
		'update:userActive',
	],
	data() {
		return {
			logoUrl,
		};
	},
	methods: {
		toggleMain() {
			this.$emit('update:mainActive', !this.mainActive);
		},
		toggleUser() {
			this.$emit('update:userActive', !this.userActive);
		},
	},
});
