<template>
	<div class="full-layout">
		<desktop-nav
			class="full-layout__header is-hidden-touch"
			:nav-data="navData"
			:current-user="currentUser"
			:current-warehouse="currentWarehouse"
			:current-customer="currentCustomer"
			:http-client="httpClient"
		/>
		<mobile-nav
			class="full-layout__mobile-nav is-hidden-desktop"
			v-model:user-active="userDrawerActive"
			v-model:main-active="mainDrawerActive"
		/>
		<slot class="full-layout_content" />

		<o-sidebar
			class="full-layout__sidebar"
			v-model:open="mainDrawerActive"
			fullheight
		>
			<mobile-search :nav-data="navData" />
			<hr>
			<nav-menu :nav-data="navData" />
		</o-sidebar>
		<o-sidebar
			class="full-layout__sidebar"
			v-model:open="userDrawerActive"
			fullheight
			right
		>
			<user-accordion
				:nav-data="navData"
				:current-user="currentUser"
				:current-warehouse="currentWarehouse"
				:current-customer="currentCustomer"
				:http-client="httpClient"
			/>
		</o-sidebar>
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

	&__sidebar {
		.sidebar-content {
			padding:1rem;
			padding-top:$navbar-height + 1rem;
			background:$white;
			z-index:$navbar-z - 1;
			box-shadow: $wl-box-shadow;
			min-width:20rem;
		}
	}
}
</style>
