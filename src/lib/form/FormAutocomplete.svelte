<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { Autocomplete } from '../autocomplete'
	import type { FormAutocompleteProps } from './Form.types'
	import FormField from './FormField.svelte'
	import { El } from '../el'

	type $$Props = FormAutocompleteProps

	export let componentName: $$Props['componentName'] = 'form-autocomplete'
	export let disabled: $$Props['disabled'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let items: $$Props['items'] = []
	export let key: $$Props['key'] = undefined
	export let label: $$Props['label'] = undefined
	export let name: $$Props['name'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let required: $$Props['required'] = undefined
	export let multiple: $$Props['multiple'] = undefined
	export let dismissible: $$Props['dismissible'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let value: $$Props['value'] = undefined
	export let create: $$Props['create'] = undefined

	const components = [
		{ component: get_current_component(), except: ['input', 'changed', 'created'] },
		...($$props.components ?? []),
	]

	let id: string
	let props: $$Props = {}
	let autocompleteProps: $$Props = {}

	$: {
		props = {
			required,
			label,
			hint,
			state,
			id,
		}

		autocompleteProps = {
			disabled,
			items,
			key,
			placeholder,
			multiple,
			dismissible,
			name,
			size,
			state,
			create,
		}
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" slot="label" />
	<svelte:fragment slot="group">
		<slot name="start">
			{#if $$slots['start-icon']}
				<El componentName="{componentName}-icon">
					<slot name="start-icon" />
				</El>
			{/if}
		</slot>
		<Autocomplete
			{...autocompleteProps}
			on:changed
			on:created
			on:input
			{components}
			_slots={{ default: $$slots['default'], selected: $$slots['selected'] }}
			bind:value
			bind:id
			let:item
			let:index>
			<slot {index} {item}>{item}</slot>
			<slot name="selected" slot="selected" {index} {item}>{item}</slot>
		</Autocomplete>

		<slot name="end">
			{#if $$slots['end-icon']}
				<El componentName="{componentName}-icon">
					<slot name="end-icon" />
				</El>
			{/if}
		</slot>
	</svelte:fragment>
	<slot name="hint" slot="hint" />
</FormField>
