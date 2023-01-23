// The easy way requires a single import
// import Oruga from '@oruga-ui/oruga-next';
// Tree shaking requires importing individual plugins
import {
	Config,
	Input,
	Field,
	Button,
	Notification,
	Dropdown,
	Collapse,
	Icon,
	Checkbox,
	Loading,
	Menu,
	Select,
	Autocomplete,
	Modal,
	Sidebar,
} from '@oruga-ui/oruga-next';
import { orugaConfig } from '@whiplashmerch/design-system';
import type { Plugin } from 'vue';


export const addOruga: Plugin = {
	install(app) {
		// Global oruga config
		app.use(Config, orugaConfig);
		app.use(Notification);
		app.use(Modal);

		// Add individual components here
		app.use(Input);
		app.use(Field);
		app.use(Button);
		app.use(Dropdown);
		app.use(Collapse);
		app.use(Icon);
		app.use(Checkbox);
		app.use(Loading);
		app.use(Menu);
		app.use(Select);
		app.use(Autocomplete);
		app.use(Sidebar);

		// Or the easy way (no tree shaking)
		// app.use(Oruga, orugaConfig);
	},
};
