<script lang="ts">
	import { forwardEventsBuilder } from '$lib/internal'
	import { get_current_component } from 'svelte/internal'
	import { Autocomplete } from '../autocomplete'
	import type { FormAutocompleteProps } from './Form.types'
	import FormField from './FormField.svelte'

	type $$Props = FormAutocompleteProps

	export let disabled: $$Props['disabled'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let items: $$Props['items'] = []
	export let key: $$Props['key'] = undefined
	export let label: $$Props['label'] = undefined
	export let name: $$Props['name'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let required: $$Props['required'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let value: $$Props['value'] = undefined

	const forwardEvents: $$Props['forwardEvents'] = forwardEventsBuilder(get_current_component())

	let props: $$Props = {}
	let autocompleteProps: $$Props = {}

	$: {
		props = {
			required,
			label,
			hint,
			state,
		}

		autocompleteProps = {
			disabled,
			items,
			key,
			placeholder,
			forwardEvents,
			name,
			size,
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
