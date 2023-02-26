<script lang="ts">
	import type { DialogTitleProps } from './Dialog.types'
	import { El } from '../el'

	type $$Props = DialogTitleProps

	export let componentName: $$Props['componentName'] = 'dialog-title'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
