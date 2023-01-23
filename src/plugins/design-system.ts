// The easy way requires a single import
// import WhiplashDesignSystem from '@whiplashmerch/design-system';
// Tree shaking requires individual plugins
import { FullLayoutPlugin, MinimalLayoutPlugin } from '@whiplashmerch/design-system';
import type { Plugin } from 'vue';

export const addDesignSystem: Plugin = {
	install(app) {
		app.use(FullLayoutPlugin);
		app.use(MinimalLayoutPlugin);

		// Or the easy way (no tree shaking)
		// app.use(WhiplashDesignSystem);
	},
};
