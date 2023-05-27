<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'

	import type { CardHeaderProps } from './Card.types'

	type $$Props = CardHeaderProps

	export let componentName: $$Props['componentName'] = 'card-header'
	export let light: $$Props['light'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let cssProps: CardHeaderProps = {}
	$: cssProps = { light }
</script>

<El {components} {...$$restProps} {cssProps} {componentName}>
	<slot />
</El>
