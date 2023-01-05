<template>
	<div
		class="style-guide"
		:class="{ 'is-dark': isDark }"
	>
		<div class="hero is-primary">
			<div class="hero-body">
				<div class="container">
					<div class="section">
						<h1 class="title is-1">Style Guide</h1>
						<div>
							<o-field>
								<o-switch variant="dark" v-model="isDark"> Dark Mode </o-switch>
							</o-field>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<style-guide-section
				title="Regular Buttons"
			>
				<style-guide-subsection>
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-regular`"
							:variant="variant"
							class="no-min"
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Hover">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-regular-hover`"
							:variant="variant"
							class="is-hovered"
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Active">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-regular-active`"
							:variant="variant"
							class="is-active"
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Focused">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-regular-focused`"
							:variant="variant"
							class="is-focused"
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Loading">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-regular-loading`"
							:variant="variant"
							class="is-loading"
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Disabled">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-regular-disabled`"
							:variant="variant"
							disabled
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
			</style-guide-section>
			<style-guide-section
				title="Button Sizes"
				initially-active
			>
				<style-guide-subsection>
					<div class="buttons">
						<o-button
							v-for="size in sizes"
							:key="`${size}-size`"
							:size="size"
							variant="primary"
							outlined
						>
							<span>{{ size || 'default' }}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Min Width">
					<div class="buttons">
						<div class="buttons">
							<o-button
								v-for="size in sizes"
								:key="`${size}-size-min`"
								:size="size"
								variant="primary"
								class="has-min-width"
								outlined
							>
								<span>{{ size || 'default' }}</span>
							</o-button>
						</div>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Wide">
					<div class="buttons">
						<o-button
							v-for="size in sizes"
							:key="`${size}-size-wide`"
							:size="size"
							variant="primary"
							class="is-wide"
							outlined
						>
							<span>{{ size || 'default' }}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Container Width">
					<div class="buttons limit-width">
						<o-button
							v-for="size in sizes"
							:key="`${size}-size-full`"
							:size="size"
							variant="primary"
							class="is-fullwidth"
							outlined
						>
							<span>{{ size || 'default' }}</span>
						</o-button>
					</div>
				</style-guide-subsection>
			</style-guide-section>
			<style-guide-section
				title="Outlined Buttons"
				initially-active
			>
				<style-guide-subsection>
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-outlined`"
							:variant="variant"
							outlined
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Hover">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-outlined-hover`"
							:variant="variant"
							class="is-hovered"
							outlined
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Active">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-outlined-active`"
							:variant="variant"
							class="is-active"
							outlined
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Focused">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-outlined-focused`"
							:variant="variant"
							class="is-focused"
							outlined
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Loading">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-outlined-loading`"
							:variant="variant"
							class="is-loading"
							outlined
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Disabled">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-outlined-disabled`"
							:variant="variant"
							disabled
							outlined
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
			</style-guide-section>
			<style-guide-section
				title="Inverted Buttons"
			>
				<style-guide-subsection>
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-inverted`"
							:variant="variant"
							inverted
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Hover">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-inverted-hover`"
							:variant="variant"
							class="is-hovered"
							inverted
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Active">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-inverted-active`"
							:variant="variant"
							class="is-active"
							inverted
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Focused">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-inverted-focused`"
							:variant="variant"
							class="is-focused"
							inverted
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Loading">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-inverted-loading`"
							:variant="variant"
							class="is-loading"
							inverted
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Disabled">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-inverted-disabled`"
							:variant="variant"
							disabled
							inverted
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
			</style-guide-section>
			<style-guide-section
				title="Light Buttons"
			>
				<style-guide-subsection>
					<div class="buttons">
						<o-button
							v-for="variant in colorVariants"
							:key="`${variant}-light`"
							:variant="variant"
							class="is-light"
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Hover">
					<div class="buttons">
						<o-button
							v-for="variant in colorVariants"
							:key="`${variant}-light-hover`"
							:variant="variant"
							class="is-hovered is-light"
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Active">
					<div class="buttons">
						<o-button
							v-for="variant in colorVariants"
							:key="`${variant}-light-active`"
							:variant="variant"
							class="is-active is-light"
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Focused">
					<div class="buttons">
						<o-button
							v-for="variant in colorVariants"
							:key="`${variant}-light-focused`"
							:variant="variant"
							class="is-focused is-light"
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Loading">
					<div class="buttons">
						<o-button
							v-for="variant in colorVariants"
							:key="`${variant}-light-loading`"
							:variant="variant"
							class="is-loading is-light"
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Disabled">
					<div class="buttons">
						<o-button
							v-for="variant in colorVariants"
							:key="`${variant}-light-disabled`"
							:variant="variant"
							class="is-light"
							disabled
						>
							<span>{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
			</style-guide-section>
		</div>
	</div>
</template>

<style lang="scss">
.style-guide {
	&.is-dark {
		background:$dark;
		color:$text-invert;

		.title, .subtitle {
			color:$text-invert;
		}
	}

	.limit-width {
		max-width:500px;
	}
}
</style>

<script lang="ts" src="./StyleGuideView.ts" />
