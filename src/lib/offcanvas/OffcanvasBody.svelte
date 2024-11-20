<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	export let componentName: $$Props['componentName'] = 'offcanvas-body'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
