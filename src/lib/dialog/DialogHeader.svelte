<script lang="ts">
	import type { DialogHeaderProps } from './Dialog.types'
	import { El } from '../el'

	type $$Props = DialogHeaderProps

	export let componentName: $$Props['componentName'] = 'dialog-header'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
