<script lang="ts">
	import { El } from '../el'
	import type { OffcanvasBodyProps } from './Offcanvas.types'

	type $$Props = OffcanvasBodyProps

	export let componentName: $$Props['componentName'] = 'offcanvas-body'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
