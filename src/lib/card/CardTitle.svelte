<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = Partial<ElProps>

	export let componentName: $$Props['componentName'] = 'card-title'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
