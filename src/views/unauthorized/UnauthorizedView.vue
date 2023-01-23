<template>
	<div class="catchall">
		<ryder-card>
			<div class="content">
				<p>Your authorization has expired. Please log in to continue,</p>
			</div>
			<div class="buttons">
				<o-button
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
	name: 'UnauthorizedView',
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
	mounted() {
		this.userStore.logout();
	},
});

</script>

<style lang="scss">
.catchall {
	text-align:center;
}
</style>
