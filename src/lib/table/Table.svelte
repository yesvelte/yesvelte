<script lang="ts">
	import { El } from '../el'
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

<El componentName="{componentName}-wrapper" cssProps={parentCssProps}>
	<El {...$$restProps} {cssProps} {...otherProps}>
		<slot />
	</El>
</El>
