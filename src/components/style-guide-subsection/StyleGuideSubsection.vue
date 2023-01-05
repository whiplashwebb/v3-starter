<template>
	<div class="style-guide-subsection">
		<h3 v-if="title" class="subtitle is-3">{{ title }}</h3>
		<div>
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'StyleGuideSubsection',
	props: {
		title: {
			type: String,
			default: () => '',
		},
	},

});
</script>

<style lang="scss">
.style-guide-subsection {
	@at-root & + & {
		margin-top:3rem;
	}
}
</style>
