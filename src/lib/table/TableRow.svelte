<script lang="ts">
	import { El } from '../el'
	import { get_current_component } from 'svelte/internal'
	import type { TableRowProps } from './Table.types'

	type $$Props = TableRowProps

	export let tag: $$Props['tag'] = 'tr'
	export let componentName: $$Props['componentName'] = 'table-row'
	export let color: $$Props['color'] = undefined
	export let active: $$Props['active'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let cssProps: $$Props = {}
	$: cssProps = {
		color,
		active,
	}
</script>

<El {components} {...$$restProps} {cssProps} {componentName} {tag}>
	<slot />
</El>
