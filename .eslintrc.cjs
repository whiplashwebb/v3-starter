/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'@whiplashmerch/eslint-config-vue3',
	],
	overrides: [
		{
			files: [
				'**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
				'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
			],
			extends: [
				'plugin:cypress/recommended',
			],
		},
	],
	rules: {
	},
};
