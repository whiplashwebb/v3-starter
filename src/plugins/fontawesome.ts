import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import {
	faArrowRightFromBracket, faBars,
	faBell, faChevronDown, faChevronUp,
	faCircleNotch,
	faEye,
	faEyeSlash, faGlobe, faMagnifyingGlass, faMinus, faPlus, faUsersRectangle, faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { Plugin } from 'vue';

export const addFontawesome: Plugin = {
	install(app) {
		library.add(
			faEye,
			faEyeSlash,
			faCircleNotch,
			faMagnifyingGlass,
			faBell,
			faUserCircle,
			faArrowRightFromBracket,
			faGlobe,
			faUsersRectangle,
			faWarehouse,
			faBars,
			faPlus,
			faMinus,
			faChevronUp,
			faChevronDown,
		);

		app.component('VueFontawesome', FontAwesomeIcon);
	},
};
