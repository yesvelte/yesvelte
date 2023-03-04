<script lang="ts">
	import { Autocomplete } from '../autocomplete'
	import type { FormAutocompleteProps } from './Form.types'
	import FormField from './FormField.svelte'

	type $$Props = FormAutocompleteProps

	export let componentName: $$Props['componentName'] = 'form-autocomplete'
	export let innerProps: $$Props['innerProps'] = undefined
	export let required: $$Props['required'] = undefined
	export let state: $$Props['state'] = undefined

	export let value: $$Props['value'] = undefined
	export let items: $$Props['items'] = []
	export let multiple: $$Props['multiple'] = false

	let props: $$Props = {}
	let autocompleteProps: $$Props['innerProps'] = {}

	$: {
		props = {
			required,
			state,
		}

		autocompleteProps = {
			...innerProps,
			items,
			multiple,
			state,
		}
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Autocomplete {...autocompleteProps} bind:value let:item let:index>
		<slot {index} {item}>{item}</slot>
	</Autocomplete>
	<slot name="hint" />
</FormField>
