<template>
	<div
		v-if="userStore.initComplete"
		class="app"
	>
		<app-nav
			class="app_header is-hidden-touch"
			:nav-data="userStore.navData"
		/>
		<mobile-nav
			class="app_mobile-nav is-hidden-desktop"
			v-model:user-active="userDrawerActive"
			v-model:main-active="mainDrawerActive"
		/>
		<RouterView class="app__view" />
		<nav-drawer
			:active="mainDrawerActive"
		>
			Main Nav Drawer
		</nav-drawer>
		<nav-drawer
			:active="userDrawerActive"
			right
		>
			User Nav Drawer
		</nav-drawer>
	</div>
	<o-loading
		v-else
		active
		full-page
	/>
</template>

<script lang="ts" src="./App.ts" />

<style lang="scss">
.app {
	width:100%;
	min-height:100vh;
	display:flex;
	flex-direction:column;

	&__view {
		flex:1 1 auto;
	}
}
</style>
