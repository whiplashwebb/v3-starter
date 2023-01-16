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
			fooooo
		</o-collapse>
		<o-collapse
			:animation="animation"
			:open="isOpen(userSections.customer)"
			@open="handleOpen(userSections.customer)"
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
			bar
		</o-collapse>
		<o-collapse
			:animation="animation"
			:open="isOpen(userSections.warehouse)"
			@open="handleOpen(userSections.warehouse)"
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
			fiz
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

		&__title {
			font-weight:$weight-bold;
		}

		&__role {
			color:$info;
		}
	}
}
</style>
