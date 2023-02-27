<script lang="ts">
	import type { ModalBodyProps } from './Modal.types'
	import { El } from '../el'

	type $$Props = ModalBodyProps

	export let componentName: $$Props['componentName'] = 'modal-body'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
