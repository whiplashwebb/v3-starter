/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
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
	plugins: [
		'import',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		indent: ['warn', 'tab', {
			SwitchCase: 1,
		}],
		'no-tabs': 'off',
		semi: ['warn', 'always'],
		'comma-dangle': ['warn', 'always-multiline'],
		'comma-spacing': ['warn', { before: false, after: true }],
		'template-curly-spacing': ['warn', 'always'],
		'object-curly-spacing': ['warn', 'always'],
		'space-before-function-paren': ['warn', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always',
		}],
		'quote-props': ['warn', 'as-needed'],
		'import/order': ['error', {
			'newlines-between': 'always',
			alphabetize: {
				order: 'asc',
				caseInsensitive: true,
			},
		}],
		quotes: ['error', 'single'],
		'vue/html-indent': ['warn', 'tab', {
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			alignAttributesVertically: true,
			ignores: [],
		}],
		'vue/multi-word-component-names': 'off',
	},
};
