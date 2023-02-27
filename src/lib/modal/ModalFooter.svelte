<script lang="ts">
	import type { ModalFooterProps } from './Modal.types'
	import { El } from '../el'

	type $$Props = ModalFooterProps

	export let componentName: $$Props['componentName'] = 'modal-footer'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
