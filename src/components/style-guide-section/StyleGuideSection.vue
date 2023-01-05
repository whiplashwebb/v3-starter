<template>
	<div class="style-guide-section section">
		<o-collapse :open="active">
			<template #trigger>
				<div class="style-guide-section__header">
					<h2 class="style-guide-section__title title is-2">{{ title }}</h2>
					<o-icon :icon="active ? 'caret-up' : 'caret-down'" />
				</div>
			</template>
			<div class="style-guide-section__body">
				<slot />
			</div>
		</o-collapse>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'StyleGuideSection',
	props: {
		title: {
			type: String,
			required: true,
		},
		initiallyActive: {
			type: Boolean,
			default: () => false,
		},
	},
});
</script>

<style lang="scss">
.style-guide-section {
	&__header {
		display:flex;
		flex-direction: row;
		align-items: center;
		cursor:pointer;
	}

	&__title {
		margin-left:.5rem;
		flex:1 1 auto;
	}

	&__body {
		padding-top:2rem;
		border-top:1px solid $border;
	}
}
</style>
