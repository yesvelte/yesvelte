<script lang="ts">
	import { El } from '../el'
	import { Icon } from '../icon'
	import type { AlertProps } from './Alert.types'

	type $$Props = AlertProps

	export let color: $$Props['color'] = 'primary'
	export let componentName: $$Props['componentName'] = 'alert'
	export let dismissible: $$Props['dismissible'] = undefined
	export let icon: $$Props['icon'] = undefined
	export let important: $$Props['important'] = undefined
	export let open: $$Props['open'] = true
	export let title: $$Props['title'] = undefined

	let cssProps: AlertProps = {}
	let props: AlertProps = {}
	$: {
		cssProps = { color, icon, important, dismissible }
		props = {
			componentName,
		}
	}
</script>

{#if open}
	<El {...$$restProps} {cssProps} {...props} role="alert">
		{#if icon || $$slots.start}
			<El componentName="{componentName}-start">
				<slot name="start">
					<Icon size="xl" name={icon} />
				</slot>
			</El>
		{/if}
		<El componentName="{componentName}-body">
			{#if title || $$slots['title']}
				<El componentName="{componentName}-title">
					<slot name="title">{title}</slot>
				</El>
			{/if}
			<div>
				<slot />
			</div>
		</El>
		{#if dismissible}
			<El componentName="{componentName}-close" on:click={() => (open = false)} />
		{/if}
	</El>
{/if}
