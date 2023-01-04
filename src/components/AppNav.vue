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
				<template
					v-for="(navItems, key) in navData.app"
					:key="key"
				>
					<div
						v-if="navItems.length === 1"
						class="navbar-item"
					>
						<a
							class="button is-dark is-inverted app-nav__button"
							:href="navItems[0].url"
						>
							{{ navItems[0].display }}
						</a>
					</div>

					<div
						v-if="navItems.length > 1"
						class="navbar-item has-dropdown is-hoverable"
					>
						<a class="navbar-link is-arrowless">
							{{ key }}
						</a>

						<div class="navbar-dropdown ">
							<a
								v-for="item in navItems"
								:key="item.slug"
								class="navbar-item"
								:href="item.url"
							>
								{{ item.display }}
							</a>
						</div>
					</div>
				</template>

			</div>

			<!--			<div class="navbar-end">
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
			</div>-->
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
	background-image: $navbar-gradient;
	background-repeat: no-repeat;
	border-bottom:1px solid $some-grey;

	&__logo-item {
		width:64px;
		justify-content:center;
		margin:0 1rem;
		margin-right:15px;

		img {
			width:45px;
			height:auto;
		}

		&.navbar-item {
			padding: 0.5rem 0;
		}
	}

	&__button, .navbar-link {
		text-transform: uppercase;
		font-size:$size-7;
		letter-spacing: .64px;

	}

	&__button {
		padding:1rem 16px;
		height:auto;
		line-height:14.5px;
		border:none;

		&.is-dark.is-inverted {
			color:$some-black;
			background-color:transparent;
		}

	}

	.navbar-item {
		$h-pad:2.25px;
		padding-left:$h-pad;
		padding-right:$h-pad;
	}
}
</style>
