<script lang="ts">
	import type { DialogBodyProps } from './Dialog.types'
	import { El } from '../el'

	type $$Props = DialogBodyProps

	export let componentName: $$Props['componentName'] = 'dialog-body'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
