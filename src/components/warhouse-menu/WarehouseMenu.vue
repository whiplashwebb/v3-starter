<template>
	<div class="warehouse-menu">
		<form>
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
					class="is-reversed"
				/>
				<o-menu-item
					class="is-reversed"
					label="View All Warehouses"
					icon="warehouse"
					:href="allWarehousesUrl"
				/>
				<o-menu-item
					v-if="currentWarehouse"
					:label="`Edit ${currentWarehouse.name}`"
				/>

			</o-menu-list>
		</o-menu>
	</div>
</template>

<script lang="ts" src="./WarehouseMenu.ts" />
