<script lang="ts">
	import { getContext } from 'svelte'
	import { El } from '../el'
	import { Button } from '../button'
	import type { OffcanvasHeaderProps, OffcanvasProps } from './Offcanvas.types'
	import { get_current_component } from 'svelte/internal'

	type $$Props = OffcanvasHeaderProps

	export let componentName: $$Props['componentName'] = 'offcanvas-header'
	export let title: $$Props['title'] = undefined

	const ctx = getContext<OffcanvasProps>('OFFCANVAS')

	const components = [get_current_component(), ...($$props.components ?? [])]

	const onClick = () => {
		if (ctx && ctx.close) ctx.close()
	}
</script>

<El {...$$restProps} {componentName} {components}>
	{#if title}
		<El componentName="{componentName}-title">{title}</El>
	{:else}
		<slot />
	{/if}
	<Button componentName="{componentName}-btn" aria-label="Close" on:click={onClick} />
</El>
