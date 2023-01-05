<template>
	<div class="style-guide-section">
		<o-collapse v-model:open="active">
			<template #trigger>
				<div class="style-guide-section__header section">
					<h2 class="style-guide-section__title title is-3">{{ title }}</h2>
					<o-icon :icon="active ? 'caret-up' : 'caret-down'" />
				</div>
			</template>
			<div class="style-guide-section__body section">
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
	data() {
		return {
			active: false,
		};
	},
	mounted() {
		this.active = this.initiallyActive;
	},
});
</script>

<style lang="scss">
.style-guide-section {
	$sgs-border:1px solid $border;

	&__header {
		display:flex;
		flex-direction: row;
		align-items: center;
		cursor:pointer;
	}

	&__title {
		flex:1 1 auto;
		margin:0 !important;
	}

	&__body {
		border-top:$sgs-border;
	}

	@at-root & + & {
		border-top:$sgs-border;
	}
}
</style>
