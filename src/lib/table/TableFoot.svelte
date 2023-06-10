	<!-- @css:table -->

<script lang="ts">
	import { El, type ElProps } from '../el'
	import { get_current_component } from 'svelte/internal'

	type $$Props = ElProps

	export let tag: $$Props['tag'] = 'tfoot'
	export let componentName: $$Props['componentName'] = 'table-foot'
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
</script>

<El {components} {...$$restProps} {componentName} {tag}>
	<slot />
</El>
