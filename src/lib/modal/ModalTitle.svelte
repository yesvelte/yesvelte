<script lang="ts">
	import type { ModalTitleProps } from './Modal.types'
	import { El } from '../el'

	type $$Props = ModalTitleProps

	export let componentName: $$Props['componentName'] = 'modal-title'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
