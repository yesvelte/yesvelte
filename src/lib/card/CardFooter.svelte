<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { CardFooterProps } from './Card.types'

	type $$Props = CardFooterProps

	export let componentName: $$Props['componentName'] = 'card-footer'
	export let transparent: $$Props['transparent'] = undefined

	const components = [get_current_component(), ...($$props.components ?? [])]
	let cssProps: CardFooterProps = {}

	$: cssProps = { transparent }
</script>

<El {components} {...$$restProps} {cssProps} {componentName}>
	<slot />
</El>
