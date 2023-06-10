	<!-- @css:divider -->
	<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { DividerProps } from './Divider.types'

	type $$Props = DividerProps


	export let componentName: $$Props['componentName'] = 'divider'
	export let color: $$Props['color'] = undefined
	export let direction: $$Props['direction'] = undefined
	export let alignment: $$Props['alignment'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

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

<El {components} {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
