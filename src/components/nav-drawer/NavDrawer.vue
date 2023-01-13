<template>
	<div
		class="nav-drawer"
		:class="classes"
	>
		<div class="nav-drawer__content">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'StyleGuideSubsection',
	props: {
		active: {
			type: Boolean,
			required: true,
		},
		right: {
			type: Boolean,
			default: () => false,
		},
	},
	computed: {
		classes(): String[] {
			return [
				this.right ? 'is-right' : 'is-left',
				this.active ? 'is-active' : '',
			];
		},
	},
});
</script>

<style lang="scss">
.nav-drawer {
	$inactive-x:-105vw;
	$trans-dur:.25s;
	$trans-ease:ease-in-out;
	position:fixed;
	height:calc(100vh - $navbar-height);
	background:$white;
	top:$navbar-height;
	min-width:20rem;
	width:20rem;
	box-shadow: $wl-box-shadow;
	overflow-y:auto;

	&.is-left {
		left:$inactive-x;
		transition:left $trans-dur $trans-ease;

		&.is-active {
			left:0;
		}
	}

	&.is-right {
		right:$inactive-x;
		transition:right $trans-dur $trans-ease;

		&.is-active {
			right:0;
		}
	}

	&__content {
		padding:1rem;
	}

	@include desktop {
		display:none;
	}
}
</style>
