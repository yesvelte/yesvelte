<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	export let tag: $$Props['tag'] = 'tbody'
	export let componentName: $$Props['componentName'] = 'table-body'
	const components = [get_current_component(), ...($$props.components ?? [])]
</script>

<El {components} {...$$restProps} {componentName} {tag}>
	<slot />
</El>
