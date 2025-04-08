<script module>
	import { appendCustomStyle } from 'iconify-icon'

	appendCustomStyle(`svg [stroke-width="2"] { stroke-width: 1.5; }`)
</script>

<script lang="ts">
	import 'iconify-icon'
	import type { IconProps } from './Icon.types'
	import { onMount } from 'svelte'
	import { El } from '../el'

	type $$Props = IconProps

	let {
		componentName = 'icon',
		color,
		name,
		pack = 'tabler',
		size,
		...restProps
	}: $$Props = $props()

	let loaded = $state(false)

	onMount(() => {
		loaded = true
		if (name?.includes(':')) {
			pack = name.split(':')[0]
			name = name.split(':')[1]
		}
	})

	let cssProps: $$Props = $derived({
		color,
		size,
	})
</script>

<El {componentName} {...restProps} {cssProps}>
	{#if loaded}
		<iconify-icon icon="{pack}:{name}" width="100%" height="100%" />
	{/if}
</El>
