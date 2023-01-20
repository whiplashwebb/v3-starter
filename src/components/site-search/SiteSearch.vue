<template>
	<form
		class="site-search"
		:action="searchAction"
	>
		<o-field>
			<o-input
				v-model="searchText"
				name="search"
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
					:key="value"
				>
					{{label}}
				</option>
			</o-select>
			<o-button
				variant="primary"
				size="small"
			>
				Go
			</o-button>
		</o-field>
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import { labeledSearchTypes, searchTypes } from '@/constants';
import type { NavData } from '@/types';
import { getSearchUrl } from '@/utils';

export default defineComponent({
	name: 'MobileSearch',
	props: {
		navData: {
			type: Object as PropType<NavData>,
			required: true,
		},
	},
	data() {
		return {
			labeledSearchTypes,
			searchType: searchTypes.orders,
			searchText: '',
		};
	},
	computed: {
		searchAction(): string {
			return getSearchUrl(this.navData, this.searchType);
		},
	},
});
</script>
