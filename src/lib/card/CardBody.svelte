<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = Partial<ElProps>

	export let componentName: $$Props['componentName'] = 'card-body'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
