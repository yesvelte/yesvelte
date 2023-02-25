<script lang="ts">
	import { CheckboxGroup, type FormCheckboxGroupProps, FormField } from '$lib/components'

	type $$Props = FormCheckboxGroupProps

	export let color: $$Props['color'] = undefined
	export let cssPrefix: $$Props['cssPrefix'] = 'form-checkbox-group'
	export let inline: $$Props['inline'] = undefined
	export let items: $$Props['items'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined

	$: checkboxGroupProps = {
		color,
		inline,
		items,
		reverse,
	}
</script>

<FormField {...$$restProps} {cssPrefix}>
	<slot name="label" />
	<CheckboxGroup {...checkboxGroupProps} bind:value let:item let:index>
		<slot {index} {item}>{item}</slot>
	</CheckboxGroup>
	<slot name="hint" />
</FormField>
