<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El, type ElProps } from '../el'

	type $$Props = ElProps
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	export let componentName: $$Props['componentName'] = 'tab-content'
</script>

<El {components} {...$$restProps} {componentName}>
	<slot />
</El>
