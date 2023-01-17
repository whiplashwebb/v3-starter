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
<!--				<a class="navbar-item">
					<o-icon
						class="app-nav__icon"
						icon="magnifying-glass"
					/>
				</a>
				<a class="navbar-item">
					<o-icon
						class="app-nav__icon"
						icon="bell"
					/>
				</a>-->
				<a class="navbar-item app-nav__icon-item">
					<o-icon
						class="app-nav__icon"
						icon="magnifying-glass"
					/>
				</a>
				<a class="navbar-item app-nav__icon-item">
					<o-icon
						class="app-nav__icon"
						icon="bell"
					/>
				</a>
				<a class="navbar-item app-nav__icon-item">
					<o-icon
						class="app-nav__icon app-nav__icon--user"
						icon="user-circle"
						pack="far"
					/>
				</a>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" src="./AppNav.ts" />

<style lang="scss">
.app-nav {
	background-color:$cream;
	border-bottom:1px solid $grey-lighter;

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

	&__icon-item {
		// Make the item a square so we can accurately draw a circle inside it, then use negative margins to control the spacing.
		width:$navbar-height;
		display:flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		&::before {
			$offset:20%;
			z-index:-1;
			position:absolute;
			left:$offset;
			top:$offset;
			content:'';
			border-radius:50%;
			background-color:$white;
			width:100% - ($offset * 2);
			height:100% - ($offset * 2);
		}

		& + & {
			margin-left:-.5rem;
		}
	}

	&__icon {
		font-size:20px;
		position:relative;

		&--user {
			font-size:28px;
		}
	}

	// Maybe turn this into a variant?
	.navbar-item, .navbar-link {
		text-transform: uppercase;
		font-size:$size-7;
		letter-spacing: .64px;
	}
}
</style>
