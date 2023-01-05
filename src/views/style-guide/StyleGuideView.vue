<template>
	<div>
		<div class="hero is-primary">
			<div class="hero-body">
				<div class="container">
					<div class="section">
						<h1 class="title is-1">Style Guide</h1>
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
						>
							<span class="is-capitalized">{{variant}}</span>
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
							<span class="is-capitalized">{{variant}}</span>
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
							<span class="is-capitalized">{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Focused">
					<div class="buttons">
						<o-button
							v-for="variant in variants"
							:key="`${variant}-regular-active`"
							:variant="variant"
							class="is-focused"
						>
							<span class="is-capitalized">{{variant}}</span>
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
							<span class="is-capitalized">{{variant}}</span>
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
							<span class="is-capitalized">{{variant}}</span>
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
							<span class="is-capitalized">{{variant}}</span>
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
							<span class="is-capitalized">{{variant}}</span>
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
							<span class="is-capitalized">{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Focused">
					<div class="buttons">
						<o-button
							v-for="variant in colorVariants"
							:key="`${variant}-light-active`"
							:variant="variant"
							class="is-focused is-light"
						>
							<span class="is-capitalized">{{variant}}</span>
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
							<span class="is-capitalized">{{variant}}</span>
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
							<span class="is-capitalized">{{variant}}</span>
						</o-button>
					</div>
				</style-guide-subsection>
			</style-guide-section>
		</div>
	</div>
</template>

<script lang="ts" src="./StyleGuideView.ts" />
