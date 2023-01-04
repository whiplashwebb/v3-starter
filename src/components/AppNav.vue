<template>
	<nav class="app-nav navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item app-nav__logo-item" href="https://bulma.io">
				<img :src="logoUrl">
			</a>

			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<div class="navbar-item">
					<a class="button is-dark is-inverted app-nav__button">
						Orders
					</a>
				</div>
				<a class="navbar-item">
					Home
				</a>

				<a class="navbar-item">
					Documentation
				</a>

				<div class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link">
						More
					</a>

					<div class="navbar-dropdown">
						<a class="navbar-item">
							About
						</a>
						<a class="navbar-item">
							Jobs
						</a>
						<a class="navbar-item">
							Contact
						</a>
						<hr class="navbar-divider">
						<a class="navbar-item">
							Report an issue
						</a>
					</div>
				</div>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<a class="button is-primary">
							<strong>Sign up</strong>
						</a>
						<a class="button is-light">
							Log in
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import logoUrl from '@/assets/Whiplash-Brandmark-RGB.svg';
import type { NavData } from '@/types';

export default defineComponent({
	name: 'AppNav',
	props: {
		navData: {
			type: Object as PropType<NavData>,
			required: true,
		},
	},
	data() {
		return {
			logoUrl,
		};
	},
});
</script>

<style lang="scss">
.app-nav {
	background-image: linear-gradient(to right, rgba(230,225,197,0.2), rgba(230,225,197,0.2)),linear-gradient(to right, #fff, #fff);
	background-repeat: no-repeat;
	border-bottom:1px solid $some-grey;

	&__logo-item {
		margin-left:13.5px;
		margin-right:1.5px;

		img {
			width:45px;
			height:auto;
		}
	}

	&__button {
		text-transform: uppercase;
		font-size:$size-7;
		letter-spacing: .64px;
		padding:1rem;
		height:auto;
		line-height:1.2em;

		&.is-dark.is-inverted {
			color:$some-black;
			background-color:transparent;
		}

	}

	.navbar-item .button {
	}
}
</style>
