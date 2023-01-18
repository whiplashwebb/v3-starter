<template>
	<nav class="mobile-nav navbar is-fixed-top">
		<a
			class="mobile-nav__item"
			@click="toggleMain"
		>
			<o-icon
				:icon="tmpMainActive ? 'xmark' : 'bars'"
				size="large"
			/>
		</a>
		<a class="mobile-nav__item mobile-nav__logo-item" href="/">
			<img :src="logoUrl">
		</a>
		<a
			class="mobile-nav__item"
			@click="toggleUser"
		>
			<o-icon
				:icon="tmpUserActive ? 'xmark' : 'user-circle'"
				:pack="tmpUserActive ? 'fas' : 'far'"
				size="large"
			/>
		</a>
	</nav>
</template>

<script lang="ts" src="./MobileNav.ts" />

<style lang="scss">
.mobile-nav {
	display:flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: space-between;

	&__item {
		width:64px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color:$black-ter;

		&:hover {
			color:$black;
			background-color:rgba(0,0,0,0.025);
		}
	}

	&__logo-item {
		img {
			width:45px;
			height:auto;
			display:block;
		}
	}
}
</style>
