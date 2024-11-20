<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	export let componentName: $$Props['componentName'] = 'modal-title'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
