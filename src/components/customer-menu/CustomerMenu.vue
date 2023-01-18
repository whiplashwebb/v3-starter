<template>
	<div class="customer-menu">
		<form>
			<o-field
				label="Change Active Customer"
			>
				<o-autocomplete
					size="small"
					placeholder="Type customer name"
					:data="results"
					:loading="isLoading"
					@typing="getDebouncedResults"
					@select="option => selected = option"
				>
					<template #default="props">
						{{ props.option.name }}
					</template>
				</o-autocomplete>
			</o-field>
		</form>

		<hr>

		<o-menu>
			<o-menu-list>
				<o-menu-item
					class="is-reversed"
					v-if="currentCustomer"
					label="Unset Customer"
					icon="arrow-right-from-bracket"
				/>
				<o-menu-item
					class="is-reversed"
					label="View All Customers"
					icon="users-rectangle"
					:href="allCustomersUrl"
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
</template>

<script lang="ts" src="./CustomerMenu.ts" />
