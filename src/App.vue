<template>
	<div
		v-if="userStore.initComplete"
		class="app"
	>
		<app-nav
			class="app_header"
			:nav-data="userStore.navData"
		/>
		<RouterView class="app__view" />
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
