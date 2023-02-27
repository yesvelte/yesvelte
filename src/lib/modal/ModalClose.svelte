<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	import { El } from '../el'

	import type { ModalCloseProps } from './Modal.types'

	type $$Props = ModalCloseProps

	export let componentName: $$Props['componentName'] = 'modal-close'

	const dispatch = createEventDispatcher()

	let props: any
	$: props = {
		componentName,
		type: 'button',
		tag: 'button',
		'aria-label': 'Close',
	}
</script>

<El {...$$restProps} {...props} on:click={() => dispatch('close')} />
