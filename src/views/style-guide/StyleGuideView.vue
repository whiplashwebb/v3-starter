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
			<div class="section">
				<div class="content">
					<blockquote>
						<p>Welcome to the style guide! This page is intended to give developers using the design system a general idea of what components are available, as well as to give developers working on the system an easy way to see how global changes flow through the system.</p>
						<p>This page does <strong>not</strong> show every available component or every variant of the components. The system is built on top of <a href="https://oruga.io/documentation/" target="_blank">Oruga</a> and <a href="https://bulma.io/documentation/" target="_blank">Bulma</a>, each of which contain a wealth of components and options. Please have a look at their documentation to learn more about the wider options available.</p>
						<p><strong>Pro tip:</strong> At the time of this writing Oruga is still a young framework and it's docs are missing some details. However, it is the successor to <a href="https://buefy.org/documentation" target="_blank">Buefy</a>, a much more established framework with excellent docs. Since most Oruga components have been adapted from Buefy, checking out the Buefy docs can help fill in holes.</p>
					</blockquote>
				</div>
			</div>

			<style-guide-section title="Buttons">
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
				<style-guide-subsection title="Button Sizes">
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
				<style-guide-subsection title="Outlined">
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
				<style-guide-subsection title="Outlined Hover">
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
				<style-guide-subsection title="Outlined Active">
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
				<style-guide-subsection title="Outlined Focused">
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
				<style-guide-subsection title="Outlined Loading">
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
				<style-guide-subsection title="Outlined Disabled">
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
				<style-guide-subsection title="Inverted Buttons">
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
				<style-guide-subsection title="Inverted Hover">
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
				<style-guide-subsection title="Inverted Active">
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
				<style-guide-subsection title="Inverted Focused">
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
				<style-guide-subsection title="Inverted Loading">
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
				<style-guide-subsection title="Inverted Disabled">
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
				<style-guide-subsection title="Light Buttons">
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
				<style-guide-subsection title="Light Hover">
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
				<style-guide-subsection title="Light Active">
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
				<style-guide-subsection title="Light Focused">
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
				<style-guide-subsection title="Light Loading">
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
				<style-guide-subsection title="Light Disabled">
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
			<style-guide-section title="Inputs">
				<style-guide-subsection>
					<o-field
						label="Standard Input"
						message="This is the optional help text for the standard input"
					>
						<o-input
							v-model="exampleInput"
						/>
					</o-field>
					<o-field
						label="Standard Input Placeholder"
						message="This is the optional help text for the standard input"
					>
						<o-input
							placeholder="Enter input..."
						/>
					</o-field>
					<o-field
						label="Error Input"
						variant="danger"
						message="This is the optional help text for the standard input"
					>
						<o-input
							v-model="exampleInput"
						/>
					</o-field>
					<o-field
						label="Disabled Input"
						placeholder="Input disabled"
						message="This is the optional help text for the standard input"
					>
						<o-input
							v-model="exampleInput"
							disabled
						/>
					</o-field>
				</style-guide-subsection>
			</style-guide-section>
			<style-guide-section title="Input Misc">

				<style-guide-subsection title="Switches">

					<o-field>
						<o-switch v-model="switches[0]">On</o-switch>
					</o-field>

					<o-field>
						<o-switch>Off</o-switch>
					</o-field>

					<o-field>
						<o-switch v-model="switches[1]" disabled>On Disabled</o-switch>
					</o-field>

					<o-field>
						<o-switch disabled>Off Disabled</o-switch>
					</o-field>

				</style-guide-subsection>

				<style-guide-subsection title="Checkboxes">
					<div class="field">
						<o-checkbox v-model="checks[0]">
							Checked
						</o-checkbox>
					</div>
					<div class="field">
						<o-checkbox v-model="checks[1]">
							Unchecked
						</o-checkbox>
					</div>
					<div class="field">
						<o-checkbox v-model="checks[2]" disabled>
							Checked and Disabled
						</o-checkbox>
					</div>
					<div class="field">
						<o-checkbox v-model="checks[3]" disabled>
							Unchecked and Disabled
						</o-checkbox>
					</div>
				</style-guide-subsection>

				<style-guide-subsection title="Radios">
					<div class="block">
						<o-radio v-model="radio" name="name" native-value="Foo">
							Foo
						</o-radio>
						<o-radio v-model="radio" name="name" native-value="Bar">
							Bar
						</o-radio>
						<o-radio v-model="radio" name="name" native-value="Fiz" disabled>
							Fiz
						</o-radio>
					</div>
				</style-guide-subsection>

				<style-guide-subsection title="Data/Time Pickers">
					<o-field label="Select a date">
						<o-datepicker
							placeholder="Click to select..."
							icon="calendar"
							trap-focus
						/>
					</o-field>
					<o-field label="Select time">
						<o-timepicker
							placeholder="Click to select..."
							icon="clock"
						/>
					</o-field>
					<o-field label="Select datetime">
						<o-datetimepicker
							placeholder="Click to select..."
							icon="calendar"
						/>
					</o-field>

				</style-guide-subsection>
			</style-guide-section>
			<style-guide-section title="Modals">
				<style-guide-subsection>
					<div class="buttons">
						<o-button
							variant="primary"
							@click="basicModalOpen = !basicModalOpen"
						>
							Basic Modal
						</o-button>
						<o-button
							variant="primary"
							outlined
							@click="openModal"
						>
							Programmatic Modal
						</o-button>
						<o-button
							variant="info"
							@click="openPrompt"
						>
							Prompt
						</o-button>
					</div>

					<o-modal
						v-model:active="basicModalOpen"
						scroll="clip"
					>
						<style-guide-modal-card />
					</o-modal>

				</style-guide-subsection>

			</style-guide-section>
			<style-guide-section title="Pills">
				<style-guide-subsection>
					<div class="content">
						<blockquote>
							<p>Pills are a new component that doesn't exist in Bulma or Orgua. It replaces Filter Pills from the legacy design system.</p>
						</blockquote>
					</div>

				</style-guide-subsection>
				<style-guide-subsection>
					<div class="pills">
						<span
							v-for="variant in pillVariants"
							:key="`${variant}-pill-regular`"
							:class="`pill is-${variant}`"
						>
							<span class="is-capitalized">{{ variant }}</span>
						</span>
					</div>

				</style-guide-subsection>

				<style-guide-subsection title="Pill Sizes">
					<div class="pills">
						<span
							v-for="size in sizes"
							:key="`${size}-pill-regular`"
							:class="`pill is-primary is-${size}`"
						>
							<span class="is-capitalized">{{ size || 'Default' }}</span>
						</span>
					</div>

				</style-guide-subsection>

			</style-guide-section>
			<style-guide-section title="Selects">
				<style-guide-subsection>
					<o-field
						label="Basic Select"
						message="This is the optional help text for the standard input"
					>
						<o-select placeholder="Select a name">
							<option
								v-for="(option, index) in selectOptions"
								:key="`select-basic-${index}`"
							>
								{{ option }}
							</option>
						</o-select>
					</o-field>
					<o-field
						label="Error Select"
						variant="danger"
						message="This is the optional help text for the standard input"
					>
						<o-select placeholder="Select a name">
							<option
								v-for="(option, index) in selectOptions"
								:key="`select-error-${index}`"
							>
								{{ option }}
							</option>
						</o-select>
					</o-field>
					<o-field
						label="Disabled Select"
						message="This is the optional help text for the standard input"
					>
						<o-select
							placeholder="Select a name"
							disabled
						>
							<option
								v-for="(option, index) in selectOptions"
								:key="`select-disabled-${index}`"
							>
								{{ option }}
							</option>
						</o-select>
					</o-field>
				</style-guide-subsection>
			</style-guide-section>
			<style-guide-section title="Sliders">
				<style-guide-subsection>
					<o-field label="Default Slider"					>
						<o-slider
							v-model="sliderValue"
						/>
					</o-field>
					<o-field
						v-for="variant in colorVariants"
						:key="`slider-${variant}`"
						:label="`${variant} Slider`"
						label-class="is-capitalized"
					>
						<o-slider
							v-model="sliderValue"
							:variant="variant"
						/>
					</o-field>
					<o-field label="Disabled Slider"					>
						<o-slider
							v-model="sliderValue"
							disabled
						/>
					</o-field>
				</style-guide-subsection>
				<style-guide-subsection title="Ranges">
					<o-field label="Default Range">
						<o-slider
							v-model="rangeValues"
							:min="1"
							:max="15"
							:step="0.5"
						/>
					</o-field>
				</style-guide-subsection>
			</style-guide-section>
			<style-guide-section title="Tags">
				<style-guide-subsection>
					<div class="content">
						<blockquote>
							<p>Tags currently don't exist in Oruga, only in Bulma. It's a bit unclear why but I suspect it's because there's so simple a component doesn't really accomplish much. Personally I think this would make sense.<br> Read the <a href="https://bulma.io/documentation/elements/tag/" target="_blank">Bulma Docs</a> to learn more.</p>
							<p>Tags are the equivalent of context labels in the legacy design system.</p>
						</blockquote>
					</div>

				</style-guide-subsection>
				<style-guide-subsection>
					<div class="tags">
						<span
							v-for="variant in variants"
							:key="`${variant}-tag-regular`"
							:class="`tag is-${variant}`"
						>
							<span class="is-capitalized">{{ variant }}</span>
						</span>
					</div>

				</style-guide-subsection>

				<style-guide-subsection title="Tags with Addons">
					<div class="field is-grouped is-grouped-multiline">
						<div
							class="control"
							v-for="variant in variants"
							:key="`${variant}-tag-addon`"
						>
							<div class="tags has-addons">
								<a :class="`tag is-${variant}`">
									<span class="is-capitalized">{{ variant }}</span>
								</a>
								<a class="tag is-delete"></a>
							</div>
						</div>
					</div>

				</style-guide-subsection>

				<style-guide-subsection title="Rounded Tags">
					<div class="tags">
						<span
							v-for="variant in variants"
							:key="`${variant}-tag-rounded`"
							:class="`tag is-${variant} is-rounded`"
						>
							<span class="is-capitalized">{{ variant }}</span>
						</span>
					</div>

				</style-guide-subsection>

				<style-guide-subsection title="Tag Sizes">
					<div class="tags">
						<span
							v-for="size in tagSizes"
							:key="`${size}-tag-regular`"
							:class="`tag is-primary is-${size}`"
						>
							<span class="is-capitalized">{{ size || 'Default' }}</span>
						</span>
					</div>

				</style-guide-subsection>

			</style-guide-section>
			<style-guide-section title="Toasts">
				<style-guide-subsection>
					<div class="content">
						<blockquote>
							<p>Toasts are a bit of a moving target in terms of naming. "Toast" is the most common name for this kind of thing, which is why I've opted for this name. Oruga refers to them as "Notifications", which imho is confusing but is technically the most accurate as oruga powers our toasts. Buefy had toasts and snackbars, which were two variations on this theme. Bulma doesn't define this at all as it's very javascript-y.</p>
							<p>Utility methods are provided for success and error toasts, which default to toasts which will expire after a 10 seconds and can be dismissed by the user. Duration can be configured in the global oruga config. If you need non-dismissable toasts you can use <code>oruga.notification.open()</code> directly.</p>
						</blockquote>
					</div>

				</style-guide-subsection>
				<style-guide-subsection>
					<div class="buttons">
						<o-button
							variant="success"
							@click="popSuccessToast"
						>
							Success Toast
						</o-button>
						<o-button
							variant="danger"
							@click="popErrorToast"
						>
							Error Toast
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
