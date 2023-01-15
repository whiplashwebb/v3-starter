<template>
	<div class="full-layout">
		<app-nav
			class="full-layout__header is-hidden-touch"
			:nav-data="navData"
		/>
		<mobile-nav
			class="full-layout__mobile-nav is-hidden-desktop"
			v-model:user-active="userDrawerActive"
			v-model:main-active="mainDrawerActive"
		/>
		<slot class="full-layout_content" />
		<nav-drawer
			:active="mainDrawerActive"
		>
			<nav-menu :nav-data="navData" />
		</nav-drawer>
		<nav-drawer
			:active="userDrawerActive"
			right
		>
			User Nav Drawer
		</nav-drawer>
	</div>
</template>

<script lang="ts" src="./FullLayout.ts" />

<style lang="scss">
.full-layout {
	width:100%;
	min-height:100vh;
	display:flex;
	flex-direction:column;

	&__content {
		flex:1 1 auto;
	}
}
</style>
