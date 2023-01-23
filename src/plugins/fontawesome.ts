import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faEye,
	faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { Plugin } from 'vue';

export const addFontawesome: Plugin = {
	install(app) {
		library.add(
			faEye,
			faEyeSlash,
		);

		app.component('VueFontawesome', FontAwesomeIcon);
	},
};
