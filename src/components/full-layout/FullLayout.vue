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
			<form>
				<o-field>
					<o-input
						v-model="searchText"
						placeholder="Search Whiplash"
						size="small"
					/>
				</o-field>
				<o-field>
					<o-select
						v-model="searchType"
						size="small"
						expanded
					>
						<option
							v-for="[value, label] in labeledSearchTypes"
							:value="value"
						>
							{{label}}
						</option>
					</o-select>
					<o-button
						variant="primary"
						size="small"
					>
						Search
					</o-button>
				</o-field>
			</form>
			<hr>
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
