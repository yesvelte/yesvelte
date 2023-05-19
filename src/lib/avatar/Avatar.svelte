<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'

	import type { AvatarProps } from './Avatar.types'

	type $$Props = AvatarProps

	export let componentName: $$Props['componentName'] = 'avatar'
	export let color: $$Props['color'] = undefined
	export let shape: $$Props['shape'] = undefined
	export let size: $$Props['size'] = undefined

	const components = [get_current_component(), ...($$props.components ?? [])]

	let cssProps: $$Props = {}
	let props: $$Props = {}
	$: {
		cssProps = {
			color,
			size,
			shape,
		}
		props = {
			componentName,
		}
	}
</script>

<El {components} tag="span" {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
