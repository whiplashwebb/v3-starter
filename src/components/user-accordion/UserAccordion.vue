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
			<user-menu
				class="user-accordion__body"
				:current-user="currentUser"
				:nav-data="navData"
			/>
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

			<customer-menu
				class="user-accordion__body"
				:nav-data="navData"
				:current-customer="currentCustomer"
				:http-client="httpClient"
			/>
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

			<warehouse-menu
				class="user-accordion__body"
				:nav-data="navData"
				:current-warehouse="currentWarehouse"
				:http-client="httpClient"
			/>
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
		padding:.75rem 0 1.5rem;
	}

	.o-clps + .o-clps {
		border-top:1px solid $border;
	}
}
</style>
