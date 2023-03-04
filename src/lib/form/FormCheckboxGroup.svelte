<script lang="ts">
	import FormField from './FormField.svelte'
	import CheckboxGroup from '../checkbox/CheckboxGroup.svelte'
	import type { FormCheckboxGroupProps } from './Form.types'

	type $$Props = FormCheckboxGroupProps

	export let componentName: $$Props['componentName'] = 'form-checkbox-group'
	export let innerProps: $$Props['innerProps'] = undefined
	export let inline: $$Props['inline'] = undefined
	export let items: $$Props['items'] = undefined

	export let value: $$Props['value'] = undefined
	
	let checkboxGroupProps: $$Props['innerProps'] = {}
	$: checkboxGroupProps = {
		...innerProps,
		inline,
		items,
	}
</script>

<FormField {...$$restProps} {componentName}>
	<slot name="label" />
	<CheckboxGroup {...checkboxGroupProps} bind:value let:item let:index>
		<slot {index} {item}>{item}</slot>
	</CheckboxGroup>
	<slot name="hint" />
</FormField>
