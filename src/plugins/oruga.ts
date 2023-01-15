import {
	Config,
	Input,
	Field,
	Button,
	Notification,
	Dropdown,
	Collapse,
	Icon,
	Switch,
	Checkbox,
	Radio,
	Loading,
	Menu,
} from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma';
import type { Plugin } from 'vue';

export const overrideConfig = {
	...bulmaConfig,
	iconComponent: 'vue-fontawesome',
	iconPack: 'fas',
	statusIcon: false,
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
		app.use(Dropdown);
		app.use(Collapse);
		app.use(Icon);
		app.use(Switch);
		app.use(Checkbox);
		app.use(Radio);
		app.use(Loading);
		app.use(Menu);
	},
};
