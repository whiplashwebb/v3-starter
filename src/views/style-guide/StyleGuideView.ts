import { defineComponent } from 'vue';

import StyleGuideSection from '@/components/style-guide-section/StyleGuideSection.vue';
import StyleGuideSubsection from '@/components/style-guide-subsection/StyleGuideSubsection.vue';

const colorVariants = [
	'primary',
	// 'link',
	'success',
	'info',
	'warning',
	'danger',
];

const nonColorVariants = [
	'default',
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
				...colorVariants,
				...nonColorVariants,
			],
			colorVariants,
			nonColorVariants,
			sizes: [
				'small',
				'',
				'medium',
				'large',
			],
			isDark: false,
		};
	},
});
