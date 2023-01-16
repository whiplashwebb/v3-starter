<template>
	<form class="mobile-search">
		<o-field>
			<o-input
				v-model="searchText"
				placeholder="Search Whiplash"
				size="small"
			/>
		</o-field>
		<o-field>
			<o-select
				v-model="searchType"
				size="small"
				expanded
			>
				<option
					v-for="[value, label] in labeledSearchTypes"
					:value="value"
				>
					{{label}}
				</option>
			</o-select>
			<o-button
				variant="primary"
				size="small"
			>
				Search
			</o-button>
		</o-field>
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { labeledSearchTypes, searchTypes } from '@/constants';

export default defineComponent({
	name: 'MobileSearch',
	data() {
		return {
			labeledSearchTypes,
			searchType: searchTypes.orders,
			searchText: '',
		};
	},
});
</script>

<style lang="scss">
.mobile-search {
}
</style>
