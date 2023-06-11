<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import DatePicker from '../date-picker/DatePicker.svelte'
	import FormField from './FormField.svelte'
	import type { FormDatePickerProps } from './Form.types'
	import { El } from '../el'

	type $$Props = FormDatePickerProps

	export let componentName: $$Props['componentName'] = 'form-date-picker'
	export let disabled: $$Props['disabled'] = undefined
	export let borderRounded: $$Props['borderRounded'] = undefined
	export let borderFlush: $$Props['borderFlush'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let range: $$Props['range'] = undefined
	export let required: $$Props['required'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let value: $$Props['value'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let name: $$Props['name'] = undefined

	const components = [
		{ component: get_current_component(), except: ['changed'] },
		...($$props.components ?? []),
	]

	let id: string
	let props: $$Props = {}
	let datePickerProps: $$Props = {}

	$: {
		props = {
			componentName,
			required,
			label,
			hint,
			state,
			id,
		}

		datePickerProps = {
			placeholder,
			disabled,
			required,
			size,
			state,
			range,
			borderRounded,
			borderFlush,
			name,
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
		<DatePicker bind:id {components} {...datePickerProps} bind:value on:changed />
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
