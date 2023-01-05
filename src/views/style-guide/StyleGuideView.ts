import { defineComponent } from 'vue';

import StyleGuideSection from '@/components/style-guide-section/StyleGuideSection.vue';
import StyleGuideSubsection from '@/components/style-guide-subsection/StyleGuideSubsection.vue';

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
				'primary',
				'link',
				'success',
				'info',
				'warning',
				'danger',
				'white',
				'light',
				'dark',
				'black',
				'text',
				'ghost',
			],
		};
	},
});
