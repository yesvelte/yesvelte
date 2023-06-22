<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import FormField from './FormField.svelte'
	import type { FormRadioGroupProps } from './Form.types'
	import RadioGroup from '../radio/RadioGroup.svelte'

	type $$Props = FormRadioGroupProps

	export let color: $$Props['color'] = undefined
	export let inline: $$Props['inline'] = undefined
	export let items: $$Props['items'] = undefined
	export let key: $$Props['key'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined
	export let name: $$Props['name'] = undefined
	export let componentName: $$Props['componentName'] = 'form-radio-group'

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let radioGroupProps: $$Props = {}
	$: {
		radioGroupProps = {
			color,
			inline,
			reverse,
			items,
			name,
			key,
		}
	}
</script>

<FormField {...$$restProps} {componentName}>
	<slot name="label" slot="label" />
	<RadioGroup {components} {...radioGroupProps} bind:value let:item let:index>
		<slot {index} {item}>{item}</slot>
	</RadioGroup>
	<slot name="hint" slot="hint" />
</FormField>
