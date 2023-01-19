<template>
	<div class="login-view">
		<ryder-card>
			<form>
				<o-field label="Email">
					<o-input
						v-model="email"
					/>
				</o-field>
				<o-field label="Password">
					<o-input
						v-model="password"
						type="password"
					/>
				</o-field>
				<o-field>
					<o-checkbox
						v-model="remember"
					>
						Remember me
					</o-checkbox>
				</o-field>
				<div class="buttons is-right">
					<o-button
						variant="primary"
						class="is-wide"
					>
						LOG IN
					</o-button>
				</div>
			</form>
		</ryder-card>
		<div class="login-view__actions">
			<div class="login-view__action">
				<a href="">Reset Password</a>
			</div>
			<div class="login-view__action">
				<a href="">Didn't receive the confirmation instructions?</a>
			</div>
			<div class="login-view__action">
				<a href="">Operator scan-based login</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import RyderCard from '@/components/ryder-card/RyderCard.vue';

export default defineComponent({
	name: 'LoginView',
	components: {
		RyderCard,
	},
	data() {
		return {
			email: '',
			password: '',
			remember: false,
		};
	},
});
</script>

<style lang="scss">
.login-view {
	&__actions {
		margin-top:1rem;

		> * + * {
			margin-top:.25rem;
		}
	}
}
</style>
