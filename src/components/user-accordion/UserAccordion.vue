<template>
	<div class="user-accordion">
		<o-collapse
			:animation="animation"
			:open="isOpen(userSections.user)"
			@open="handleOpen(userSections.user)"
		>
			<template #trigger="props">
				<div class="user-accordion-header">
					<div class="user-accordion-header__main">
						<div class="user-accordion-header__title">{{ currentUser.full_name }}</div>
						<div class="user-accordion-header__role">{{ currentUser.role }}</div>
					</div>
					<o-icon
						class="user-accordion__header-icon"
						:icon="props.open ? 'chevron-up' : 'chevron-down'"
					/>
				</div>
			</template>
			<div class="user-accordion__body">
				<o-menu>
					<o-menu-list>
						<o-menu-item
							label="Log Out"
							icon="arrow-right-from-bracket"
						/>
						<o-menu-item
							label="Change Language"
							icon="globe"
						/>
						<o-menu-item label="Dashboard" />
						<template v-if="navData.info">
							<o-menu-item
								v-for="item in navData.info"
								:key="item.slug"
								:href="item.url"
								:label="item.display"
							/>
						</template>
					</o-menu-list>
				</o-menu>
			</div>
		</o-collapse>
		<o-collapse
			:animation="animation"
			:open="isOpen(userSections.customer)"
			@open="handleOpen(userSections.customer)"
		>
			<template #trigger="props">
				<div class="user-accordion-header">
					<div class="user-accordion-header__main">
						<div class="user-accordion-header__label">Customer:</div>
						<div class="user-accordion-header__title">{{ currentCustomer ? currentCustomer.name : 'All' }}</div>
					</div>
					<o-icon
						class="user-accordion__header-icon"
						:icon="props.open ? 'chevron-up' : 'chevron-down'"
					/>
				</div>
			</template>

			<div class="user-accordion__body">
				<form class="user-accordion__customer-search">
					<o-field
						label="Change Active Customer"
					>
						<o-autocomplete
							size="small"
							placeholder="Type customer name"
						/>
					</o-field>
				</form>

				<hr>

				<o-menu>
					<o-menu-list>
						<o-menu-item
							v-if="currentCustomer"
							label="Unset Customer"
							icon="arrow-right-from-bracket"
						/>
						<o-menu-item
							label="View All Customers"
							icon="users-rectangle"
						/>
						<template v-if="navData.customer">
							<o-menu-item
								v-for="item in navData.customer"
								:key="item.slug"
								:href="item.url"
								:label="item.display"
							/>
						</template>
					</o-menu-list>
				</o-menu>
			</div>
		</o-collapse>
		<o-collapse
			:animation="animation"
			:open="isOpen(userSections.warehouse)"
			@open="handleOpen(userSections.warehouse)"
		>
			<template #trigger="props">
				<div class="user-accordion-header">
					<div class="user-accordion-header__main">
						<div class="user-accordion-header__label">Warehouse:</div>
						<div class="user-accordion-header__title">{{ currentWarehouse ? currentWarehouse.name : 'All' }}</div>
					</div>
					<o-icon
						class="user-accordion__header-icon"
						:icon="props.open ? 'chevron-up' : 'chevron-down'"
					/>
				</div>
			</template>

			<div class="user-accordion__body">
				<form class="user-accordion__customer-search">
					<o-field
						label="Change Active Warehouse"
					>
						<o-autocomplete
							size="small"
							placeholder="Type warehouse name"
						/>
					</o-field>
				</form>

				<hr>

				<o-menu>
					<o-menu-list>
						<o-menu-item
							v-if="currentWarehouse"
							label="Unset Warehouse"
							icon="arrow-right-from-bracket"
						/>
						<o-menu-item
							label="View All Warehouses"
							icon="warehouse"
						/>
						<o-menu-item
							v-if="currentWarehouse"
							:label="`Edit ${currentWarehouse.name}`"
						/>

					</o-menu-list>
				</o-menu>
			</div>
		</o-collapse>
	</div>
</template>

<script lang="ts" src="./UserAccordion.ts" />

<style lang="scss">
.user-accordion {
	&-header {
		display:flex;
		flex-direction:row;
		justify-content: space-between;
		align-items: center;
		font-size:$size-7;
		text-transform: uppercase;
		padding:.75rem 0;

		&__title {
			font-weight:$weight-bold;
		}

		&__role {
			color:$info;
		}
	}

	&__body {
		border-top:1px solid $border;
		padding-bottom:1.5rem;
	}

	&__customer-search {
		padding-top:.75rem;
	}

	.o-clps + .o-clps {
		border-top:1px solid $border;
	}

	.menu-list {
		a {
			display:flex;
			flex-direction:row;
			justify-content: space-between;
			align-items: center;

			.icon {
				order:10;
			}
		}
	}
}
</style>
