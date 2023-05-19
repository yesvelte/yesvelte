<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El, type ElProps } from '../el'

	type $$Props = ElProps
	const components = [get_current_component(), ...($$props.components ?? [])]

	export let componentName: $$Props['componentName'] = 'tab-content'
</script>

<El {components} {...$$restProps} {componentName}>
	<slot />
</El>
