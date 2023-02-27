<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	export let componentName: $$Props['componentName'] = 'modal-header'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
