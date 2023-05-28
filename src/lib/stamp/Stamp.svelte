<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { StampProps } from './Stamp.types'
	import { Icon } from '../icon'

	type $$Props = StampProps

	export let componentName: $$Props['componentName'] = 'stamp'
	export let bgColor: $$Props['bgColor'] = undefined
	export let textColor: $$Props['textColor'] = undefined
	export let iconPosition: $$Props['iconPosition'] = undefined
	export let size: $$Props['size'] = 'md'
	export let icon: $$Props['icon'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let cssProps: StampProps = {}
	let otherProps: StampProps = {}
	$: {
		cssProps = {
			size,
			iconPosition,
			bgColor,
			textColor,
		}
		otherProps = {
			componentName,
			icon,
		}
	}
</script>

<El {components} {...$$restProps} {cssProps} {...otherProps}>
	<Icon name={icon} />
</El>
