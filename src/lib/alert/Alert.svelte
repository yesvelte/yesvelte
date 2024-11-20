<script lang="ts">
	import { El } from '../el'
	import { Icon } from '../icon'
	import type { AlertProps } from './Alert.types'

	type $$Props = AlertProps

	let {
		color = 'primary',
		componentName = 'alert',
		dismissible,
		icon,
		important,
		open = $bindable(),
		title,
		children,
		startSnippet,
		...restProps
	}: $$Props = $props()

	let cssProps: AlertProps = $derived({ color, icon, important, dismissible })
	let props: AlertProps = $derived({
		...restProps,
		componentName,
		cssProps,
		show: open,
		role: 'alert',
	})
</script>

<El {...props}>
	{#if icon || startSnippet}
		<El componentName="{componentName}-start">
			{#if startSnippet}
				{@render startSnippet()}
			{:else}
				<Icon size="xl" name={icon} />
			{/if}
		</El>
	{/if}
	<El componentName="{componentName}-body">
		{#if title}
			<El componentName="{componentName}-title">
				{#if typeof title === 'string'}
					{title}
				{:else}
					{@render title()}
				{/if}
			</El>
		{/if}
		<div>
			{#if children}
				{@render children()}
			{/if}
		</div>
	</El>
	{#if dismissible}
		<El componentName="{componentName}-close" onclick={() => (open = false)} />
	{/if}
</El>
