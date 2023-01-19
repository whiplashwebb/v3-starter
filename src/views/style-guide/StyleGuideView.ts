import { useProgrammatic } from '@oruga-ui/oruga-next';
import { defineComponent } from 'vue';

import StyleGuideModalCard from '@/components/style-guide-modal-card/StyleGuideModalCard.vue';
import StyleGuideModalPrompt from '@/components/style-guide-modal-prompt/StyleGuideModalPrompt.vue';
import StyleGuideSection from '@/components/style-guide-section/StyleGuideSection.vue';
import StyleGuideSubsection from '@/components/style-guide-subsection/StyleGuideSubsection.vue';
import { errorToast, successToast } from '@/utils/notifications';

const semanticVariants = [
	'success',
	'info',
	'warning',
	'danger',
];

const colorVariants = [
	'primary',
	// 'link',
	...semanticVariants,
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

interface BreadcrumbItem {
	active?: boolean;
	label: string;
	url: string;
	icon?: string;
}

enum tabSections {
	pictures,
	music,
	books,
	videos,
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
			semanticVariants,
			variants: [
				'default',
				...colorVariants,
				...nonColorVariants,
			],
			messageVariants: [
				'default',
				...colorVariants,
				'light',
				'dark',
			],
			pillVariants: [
				'default',
				...colorVariants,
				'disabled',
			],
			progressVariants: [
				'default',
				...colorVariants,
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
			selectOptions: [
				'foo',
				'bar',
				'fiz',
			],
			sliderValue: 5,
			rangeValues: [5, 10],
			paginationCurrent: 5,
			paginationTotal: 250,
			paginationPerPage: 25,
			breadcrumbItems: [
				{
					label: 'Home',
					icon: 'home',
					url: '#',
				},
				{
					label: 'Documentation',
					icon: 'book',
					url: '#',
				},
				{
					label: 'Components',
					icon: 'puzzle-piece',
					url: '#',
				},
				{
					label: 'Breadcrumb',
					icon: 'bread-slice',
					url: '#',
					active: true,
				},
			] as BreadcrumbItem[],
			showLoading: true,
			cardIpsum: '<p>Committed affiliations forty-seven their thrown beneath meanings after altogether. Stars ceaseless encountering questioned heavily others through proved legrasse. Stone knowledge formed fetishism detective averred between, suppose first? Learn syllables carriages sincerity naturally proper prove, resultant cthulhu? Iceland honesty whereupon writhing cease louisiana, worshippers loathsome having! Prisoners notion equally heavy place, disappointed fhtagn rough depression! Exact contours animal captured acre\'s stars peremptorily examined wholesome.</p><p>Substantially victorian familiarity itself angell\'s chorus mentally improvised beneath. Apparently nightmares corroboration regard lived comprising decadents demand lived. Alike forget formula muffled hanging which providence whilst unholy. Whispered oddly luminous their native would whose flame uncle\'s. Shape subtlety dreams having eminently never epochs sinister march. Phrase conceivable survivor under advance authorities dreamed, ancient among? Dunedin became expressing immensely kinship older orgiastic, echoes sprinkling?</p>',
			tabSections,
			activeTab: tabSections.pictures,
			activeVerticalTab: tabSections.pictures,
			progressValue: 65,
			progressMax: 100,
			adminMenuActive: true,
			autocompleteQuery: '',
			inlineAutocompleteQuery: '',
			autocompleteOptions: ['Antarctic', 'shackleton', 'equipment', 'redoubled', 'surmounted', 'obliterated', 'scientific', 'otherwise', 'experimentation', 'Antarctic', 'biological', 'consciousness', 'cryptical', 'beginning', 'differentiated', 'everything', 'hideously', 'refrained', 'Spontaneously', 'incredible', 'lightened', 'forbidden', 'afternoon', 'mountains', 'thirty-five', 'expedition', 'mountains', 'Miskatonic', 'undulations', 'regularities', 'formations', 'forbidden', 'five-pointed', 'ineluctable', 'provision', 'iridescent', 'Machinery', 'antarctic', 'unbelievable', 'elevation', 'specimens', 'interstitial', 'regularities', 'discovered', 'uninjured', 'Reminiscent', 'explained', 'mountains', 'fantastically', 'destroyed', 'altogether', 'overwrought', 'psychological', 'lightened', 'Survivors', 'rationale', 'illustrated', 'overshadowing', 'transportation', 'crevasse-riven', 'geologists', 'paintings', 'anomalous'],
			carouselImages: [
				'https://picsum.photos/seed/picsum1/640/360',
				'https://picsum.photos/seed/picsum2/640/360',
				'https://picsum.photos/seed/picsum3/640/360',
				'https://picsum.photos/seed/picsum4/640/360',
				'https://picsum.photos/seed/picsum5/640/360',
			],
		};
	},
	computed: {
		autocompleteResults(): string[] {
			if (!this.autocompleteQuery) return [];
			return this.autocompleteOptions
				.filter(option => option.includes(this.autocompleteQuery))
				.slice(0, 4);
		},
		inlineAutocompleteResults(): string[] {
			if (!this.inlineAutocompleteQuery) return [];
			return this.autocompleteOptions
				.filter(option => option.includes(this.inlineAutocompleteQuery))
				.slice(0, 4);
		},
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
