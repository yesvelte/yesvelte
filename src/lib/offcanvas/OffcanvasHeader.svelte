<script lang="ts">
	import { getContext } from 'svelte'
	import { El } from '../el'
	import { Button } from '../button'
	import type { OffcanvasHeaderProps, OffcanvasProps } from './Offcanvas.types'

	type $$Props = OffcanvasHeaderProps

	export let componentName: $$Props['componentName'] = 'offcanvas-header'
	export let title: $$Props['title'] = undefined

	const ctx = getContext<OffcanvasProps>('OFFCANVAS')

	const onClick = () => {
		if (ctx && ctx.close) ctx.close()
	}
</script>

<El {componentName}>
	{#if title}
		<El componentName="{componentName}-title">{title}</El>
	{:else}
		<slot />
	{/if}
	<Button componentName="{componentName}-btn" aria-label="Close" on:click={onClick} />
</El>
