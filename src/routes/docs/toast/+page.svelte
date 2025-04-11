<script>
	import { Page, Doc, Preview } from '$components'
	import ToastDefault from './ToastDefault.svelte'
	import ToastWithoutCloseButton from './ToastWithoutCloseButton.svelte'
	import ToastToggleShow from './ToastToggleShow.svelte'
	import ToastStacking from './ToastStacking.svelte'
</script>

<Page title="Toast">
	{#snippet description()}
		Toasts are lightweight alert boxes which display for a few seconds after a user has taken an
		action, to inform them of the state or outcome. They can be used when a user clicks a button or
		submits a form and their aim is to provide feedback, rather than encourage to take action.
	{/snippet}

	<Doc title="Default">
		{#snippet description()}
			Use the default toast message to inform users of the outcome of their action and provide
			additional information. It contains an <code>X</code> close button to make it possible for users
			to close the toast if they wish.
		{/snippet}

		<Preview src="./ToastDefault.svelte">
			<ToastDefault />
		</Preview>
	</Doc>

	<Doc title="Without close button">
		{#snippet description()}
			Set the <code>showCloseButton</code> props as boolean.
		{/snippet}
		<Preview src="./ToastWithoutCloseButton.svelte">
			<ToastWithoutCloseButton />
		</Preview>
	</Doc>

	<Doc title="Toggle Show">
		{#snippet description()}
			Set the <code>show</code> props as boolean to show or hide toast.
		{/snippet}

		<Preview src="./ToastToggleShow.svelte">
			<ToastToggleShow />
		</Preview>
	</Doc>

	<Doc title="Stacking toasts">
		{#snippet description()}
			Stack multiple toasts together by putting them within one <code>ToastContainer</code>.
		{/snippet}

		<Preview src="./ToastStacking.svelte">
			<div class="custom-class">
				<ToastStacking />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class {
		height: 400px;
	}
</style>
