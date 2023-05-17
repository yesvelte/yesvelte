<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El, type ElProps } from '../el'

	type $$Props = Partial<ElProps>

	export let componentName: $$Props['componentName'] = 'card-title'
	const components = [get_current_component(), ...($$props.components ?? [])]
</script>

<El {components} {...$$restProps} {componentName}>
	<slot />
</El>
