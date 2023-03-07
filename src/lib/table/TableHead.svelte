<script lang="ts">
	import { setContext } from 'svelte'

	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	export let tag: $$Props['tag'] = 'thead'
	export let componentName: $$Props['componentName'] = 'table-head'

	setContext('TABLE:HEAD', true)
</script>

<El {...$$restProps} {componentName} {tag}>
	<slot />
</El>
