<script lang="ts">
	import { FormField, type FormRadioGroupProps, RadioGroup, type RadioGroupProps } from '$lib/components'

	type $$Props = FormRadioGroupProps

	export let color: $$Props['color'] = undefined
	export let inline: $$Props['inline'] = undefined
	export let items: $$Props['items'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined
	export let cssPrefix: $$Props['cssPrefix'] = 'form-radio-group'

	let radioGroupProps: RadioGroupProps = {}
	$: {
		radioGroupProps = {
			color,
			inline,
			reverse,
			items,
			cssPrefix,
		}
	}
</script>

<FormField {...$$restProps} {cssPrefix}>
	<slot name="label" />
	<RadioGroup {...radioGroupProps} bind:value let:item let:index>
		<slot {index} {item}>{item}</slot>
	</RadioGroup>
	<slot name="hint" />
</FormField>
