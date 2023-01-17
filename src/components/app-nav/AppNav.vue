<template>
	<nav class="app-nav navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item app-nav__logo-item" href="/public">
				<img :src="logoUrl">
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
					<a
						v-if="navItems.length === 1"
						class="navbar-item"
						:href="navItems[0].url"
					>
						{{ navItems[0].display }}
					</a>

					<div
						v-if="navItems.length > 1"
						class="navbar-item has-dropdown"
						:class="{ 'is-active' : activeKey === key }"
					>
						<a
							class="navbar-link"
							:class="{ 'is-active' : activeKey === key }"
							@click="toggleNavItem(key)"
						>{{ key }}</a>

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
		margin-right:20px;

		img {
			width:45px;
			height:auto;
		}

		&.navbar-item {
			padding: 0.5rem 0;
		}
	}

	.navbar-item, .navbar-link {
		text-transform: uppercase;
		font-size:$size-7;
		letter-spacing: .64px;
	}
}
</style>
