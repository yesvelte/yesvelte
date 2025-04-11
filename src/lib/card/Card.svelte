<script lang="ts">
	import { El } from '../el'
	import CardHeader from './CardHeader.svelte'
	import CardTitle from './CardTitle.svelte'
	import type { CardProps } from './Card.types'

	type $$Props = CardProps

	let {
		componentName = 'card',
		title,
		stacked,
		statusColor = 'primary',
		statusPosition = 'top',
		statusSize = 'md',
		status,
		bgColor,
		borderless,
		rotate,
		state,
		size,
		children,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
		cssProps: {
			stacked,
			bgColor,
			borderless,
			rotate,
			state,
			size,
		},
	})

	let statusProps = $derived({
		componentName: `${componentName}-status`,
		cssProps: {
			size: statusSize,
			position: statusPosition,
			color: statusColor,
		},
	})
</script>

<El {...props}>
	{#if status}
		<El {...statusProps} />
	{/if}
	{#if title}
		<CardHeader>
			<CardTitle>
				{title}
			</CardTitle>
		</CardHeader>
	{/if}
	{@render children?.()}
</El>
