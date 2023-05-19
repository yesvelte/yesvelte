<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { CardMediaProps } from './Card.types'

	type $$Props = CardMediaProps

	export let componentName: $$Props['componentName'] = 'card-media'
	export let elementPosition: $$Props['elementPosition'] = 'top'
	
	const components = [get_current_component(), ...($$props.components ?? [])]

	let cssProps: CardMediaProps = {}
	$: cssProps = { elementPosition }
</script>

<El {components} {...$$restProps} {cssProps} {componentName}>
	<slot />
</El>
