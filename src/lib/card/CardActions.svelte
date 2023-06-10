<!-- @css:card -->
<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El, type ElProps } from '../el'

	type $$Props = Partial<ElProps>

	export let componentName: $$Props['componentName'] = 'card-actions'
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
</script>

<El {components} {...$$restProps} {componentName}>
	<slot />
</El>
