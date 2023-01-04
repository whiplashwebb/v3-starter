<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import AppNav from '@/components/AppNav.vue';
import { navMock } from '@/constants';


export default defineComponent({
	name: 'AppView',
	components: {
		RouterView,
		AppNav,
	},
	data() {
		return {
			navData: navMock,
		};
	},
});
</script>

<template>
	<div class="app">
		<app-nav
			class="app_header"
			:nav-data="navData"
		/>
		<RouterView class="app__view" />
	</div>

</template>

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
