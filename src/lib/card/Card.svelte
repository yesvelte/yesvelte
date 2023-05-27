<script lang="ts">
	import { El } from '../el'
	import CardHeader from './CardHeader.svelte'
	import CardTitle from './CardTitle.svelte'
	import type { CardProps } from './Card.types'

	import { get_current_component } from 'svelte/internal'

	type $$Props = CardProps

	export let componentName: $$Props['componentName'] = 'card'
	export let title: $$Props['title'] = undefined
	export let stacked: $$Props['stacked'] = undefined
	export let statusColor: $$Props['statusColor'] = 'primary'
	export let statusPosition: $$Props['statusPosition'] = 'top'
	export let statusSize: $$Props['statusSize'] = 'md'
	export let status: $$Props['status'] = undefined
	export let bgColor: $$Props['bgColor'] = undefined
	export let borderless: $$Props['borderless'] = undefined
	export let rotate: $$Props['rotate'] = undefined
	export let state: $$Props['state'] = undefined
	export let size: $$Props['size'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
	let cssProps: CardProps = {}
	let props: CardProps = {}
	let statusCssProps: any = {}
	$: {
		cssProps = {
			stacked,
			bgColor,
			borderless,
			rotate,
			state,
			size,
		}
		props = {
			componentName,
		}
		statusCssProps = {
			size: statusSize,
			position: statusPosition,
			color: statusColor,
		}
	}
</script>

<El {components} {...$$restProps} {cssProps} {...props}>
	{#if status}
		<El componentName={componentName + '-status'} cssProps={statusCssProps} />
	{/if}
	{#if title}
		<CardHeader><CardTitle>{title}</CardTitle></CardHeader>
	{/if}
	<slot />
</El>
