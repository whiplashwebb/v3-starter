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
	computed: {
		tmpMainActive: {
			get() {
				return this.mainActive;
			},
			set(value: boolean) {
				this.$emit('update:mainActive', value);
			},
		},
		tmpUserActive: {
			get() {
				return this.userActive;
			},
			set(value: boolean) {
				this.$emit('update:userActive', value);
			},
		},
	},
	methods: {
		toggleMain() {
			if (this.tmpUserActive && !this.tmpMainActive) this.tmpUserActive = false;
			this.tmpMainActive = !this.tmpMainActive;
		},
		toggleUser() {
			if (this.tmpMainActive && !this.tmpUserActive) this.tmpMainActive = false;
			this.tmpUserActive = !this.tmpUserActive;
		},
	},
});
