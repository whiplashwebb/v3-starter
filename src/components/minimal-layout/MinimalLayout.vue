<template>
	<div class="minimal-layout">
		<div class="minimal-layout__content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
.minimal-layout {
	width:100%;
	min-height:100vh;
	display:flex;
	flex-direction:column;
	align-items: center;
	justify-content: center;

	&__content {
		// When page content is short this counteracts an optical illusion where vertically centered content appears off-center
		margin-bottom:5vh;
	}
}
</style>
