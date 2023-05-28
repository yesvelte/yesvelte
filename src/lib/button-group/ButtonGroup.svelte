<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { ButtonGroupProps } from './ButtonGroup.types'

	type $$Props = ButtonGroupProps

	export let componentName: $$Props['componentName'] = 'button-group'
	export let size: $$Props['size'] = undefined
	export let vertical: $$Props['vertical'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let cssProps: $$Props = {}
	let props: $$Props = {}
	$: {
		cssProps = {
			size,
			vertical,
		}
		props = {
			componentName,
		}
	}
</script>

<El {components} role="group" {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
