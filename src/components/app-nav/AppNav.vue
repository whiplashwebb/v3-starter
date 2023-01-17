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
							class="navbar-link is-arrowless"
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
				<div class="app-nav-status">
					<div class="app-nav-status__header">
						<div class="app-nav-status__name">{{ currentUser.full_name }}</div>
						<div class="app-nav-status__role">{{ currentUser.role }}</div>
					</div>
					<div class="app-nav-status__body">

						<div
							class="navbar-item has-dropdown"
							:class="{ 'is-active' : activeKey === customerKey }"
						>
							<a
								class="navbar-link app-nav-status__dropdown-trigger"
								:class="{ 'is-active' : activeKey === customerKey }"
								@click="toggleNavItem(customerKey)"
							>
								<div class="app-nav-status__dropdown-label">
									<div>Customer:</div>
									<div class="app-nav-status__dropdown-name">{{ currentCustomer.name || 'All' }}</div>
								</div>
							</a>

							<div class="navbar-dropdown is-right">
								<a
									class="navbar-item"
								>
									foo
								</a>
							</div>
						</div>

						<div
							class="navbar-item has-dropdown"
							:class="{ 'is-active' : activeKey === warehouseKey }"
						>
							<a
								class="navbar-link app-nav-status__dropdown-trigger"
								:class="{ 'is-active' : activeKey === warehouseKey }"
								@click="toggleNavItem(warehouseKey)"
							>
								<div class="app-nav-status__dropdown-label">
									<div>Warehouse:</div>
									<div class="app-nav-status__dropdown-name">{{ currentWarehouse.name || 'All' }}</div>
								</div>
							</a>

							<div class="navbar-dropdown is-right">
								<a
									class="navbar-item"
								>
									foo
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" src="./AppNav.ts" />
<style lang="scss" src="./AppNav.scss" />
