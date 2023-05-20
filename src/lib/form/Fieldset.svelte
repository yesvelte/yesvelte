<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { FieldsetProps } from './Form.types'

	type $$Props = FieldsetProps

	export let componentName: $$Props['componentName'] = 'fieldset'
	export let legend: $$Props['legend'] = undefined

	const components = [get_current_component(), ...($$props.components ?? [])]
	let cssProps: $$Props = {}
	let props: $$Props = {}
	$: {
		cssProps = {}
		props = {
			componentName,
			tag: 'fieldset',
		}
	}
</script>

<El {components} {...$$restProps} {cssProps} {...props}>
	{#if $$slots['legend'] || legend}
		<El tag="legend" componentName="{componentName}-legend">
			<slot name="legend">
				{#if legend}
					{legend}
				{/if}
			</slot>
		</El>
	{/if}
	<slot />
</El>
