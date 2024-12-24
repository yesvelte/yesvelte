<script lang="ts">
	import { getContext } from 'svelte'
	import { El } from '../el'
	import { Button } from '../button'
	import type { OffcanvasHeaderProps, OffcanvasProps } from './Offcanvas.types'

	type $$Props = OffcanvasHeaderProps

	let {componentName = 'offcanvas-header', 
		title,children, ...restProps} : $$Props = $props()

	const ctx = getContext<OffcanvasProps>('OFFCANVAS')

	const onclick = () => {
		if (ctx && ctx.close) ctx.close()
	}
</script>

<El {...restProps} {componentName}>
	{#if title}
		<El componentName="{componentName}-title">{title}</El>
	{:else}
		{@render children?.()}
	{/if}
	<Button componentName="{componentName}-btn" aria-label="Close" {onclick} />
</El>
