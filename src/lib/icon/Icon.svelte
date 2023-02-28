<script context="module">
	import { appendCustomStyle } from 'iconify-icon'

	appendCustomStyle(`svg [stroke-width="2"] { stroke-width: 1.5; }`)
</script>

<script lang="ts">
	import 'iconify-icon'
	import { classname } from '../internal'
	import type { IconProps } from './Icon.types'
	import { onMount } from 'svelte'

	type $$Props = IconProps

	export let componentName: $$Props['componentName'] = 'icon'
	export let color: $$Props['color'] = undefined
	export let filled: $$Props['filled'] = false
	export let name: $$Props['name'] = undefined
	export let pack: $$Props['pack'] = 'tabler'
	export let size: $$Props['size'] = undefined

	$: classes = classname(
		componentName,
		{
			color,
			filled,
			size,
		},
		$$props.class
	)

	let loaded = false

	onMount(() => {
		loaded = true
	})
</script>

{#if loaded}
	<iconify-icon icon="{pack}:{name}" {...$$restProps} class={classes} width="100%" height="100%" />
{/if}
