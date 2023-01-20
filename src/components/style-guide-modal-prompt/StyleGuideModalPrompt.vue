<template>
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">
				Example Prompt
			</p>
			<button
				class="delete"
				@click="$emit('close', {action: 'cancel', method: 'x'})"
			/>
		</header>
		<section class="modal-card-body">
			<div class="content">
				<p>Do you to agree to things? Also stuff?</p>
			</div>
		</section>
		<footer class="modal-card-foot">
			<div class="buttons">
				<o-button
					variant="primary"
					@click="$emit('close', { answer: 'yes' })"
				>
					Yes
				</o-button>
				<o-button
					variant="danger"
					@click="$emit('close', { answer: 'no' })"
				>
					No
				</o-button>
			</div>
		</footer>
	</div>
</template>
