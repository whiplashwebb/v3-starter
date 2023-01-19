<template>
	<div class="minimal-layout">
		<slot class="minimal-layout__content" />
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
