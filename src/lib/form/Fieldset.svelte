<script lang="ts">
	import { El } from '../el'
	import type { FieldsetProps } from './Form.types'

	type $$Props = FieldsetProps

	export let componentName: $$Props['componentName'] = 'fieldset'
	export let legend: $$Props['legend'] = undefined

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

<El {...$$restProps} {cssProps} {...props}>
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
