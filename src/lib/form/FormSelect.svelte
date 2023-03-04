<script lang="ts">
	import FormField from './FormField.svelte'
	import type { FormSelectProps } from './Form.types'
	import { Select, type SelectProps } from '../select'

	type $$Props = FormSelectProps

	export let items: $$Props['items'] = undefined
	export let value: $$Props['value'] = undefined
	// export let label: $$Props['label'] = undefined
	// export let hint: $$Props['hint'] = undefined
	export let required: $$Props['required'] = undefined
	export let state: $$Props['state'] = undefined
	export let componentName: $$Props['componentName'] = 'form-select'
	export let innerProps: $$Props['innerProps'] = undefined

	let selectProps: $$Props['innerProps'] = {}
	let props: $$Props = {}

	$: {
		selectProps = {
			...innerProps,
			required,
			items,
			state,
		}

		props = {
			componentName,
			required,
			state,
		}
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Select {...selectProps} bind:value let:item let:index>
		<slot {index} {item}>{item}</slot>
	</Select>
	<slot name="hint" />
</FormField>
