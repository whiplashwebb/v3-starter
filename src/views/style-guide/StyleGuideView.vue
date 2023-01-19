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
						<p>The system is built on top of <a href="https://oruga.io/documentation/" target="_blank">Oruga</a> and <a href="https://bulma.io/documentation/" target="_blank">Bulma</a>, each of which contain a wealth of components and options. This page mostly shows components from Oruga but there are some css-only components represented from Bulma. This page does <strong>not</strong> show every available component or every variant of the components. Please have a look at the Oruga and Bulma documentation to learn more about the wider options available.</p>
						<p><strong>Pro tip:</strong> At the time of this writing Oruga is still a young framework and it's docs are missing some details. However, it is the successor to <a href="https://buefy.org/documentation" target="_blank">Buefy</a>, a much more established framework with excellent docs. Since most Oruga components have been adapted from Buefy, checking out the Buefy docs can help fill in holes.</p>
					</blockquote>
				</div>
			</div>

			<style-guide-section title="Autocomplete">
				<style-guide-subsection>
					<o-autocomplete
						v-model="autocompleteQuery"
						icon="search"
						clearable
						:data="autocompleteResults"
					>
						<template #empty>No results found</template>
					</o-autocomplete>

				</style-guide-subsection>

				<style-guide-subsection title="Inline Results">
					<o-autocomplete
						root-class="has-inline-results"
						v-model="inlineAutocompleteQuery"
						icon="search"
						clearable
						:data="inlineAutocompleteResults"
					>
						<template #empty>No results found</template>
					</o-autocomplete>

				</style-guide-subsection>

			</style-guide-section>
			<style-guide-section title="Breadcrumbs">
				<style-guide-subsection>
					<div class="content">
						<blockquote>
							<p>Breadcrumbs exists in Bulma but doesn't exist in Oruga as it doesn't really need js.</p>
						</blockquote>
					</div>

				</style-guide-subsection>
				<style-guide-subsection>
					<nav class="breadcrumb" aria-label="breadcrumbs">
						<ul>
							<li
								v-for="item in breadcrumbItems"
								:key="item.label"
								:class="item.active ? 'is-active' : ''"
							>
								<a :href="item.url">
									<o-icon
										v-if="item.icon"
										:icon="item.icon"
										size="small"
									/>
									<span>{{ item.label }}</span>
								</a>
							</li>
						</ul>
					</nav>

				</style-guide-subsection>

			</style-guide-section>
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
			<style-guide-section title="Cards" >
				<style-guide-subsection>
					<div class="content">
						<blockquote>
							<p>Card is another simple, bulma-only component. It's also insanely handy.</p>
						</blockquote>
					</div>

				</style-guide-subsection>
				<style-guide-subsection>
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Example Card
							</p>
							<button class="card-header-icon" aria-label="more options">
								<o-icon
									icon="angle-down"
								/>
							</button>
						</header>
						<div class="card-content">
							<div class="content" v-html="cardIpsum" />
						</div>
						<footer class="card-footer">
							<a href="#" class="card-footer-item">Save</a>
							<a href="#" class="card-footer-item">Edit</a>
							<a href="#" class="card-footer-item">Delete</a>
						</footer>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="No Header">
					<div class="card">
						<div class="card-content">
							<div class="content" v-html="cardIpsum" />
						</div>
						<footer class="card-footer">
							<a href="#" class="card-footer-item">Save</a>
							<a href="#" class="card-footer-item">Edit</a>
							<a href="#" class="card-footer-item">Delete</a>
						</footer>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="No Footer">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Example Card
							</p>
							<button class="card-header-icon" aria-label="more options">
								<o-icon
									icon="angle-down"
								/>
							</button>
						</header>
						<div class="card-content">
							<div class="content" v-html="cardIpsum" />
						</div>
					</div>
				</style-guide-subsection>
				<style-guide-subsection title="Content Only">
					<div class="card">
						<div class="card-content">
							<div class="content" v-html="cardIpsum" />
						</div>
					</div>
				</style-guide-subsection>

			</style-guide-section>
			<style-guide-section title="Carousel">
				<style-guide-subsection>
					<o-carousel>
						<o-carousel-item
							v-for="(image, i) in carouselImages"
							:key="`car-${i}`"
						>
							<figure class="image is-16by9">
								<img :src="image" />
							</figure>
						</o-carousel-item>
					</o-carousel>

				</style-guide-subsection>

			</style-guide-section>
			<style-guide-section title="Dropdowns">
				<style-guide-subsection>
					<o-dropdown>
						<template #trigger="{ active }">
							<o-button
								variant="primary"
								:icon-right="active ? 'caret-up' : 'caret-down'"
							>
								Click Me!
							</o-button>
						</template>

						<o-dropdown-item>Action</o-dropdown-item>
						<o-dropdown-item>Another action</o-dropdown-item>
						<o-dropdown-item>Something else</o-dropdown-item>
					</o-dropdown>

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
			<style-guide-section title="Loading">
				<style-guide-subsection>
					<div class="buttons">
						<o-button
							variant="primary"
							@click="showLoading = true"
						>Display Loading</o-button>
					</div>

					<o-loading
						v-model:active="showLoading"
						full-page
						:can-cancel="true"
					></o-loading>

				</style-guide-subsection>

			</style-guide-section>
			<style-guide-section title="Menu">
				<style-guide-subsection>
					<o-menu>
						<o-menu-list label="Menu">
							<o-menu-item icon="info-circle" label="Info"></o-menu-item>
							<o-menu-item class="is-reversed" icon="info-circle" label="Info (Reversed Icon)"></o-menu-item>
							<o-menu-item icon="cog">
								<template #label="props">
									Administrator
									<o-icon class="is-pulled-right" :icon="props.expanded ? 'chevron-up' : 'chevron-down'"></o-icon>
								</template>
								<o-menu-item icon="user" label="Users"></o-menu-item>
								<o-menu-item icon="mobile">
									<template #label>
										Devices
									</template>
								</o-menu-item>
								<o-menu-item icon="money-bill" label="Payments" disabled></o-menu-item>
							</o-menu-item>
							<o-menu-item icon="user" label="My Account">
								<o-menu-item label="Account data"></o-menu-item>
								<o-menu-item label="Addresses"></o-menu-item>
							</o-menu-item>
						</o-menu-list>
						<o-menu-list>
							<o-menu-item label="Documentation" icon="link" tag="a" target="_blank" href="/documentation/"></o-menu-item>
						</o-menu-list>
						<o-menu-list label="Actions">
							<o-menu-item label="Logout"></o-menu-item>
						</o-menu-list>
					</o-menu>

				</style-guide-subsection>

			</style-guide-section>
			<style-guide-section title="Messages">
				<style-guide-subsection>
					<div class="content">
						<blockquote>
							<p>Messages are not currently implemented in Oruga. However, it's easy to use the Bulma styles without a component.</p>
						</blockquote>
					</div>

				</style-guide-subsection>
				<style-guide-subsection>
					<article
						v-for="variant in messageVariants"
						:key="`message-${variant}`"
						class="message"
						:class="`is-${variant}`"
					>
						<div class="message-header">
							<p class="is-capitalized">{{ variant }} Message</p>
							<button class="delete" aria-label="delete"></button>
						</div>
						<div class="message-body">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
						</div>
					</article>

				</style-guide-subsection>
				<style-guide-subsection title="Message Sizes">
					<article
						v-for="size in sizes"
						:key="`message-${size}`"
						class="message"
						:class="`is-${size}`"
					>
						<div class="message-header">
							<p class="is-capitalized">{{ size || 'Normal' }} Size Message</p>
							<button class="delete" aria-label="delete"></button>
						</div>
						<div class="message-body">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
						</div>
					</article>

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
			<style-guide-section title="Pagination" >
				<style-guide-subsection>
					<o-pagination
						v-model:current="paginationCurrent"
						:total="paginationTotal"
						:per-page="paginationPerPage"
					/>
				</style-guide-subsection>
				<style-guide-subsection title="Centered Pagination">
					<o-pagination
						v-model:current="paginationCurrent"
						:total="paginationTotal"
						:per-page="paginationPerPage"
						order="centered"
					/>
				</style-guide-subsection>
				<style-guide-subsection title="Left Pagination">
					<o-pagination
						v-model:current="paginationCurrent"
						:total="paginationTotal"
						:per-page="paginationPerPage"
						order="left"
					/>
				</style-guide-subsection>
				<style-guide-subsection title="Simple Pagination">
					<o-pagination
						v-model:current="paginationCurrent"
						:total="paginationTotal"
						:per-page="paginationPerPage"
						simple
					/>
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
			<style-guide-section title="Progress Bars">
				<style-guide-subsection>
					<div class="content">
						<blockquote>
							<p>Progress Bars are another simple bulma-only component.</p>
						</blockquote>
					</div>

				</style-guide-subsection>
				<style-guide-subsection>
					<progress
						v-for="variant in progressVariants"
						:key="`progress-${variant}`"
						class="progress"
						:class="`is-${ variant }`"
						:value="progressValue"
						:max="progressMax"
					>
						{{ progressValue }}%
					</progress>
				</style-guide-subsection>
				<style-guide-subsection title="Indeterminate (aka Loading)">
					<progress
						v-for="variant in progressVariants"
						:key="`progress-indy-${variant}`"
						class="progress"
						:class="`is-${ variant }`"
						:max="progressMax"
					>
						{{ progressValue }}%
					</progress>
				</style-guide-subsection>
				<style-guide-subsection title="Sizes">
					<progress
						v-for="size in sizes"
						:key="`progress-${size}`"
						class="progress is-primary"
						:class="`is-${ size }`"
						:max="progressMax"
						:value="progressValue"
					>
						{{ progressValue }}%
					</progress>
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
			<style-guide-section title="Tables">
				<style-guide-subsection>
					<div class="content">
						<blockquote>
							<p>The table component has a crazy number of options and variations, which I'm not going to attempt to capture here. <strong>Please</strong> consult the Oruga and Bulma docs for details.</p>
						</blockquote>
					</div>

				</style-guide-subsection>
				<style-guide-subsection>
					<o-table
						:data="tableData"
						striped
					>
						<o-table-column
							v-for="(column, i) in tableColumns"
							v-bind="column"
							:key="`column-${i}`"
							#default="{ row }"
							sortable
						>
							{{ row[column.field]}}
						</o-table-column>
					</o-table>

				</style-guide-subsection>

			</style-guide-section>
			<style-guide-section title="Tabs">
				<style-guide-subsection>
					<o-tabs v-model="activeTab">
						<o-tab-item
							:value="tabSections.pictures"
							label="Pictures"
						>
							Lorem ipsum dolor sit amet.
						</o-tab-item>

						<o-tab-item :value="tabSections.music" label="Music">
							Lorem <br />
							ipsum <br />
							dolor <br />
							sit <br />
							amet.
						</o-tab-item>

						<o-tab-item
							:value="tabSections.books"
							label="Books"
							icon="book"
						>
							What light is light, if Silvia be not seen? <br />
							What joy is joy, if Silvia be not by— <br />
							Unless it be to think that she is by <br />
							And feed upon the shadow of perfection? <br />
							Except I be by Silvia in the night, <br />
							There is no music in the nightingale.
						</o-tab-item>

						<o-tab-item :value="tabSections.videos" label="Videos" icon="video" disabled>
							Nunc nec velit nec libero vestibulum eleifend. Curabitur pulvinar congue
							luctus. Nullam hendrerit iaculis augue vitae ornare. Maecenas vehicula
							pulvinar tellus, id sodales felis lobortis eget.
						</o-tab-item>
					</o-tabs>

				</style-guide-subsection>
				<style-guide-subsection title="Boxed">
					<o-tabs
						v-model="activeTab"
						type="boxed"
					>
						<o-tab-item
							:value="tabSections.pictures"
							label="Pictures"
						>
							Lorem ipsum dolor sit amet.
						</o-tab-item>

						<o-tab-item :value="tabSections.music" label="Music">
							Lorem <br />
							ipsum <br />
							dolor <br />
							sit <br />
							amet.
						</o-tab-item>

						<o-tab-item
							:value="tabSections.books"
							label="Books"
							icon="book"
						>
							What light is light, if Silvia be not seen? <br />
							What joy is joy, if Silvia be not by— <br />
							Unless it be to think that she is by <br />
							And feed upon the shadow of perfection? <br />
							Except I be by Silvia in the night, <br />
							There is no music in the nightingale.
						</o-tab-item>

						<o-tab-item :value="tabSections.videos" label="Videos" icon="video" disabled>
							Nunc nec velit nec libero vestibulum eleifend. Curabitur pulvinar congue
							luctus. Nullam hendrerit iaculis augue vitae ornare. Maecenas vehicula
							pulvinar tellus, id sodales felis lobortis eget.
						</o-tab-item>
					</o-tabs>

				</style-guide-subsection>
				<style-guide-subsection title="Toggle">
					<o-tabs
						v-model="activeTab"
						type="toggle"
					>
						<o-tab-item
							:value="tabSections.pictures"
							label="Pictures"
						>
							Lorem ipsum dolor sit amet.
						</o-tab-item>

						<o-tab-item :value="tabSections.music" label="Music">
							Lorem <br />
							ipsum <br />
							dolor <br />
							sit <br />
							amet.
						</o-tab-item>

						<o-tab-item
							:value="tabSections.books"
							label="Books"
							icon="book"
						>
							What light is light, if Silvia be not seen? <br />
							What joy is joy, if Silvia be not by— <br />
							Unless it be to think that she is by <br />
							And feed upon the shadow of perfection? <br />
							Except I be by Silvia in the night, <br />
							There is no music in the nightingale.
						</o-tab-item>

						<o-tab-item :value="tabSections.videos" label="Videos" icon="video" disabled>
							Nunc nec velit nec libero vestibulum eleifend. Curabitur pulvinar congue
							luctus. Nullam hendrerit iaculis augue vitae ornare. Maecenas vehicula
							pulvinar tellus, id sodales felis lobortis eget.
						</o-tab-item>
					</o-tabs>

				</style-guide-subsection>
				<style-guide-subsection title="Vertical">
					<o-tabs v-model="activeVerticalTab" vertical>
						<o-tab-item
							:value="tabSections.pictures"
							label="Pictures"
						>
							Lorem ipsum dolor sit amet.
						</o-tab-item>

						<o-tab-item :value="tabSections.music" label="Music">
							Lorem <br />
							ipsum <br />
							dolor <br />
							sit <br />
							amet.
						</o-tab-item>

						<o-tab-item
							:value="tabSections.books"
							label="Books"
							icon="book"
						>
							What light is light, if Silvia be not seen? <br />
							What joy is joy, if Silvia be not by— <br />
							Unless it be to think that she is by <br />
							And feed upon the shadow of perfection? <br />
							Except I be by Silvia in the night, <br />
							There is no music in the nightingale.
						</o-tab-item>

						<o-tab-item :value="tabSections.videos" label="Videos" icon="video" disabled>
							Nunc nec velit nec libero vestibulum eleifend. Curabitur pulvinar congue
							luctus. Nullam hendrerit iaculis augue vitae ornare. Maecenas vehicula
							pulvinar tellus, id sodales felis lobortis eget.
						</o-tab-item>
					</o-tabs>

				</style-guide-subsection>
				<style-guide-subsection title="Vertical Boxed">
					<o-tabs
						v-model="activeVerticalTab"
						type="boxed"
						vertical
					>
						<o-tab-item
							:value="tabSections.pictures"
							label="Pictures"
						>
							Lorem ipsum dolor sit amet.
						</o-tab-item>

						<o-tab-item :value="tabSections.music" label="Music">
							Lorem <br />
							ipsum <br />
							dolor <br />
							sit <br />
							amet.
						</o-tab-item>

						<o-tab-item
							:value="tabSections.books"
							label="Books"
							icon="book"
						>
							What light is light, if Silvia be not seen? <br />
							What joy is joy, if Silvia be not by— <br />
							Unless it be to think that she is by <br />
							And feed upon the shadow of perfection? <br />
							Except I be by Silvia in the night, <br />
							There is no music in the nightingale.
						</o-tab-item>

						<o-tab-item :value="tabSections.videos" label="Videos" icon="video" disabled>
							Nunc nec velit nec libero vestibulum eleifend. Curabitur pulvinar congue
							luctus. Nullam hendrerit iaculis augue vitae ornare. Maecenas vehicula
							pulvinar tellus, id sodales felis lobortis eget.
						</o-tab-item>
					</o-tabs>

				</style-guide-subsection>
				<style-guide-subsection title="Vertical Toggle">
					<o-tabs
						v-model="activeVerticalTab"
						type="toggle"
						vertical
					>
						<o-tab-item
							:value="tabSections.pictures"
							label="Pictures"
						>
							Lorem ipsum dolor sit amet.
						</o-tab-item>

						<o-tab-item :value="tabSections.music" label="Music">
							Lorem <br />
							ipsum <br />
							dolor <br />
							sit <br />
							amet.
						</o-tab-item>

						<o-tab-item
							:value="tabSections.books"
							label="Books"
							icon="book"
						>
							What light is light, if Silvia be not seen? <br />
							What joy is joy, if Silvia be not by— <br />
							Unless it be to think that she is by <br />
							And feed upon the shadow of perfection? <br />
							Except I be by Silvia in the night, <br />
							There is no music in the nightingale.
						</o-tab-item>

						<o-tab-item :value="tabSections.videos" label="Videos" icon="video" disabled>
							Nunc nec velit nec libero vestibulum eleifend. Curabitur pulvinar congue
							luctus. Nullam hendrerit iaculis augue vitae ornare. Maecenas vehicula
							pulvinar tellus, id sodales felis lobortis eget.
						</o-tab-item>
					</o-tabs>

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
			<style-guide-section title="Toasts & Notifications">
				<style-guide-subsection>
					<div class="content">
						<blockquote>
							<p>Toasts are a bit of a moving target in terms of naming. Here I'm referring to "Small messages that pop up on the edge of the screen to display errors etc.". "Toast" is the most common name for this kind of thing, which is why I've opted for this name. In Oruga you raise a toast by calling `oruga.notification.open()` which displays a notification component in the corner of the screen. However, you can also use notifications as banners, so this can be confusing. Buefy had toasts and snackbars, which were two variations on this theme. Bulma doesn't define this at all as it's very javascript-y. But enough of this naming rabbit hole.</p>
							<p>Utility methods are provided for success and error toasts, which default to toasts which will expire after a 10 seconds and can be dismissed by the user. Duration can be configured in the global oruga config. If you need non-dismissable toasts you can use <code>oruga.notification.open()</code> directly.</p>
							<p>As mentioned earlier, you can also use a notification as a banner. If you're looking for a full-page banner at the top of the page to alert the user of something, this is the component for that job.</p>
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
				<style-guide-subsection title="Banner Variants">
					<o-notification
						v-for="variant in messageVariants"
						:key="`notification-${variant}`"
						:variant="variant"
						closable
					>
						<span class="is-capitalized">{{ variant }}</span> Notification : Yacht write little being street mountain-top certainly which after. Raised utter document bowsprit foreign manned summoned storms trapped.
					</o-notification>
				</style-guide-subsection>
				<style-guide-subsection title="Light Banner Variants">
					<o-notification
						v-for="variant in colorVariants"
						:key="`notification-${variant}-light`"
						:variant="variant"
						class="is-light"
						closable
					>
						Light <span class="is-capitalized">{{ variant }}</span> Notification : Yacht write little being street mountain-top certainly which after. Raised utter document bowsprit foreign manned summoned storms trapped.
					</o-notification>
				</style-guide-subsection>
				<style-guide-subsection title="Semantic Variants with Icons">
					<o-notification
						v-for="variant in semanticVariants"
						:key="`notification-${variant}`"
						:variant="variant"
						:type="variant"
						closable
					>
						<span class="is-capitalized">{{ variant }}</span> Notification : Yacht write little being street mountain-top certainly which after. Raised utter document bowsprit foreign manned summoned storms trapped.
					</o-notification>
				</style-guide-subsection>
				<style-guide-subsection title="Light Semantic Variants with Icons">
					<o-notification
						v-for="variant in semanticVariants"
						:key="`notification-${variant}-light`"
						:variant="variant"
						class="is-light"
						:type="variant"
						closable
					>
						Light <span class="is-capitalized">{{ variant }}</span> Notification : Yacht write little being street mountain-top certainly which after. Raised utter document bowsprit foreign manned summoned storms trapped.
					</o-notification>
				</style-guide-subsection>

			</style-guide-section>
			<style-guide-section title="Tooltips">
				<style-guide-subsection>
					<div class="buttons">
						<o-tooltip
							v-for="variant in colorVariants"
							:key="`tooltip-${variant}`"
							label="I'm the tooltip!"
							class="mr-4"
							:active="true"
							:variant="variant"
							always
						>
							<o-button
								:variant="variant"
								outlined
							>
								<span class="is-capitalized">{{ variant}}</span> Tooltip &nbsp;</o-button>
						</o-tooltip>
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

	.b-tabs {
		&.is-vertical {
			> .tabs {
				flex:0 0 auto;
				min-width:150px;
			}
		}
	}

	.menu {
		max-width:400px;
	}
}
</style>

<script lang="ts" src="./StyleGuideView.ts" />
