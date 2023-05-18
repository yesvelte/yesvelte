<script lang="ts">
	import { El } from '../el'
	import { get_current_component } from 'svelte/internal'
	import type { TableProps } from './Table.types'

	type $$Props = TableProps

	export let tag: $$Props['tag'] = 'table'
	export let componentName: $$Props['componentName'] = 'table'
	export let color: $$Props['color'] = undefined
	export let hover: $$Props['hover'] = undefined
	export let striped: $$Props['striped'] = undefined
	export let wrap: $$Props['wrap'] = undefined
	export let responsive: $$Props['responsive'] = undefined
	export let size: $$Props['size'] = undefined

	const components = [get_current_component(), ...($$props.components ?? [])]

	$: cssProps = {
		color,
		// border,
		hover,
		striped,
		wrap,
		size,
	}

	$: parentCssProps = {
		responsive,
	}

	$: otherProps = {
		tag,
		componentName,
	}
</script>

<El {components} componentName="{componentName}-wrapper" cssProps={parentCssProps}>
	<El {...$$restProps} {cssProps} {...otherProps}>
		<slot />
	</El>
</El>
