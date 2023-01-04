import {
	Config,
	Input,
	Field,
	Button,
	Notification,
} from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma';
import type { Plugin } from 'vue';

export const overrideConfig = {
	...bulmaConfig,
	iconComponent: 'vue-fontawesome',
	iconPack: 'fas',
	notification: {
		...bulmaConfig.notification,
		duration: 5000,
	},
};

export const addOruga: Plugin = {
	install(app) {
		// Global oruga config
		app.use(Config, overrideConfig);
		app.use(Notification);

		// Add individual components here
		app.use(Input);
		app.use(Field);
		app.use(Button);
	},
};
