<script context="module">
	import { appendCustomStyle } from 'iconify-icon'

	appendCustomStyle(`svg [stroke-width="2"] { stroke-width: 1.5; }`)
</script>

<script lang="ts">
	import 'iconify-icon'
	import type { IconProps } from './Icon.types'
	import { onMount } from 'svelte'
	import { El } from '../el'
	import { get_current_component } from 'svelte/internal'

	type $$Props = IconProps

	export let componentName: $$Props['componentName'] = 'icon'
	export let color: $$Props['color'] = undefined
	export let name: $$Props['name'] = undefined
	export let pack: $$Props['pack'] = 'tabler'
	export let size: $$Props['size'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let loaded = false

	onMount(() => {
		loaded = true
	})

	$: cssProps = {
		color,
		size,
	}
</script>

<El {componentName} {components} {...$$restProps} {cssProps}>
	{#if loaded}
		<iconify-icon icon="{pack}:{name}" width="100%" height="100%" />
	{/if}
</El>
