<template>
	<div class="ryder-card card">
		<div class="ryder-card__content card-content">
			<div class="ryder-card__logo">
				<img :src="ryderEcomLogoUrl" />
			</div>
			<div class="ryder-card__body">
				<slot />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ryderEcomLogoUrl from '@/assets/RyderEcommerce_by_Whiplash_RGB.svg';

export default defineComponent({
	name: 'RyderCard',
	data() {
		return {
			ryderEcomLogoUrl,
		};
	},
});
</script>

<style lang="scss">
.ryder-card {
	background-color:$white-bis;
	min-width:400px;
	box-shadow: none;

	&__content {
		display:flex;
		flex-direction:column;
		align-items: center;
		justify-content: center;
		padding:2rem;
	}

	&__logo {
		width:250px;
		margin-bottom:1rem;
	}

	&__body {
		width:100%;
	}
}
</style>
