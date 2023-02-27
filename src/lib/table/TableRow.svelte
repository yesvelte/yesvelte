<script lang="ts">
	import { El } from '../el'
	import type { TableRowProps } from './Table.types'

	type $$Props = TableRowProps

	export let tag: $$Props['tag'] = 'tr'
	export let componentName: $$Props['componentName'] = 'table-row'
	export let color: $$Props['color'] = undefined
	export let active: $$Props['active'] = undefined

	let cssProps: $$Props = {}
	$: cssProps = {
		color,
		active,
	}
</script>

<El {...$$restProps} {cssProps} {componentName} {tag}>
	<slot />
</El>
