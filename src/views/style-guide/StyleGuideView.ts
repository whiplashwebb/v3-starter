import { useProgrammatic } from '@oruga-ui/oruga-next';
import { defineComponent } from 'vue';

import StyleGuideModalCard from '@/components/style-guide-modal-card/StyleGuideModalCard.vue';
import StyleGuideModalPrompt from '@/components/style-guide-modal-prompt/StyleGuideModalPrompt.vue';
import StyleGuideSection from '@/components/style-guide-section/StyleGuideSection.vue';
import StyleGuideSubsection from '@/components/style-guide-subsection/StyleGuideSubsection.vue';
import { errorToast, successToast } from '@/utils/notifications';

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

interface PromptResponse {
	answer: string;
}

export default defineComponent({
	name: 'StyleGuideView',
	components: {
		StyleGuideSection,
		StyleGuideSubsection,
		StyleGuideModalCard,
		StyleGuideModalPrompt,
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
			basicModalOpen: false,
		};
	},
	methods: {
		popSuccessToast() {
			successToast('Nice job!');
		},
		popErrorToast() {
			errorToast(new Error('Oh uh! Something went wrong!'));
		},
		openModal() {
			const { oruga } = useProgrammatic();

			oruga.modal.open({
				component: StyleGuideModalCard,
				trapFocus: true,
			});
		},
		openPrompt() {
			const { oruga } = useProgrammatic();

			const instance = oruga.modal.open({
				component: StyleGuideModalPrompt,
				trapFocus: true,
			});

			instance.promise.then(({ answer }: PromptResponse) => {
				if (answer === 'yes') {
					successToast('Things and stuff are coming your way.');
				} else if (answer === 'no') {
					errorToast(new Error('Don\'t you like things and/or stuff???'));
				} else {
					errorToast(new Error('C\'mon! Don\'t just walk away!'));
				}
			});
		},
	},
});
