<script lang="ts">
	import type { DialogFooterProps } from './Dialog.types'
	import { El } from '../el'

	type $$Props = DialogFooterProps

	export let componentName: $$Props['componentName'] = 'dialog-footer'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
