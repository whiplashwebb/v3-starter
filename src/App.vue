<template>
	<full-layout
		v-if="userStore.initComplete"
		:nav-data="userStore.navData"
		:current-user="userStore.currentUser"
		class="app"
	>
		<RouterView class="app__view" />
	</full-layout>
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
