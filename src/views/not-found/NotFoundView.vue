<template>
	<div class="catchall">
		<ryder-card>
			<div class="content">
				<p>Looks like you landed a page which doesn’t exist.</p>
			</div>
			<div class="fat-card__actions">
				<o-button
					v-if="!!userStore.user"
					tag="router-link"
					:to="{ name: DEFAULT_PRIVATE_ROUTE }"
					variant="primary"
					size="medium"
					expanded
				>
					Home
				</o-button>
				<o-button
					v-if="!userStore.user"
					:to="{ name: routeNames.login }"
					variant="primary"
					size="medium"
					expanded
					tag="router-link"
				>
					Log In
				</o-button>
			</div>
		</ryder-card>
	</div>
</template>

<script lang="ts">
import { RyderCard } from '@whiplashmerch/design-system';
import { defineComponent } from 'vue';

import { DEFAULT_PRIVATE_ROUTE, routeNames } from '@/router/route-names';
import { useUserStore } from '@/stores/user';


export default defineComponent({
	name: 'NotFound',
	components: {
		RyderCard,
	},
	setup() {
		return {
			userStore: useUserStore(),
		};
	},
	data() {
		return {
			DEFAULT_PRIVATE_ROUTE,
			routeNames,
		};
	},
});

</script>

<style lang="scss">
.catchall {
	text-align:center;
}
</style>
