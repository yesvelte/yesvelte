<script lang="ts">
	import { El } from '$lib'
	import { getContext, onMount } from 'svelte'
	import { onDestroy } from 'svelte'

	export let active: boolean | undefined = undefined

	let index = 0

	const context: any = getContext('CAROUSEL')
	const activeIndex = context.activeIndex

	onMount(() => {
		index = context.register({ active })
	})

	onDestroy(() => {
		context.unregister(index)
	})
</script>

<El componentName="test-carousel-item" cssProps={{ active: index === $activeIndex }}>
	{index}
	<slot />
</El>
