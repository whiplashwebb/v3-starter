<template>
	<div class="user-menu">
		<o-menu>
			<o-menu-list>
				<o-menu-item
					class="is-reversed"
					label="Log Out"
					icon="arrow-right-from-bracket"
				/>
				<o-menu-item
					class="is-reversed"
					label="Change Language"
					icon="globe"
				/>
				<hr>
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
</template>

<script lang="ts">
import type { APIV21EntitiesUser } from '@whiplashmerch/whiplash-api-client-private';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { NavData } from '@/types';

export default defineComponent({
	name: 'UserMenu',
	props: {
		navData: {
			type: Object as PropType<NavData>,
			required: true,
		},
		currentUser: {
			type: Object as PropType<APIV21EntitiesUser>,
			required: true,
		},
	},
});
</script>
