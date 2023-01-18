import { defineComponent } from 'vue';

import StyleGuideSection from '@/components/style-guide-section/StyleGuideSection.vue';
import StyleGuideSubsection from '@/components/style-guide-subsection/StyleGuideSubsection.vue';
import {errorToast, successToast} from "@/utils/notifications";

const colorVariants = [
	'primary',
	// 'link',
	'success',
	'info',
	'warning',
	'danger',
];

const nonColorVariants = [
	'white',
	'light',
	'dark',
	'black',
	'text',
	// 'ghost',
];

export default defineComponent({
	name: 'StyleGuideView',
	components: {
		StyleGuideSection,
		StyleGuideSubsection,
	},
	data() {
		return {
			variants: [
				'default',
				...colorVariants,
				...nonColorVariants,
			],
			pillVariants: [
				'default',
				...colorVariants,
				'disabled',
			],
			colorVariants,
			nonColorVariants,
			sizes: [
				'small',
				'',
				'medium',
				'large',
			],
			tagSizes: [
				'',
				'medium',
				'large',
			],
			isDark: false,
			checks: [
				true,
				false,
				true,
				false,
			],
			switches: [
				true,
				true,
			],
			radio: 'Foo',
			exampleInput: 'Example input',
		};
	},
	methods: {
		popSuccessToast() {
			successToast('Nice job!');
		},
		popErrorToast() {
			errorToast(new Error('Oh uh! Something went wrong!'));
		},
	},
});
