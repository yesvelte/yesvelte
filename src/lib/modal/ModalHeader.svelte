<script lang="ts">
	import type { ModalHeaderProps } from './Modal.types'
	import { El } from '../el'

	type $$Props = ModalHeaderProps

	export let componentName: $$Props['componentName'] = 'modal-header'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
