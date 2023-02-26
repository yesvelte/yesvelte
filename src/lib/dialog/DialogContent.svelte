<script lang="ts">
	import { El } from '../el'
	import type { DialogContentProps } from './Dialog.types'

	type $$Props = DialogContentProps

	export let componentName: $$Props['componentName'] = 'dialog-content'

	function onClick(e: any) {
		e.stopPropagation()
	}
</script>

<El {...$$restProps} {componentName} on:click={onClick}>
	<slot />
</El>
