import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import {
	faEye,
	faEyeSlash,
	faExclamationCircle,
	faTimes,
	faCaretUp,
	faCaretDown,
	faCircleNotch,
	faBars,
	faXmark,
	faPlus,
	faMinus,
	faChevronDown,
	faChevronUp,
	faGlobe,
	faUsersRectangle,
	faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { Plugin } from 'vue';

export const addFontawesome: Plugin = {
	install(app) {
		library.add(
			faEye,
			faEyeSlash,
			faExclamationCircle,
			faTimes,
			faCaretUp,
			faCaretDown,
			faCircleNotch,
			faUserCircle,
			faBars,
			faXmark,
			faPlus,
			faMinus,
			faChevronDown,
			faChevronUp,
			faGlobe,
			faUsersRectangle,
			faArrowRightFromBracket,
		);

		app.component('VueFontawesome', FontAwesomeIcon);
	},
};
