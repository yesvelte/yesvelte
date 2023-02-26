<script lang="ts">
	import { getContext } from 'svelte'

	import { El } from '../el'

	import type { DialogCloseProps, DialogContext } from './Dialog.types'

	type $$Props = DialogCloseProps

	export let componentName: $$Props['componentName'] = 'dialog-close'

	const context: DialogContext = getContext('DIALOG')

	let props: any
	$: props = {
		componentName,
		type: 'button',
		tag: 'button',
		'aria-label': 'Close',
	}
</script>

{#if !!context}
	<El {...$$restProps} {...props} on:click={() => context.hide(true)} />
{/if}
