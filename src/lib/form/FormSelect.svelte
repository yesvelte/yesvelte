<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import FormField from './FormField.svelte'
	import type { FormSelectProps } from './Form.types'
	import { Select, type SelectProps } from '../select'

	type $$Props = FormSelectProps

	export let items: $$Props['items'] = undefined
	export let value: $$Props['value'] = undefined
	export let name: $$Props['name'] = undefined
	export let size: $$Props['size'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let required: $$Props['required'] = undefined
	export let multiple: $$Props['multiple'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let state: $$Props['state'] = undefined
	export let key: $$Props['key'] = undefined
	export let componentName: $$Props['componentName'] = 'form-select'

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let selectProps: SelectProps = {}
	let props: $$Props = {}
	let id: string

	$: {
		selectProps = {
			placeholder,
			disabled,
			multiple,
			size,
			items,
			state,
			key,
			name,
		}

		props = {
			componentName,
			required,
			label,
			hint,
			state,
			id,
		}
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Select {components} {...selectProps} bind:value bind:id let:item let:index>
		<slot {index} {item}>{item}</slot>
	</Select>
	<slot name="hint" />
</FormField>
