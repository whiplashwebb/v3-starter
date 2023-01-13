<template>
	<nav class="app-nav navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item app-nav__logo-item" href="/public">
				<img :src="logoUrl">
			</a>

			<a
				role="button"
				class="navbar-burger"
				:class="{ 'is-active' : isDrawerActive }"
				@click="isDrawerActive = !isDrawerActive"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div
			class="navbar-menu"
			:class="{ 'is-active' : isDrawerActive }"
		>
			<div
				v-if="navData"
				class="navbar-start"
			>
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
						class="navbar-item has-dropdown"
						:class="{ 'is-active' : activeKey === key }"
					>
						<a
							class="navbar-link is-arrowless is-hidden-desktop"
							@click="toggleNavItem(key)"
						>
							{{ key }}
						</a>
						<button
							class="is-hidden-touch button is-dark is-inverted app-nav__button"
							:class="{ 'is-active' : activeKey === key }"
							@click="toggleNavItem(key)"
						>{{ key }}</button>

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

<script lang="ts" src="./AppNav.ts" />

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

	.navbar-start,
	.navbar-end {
		> .navbar-item {
			$h-pad:1px;
			padding-left:$h-pad;
			padding-right:$h-pad;

			&.has-dropdown {
				padding:.5rem $h-pad;

				.button.is-active {
					color:$white;
					background:$some-black;
				}
			}
		}
	}

	@include from($desktop) {
		.navbar-dropdown {
			top:calc(100% - 2px);
			box-shadow:$wl-box-shadow;
			padding:0;

			.navbar-item {
				padding:9.2px 21px;
				min-width:215px;

				&:first-child {
					padding-top:14px;
				}

				&:last-child {
					padding-bottom:14px;
				}
			}
		}
	}
}
</style>
