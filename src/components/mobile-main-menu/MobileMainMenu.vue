<template>
	<o-menu>
		<o-menu-list
			v-for="(navItems, key) in navData.app"
			:key="key"
		>
			<o-menu-item v-if="navItems.length > 1">
				<template #label="props">
					<span class="is-capitalized">{{ key }}</span>
					<o-icon
						class="is-pulled-right"
						:icon="props.expanded ? 'minus' : 'plus'"
					/>
				</template>
				<o-menu-item
					v-for="item in navItems"
					:key="item.slug"
					:href="item.url"
					:label="item.display"
				/>
			</o-menu-item>
			<o-menu-item
				v-if="navItems.length === 1"
				:href="navItems[0].url"
				:label="navItems[0].display"
			/>
		</o-menu-list>
	</o-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { NavData } from '@/types';

export default defineComponent({
	name: 'MobileMainMenu',
	props: {
		navData: {
			type: Object as PropType<NavData>,
			required: true,
		},
	},
});
</script>
