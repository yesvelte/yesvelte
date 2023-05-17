<script lang="ts">
	import { getContext } from 'svelte'
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { TableCellProps } from './Table.types'

	type $$Props = TableCellProps

	export let tag: $$Props['tag'] = 'td'
	export let componentName: $$Props['componentName'] = 'table-cell'
	export let color: $$Props['color'] = undefined
	export let truncate: $$Props['truncate'] = undefined
	export let active: $$Props['active'] = undefined

	const components = [get_current_component(), ...($$props.components ?? [])]

	let head = getContext('TABLE:HEAD') ?? false

	$: cssProps = {
		color,
		truncate,
		active,
	}

	$: {
		tag = head ? 'th' : 'td'
	}
</script>

<El {components} {...$$restProps} {cssProps} {componentName} {tag}>
	<slot />
</El>
