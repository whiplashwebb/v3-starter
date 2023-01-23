<template>
	<div class="wrapper-view">
		<router-view class="wrapper-view__view" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'WrapperView',
});
</script>

<style lang="scss">
.wrapper-view {
	display:flex;
	flex-direction:row;
	align-items: stretch;

	&__view {
		flex: 1 1 auto;
	}
}
</style>
