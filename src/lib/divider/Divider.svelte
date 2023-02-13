<script lang="ts">
	import { El } from '../el'
	import type { DividerProps } from './Divider.types'

	type $$Props = DividerProps

	export let componentName: $$Props['componentName'] = 'divider'
	export let color: $$Props['color'] = undefined
	export let direction: $$Props['direction'] = undefined
	export let alignment: $$Props['alignment'] = undefined

	let cssProps: DividerProps = {}
	let props: DividerProps = {}
	$: {
		cssProps = {
			alignment,
			color,
			direction,
		}
		props = {
			componentName,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
