<template>
	<template v-if="layoutKey === layouts.full">
		<full-layout
			v-if="userStore.initComplete"
			:nav-data="userStore.navData"
			:current-user="userStore.currentUser"
			:current-warehouse="userStore.currentWarehouse"
			:current-customer="userStore.currentCustomer"
			:http-client="userStore.httpClient"
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
	<template v-else-if="layoutKey === layouts.minimal">
		<minimal-layout class="app">
			<RouterView class="app__view" />
		</minimal-layout>
	</template>
</template>

<script lang="ts" src="./App.ts" />

<style lang="scss">
.app {
/*	width:100%;
	min-height:100vh;
	display:flex;
	flex-direction:column;

	&__view {
		flex:1 1 auto;
	}*/
}
</style>
