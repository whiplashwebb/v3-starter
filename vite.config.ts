import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import mkcert from'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		mkcert(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@whiplashmerch/design-system/src/scss/global-imports.scss";',
			},
		},
	},
	server: {
		host: 'proto-local.preview.app.github.dev',
		https: true,
	},
});
