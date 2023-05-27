<script lang="ts">
	import { setContext } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	export let tag: $$Props['tag'] = 'thead'
	export let componentName: $$Props['componentName'] = 'table-head'
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	setContext('TABLE:HEAD', true)
</script>

<El {components} {...$$restProps} {componentName} {tag}>
	<slot />
</El>
