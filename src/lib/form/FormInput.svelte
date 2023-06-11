<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { Input } from '../input'
	import type { FormInputProps } from './Form.types'
	import FormField from './FormField.svelte'
	import { El } from '../el'

	type $$Props = FormInputProps

	export let componentName: $$Props['componentName'] = 'form-input'
	export let disabled: $$Props['disabled'] = undefined
	export let borderRounded: $$Props['borderRounded'] = undefined
	export let borderFlush: $$Props['borderFlush'] = undefined
	export let mask: $$Props['mask'] = undefined
	export let maskOptions: $$Props['maskOptions'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let readonly: $$Props['readonly'] = undefined
	export let required: $$Props['required'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let type: $$Props['type'] = undefined
	export let value: $$Props['value'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let name: $$Props['name'] = undefined
	export let min: $$Props['min'] = undefined
	export let max: $$Props['max'] = undefined
	export let minlength: $$Props['minlength'] = undefined
	export let maxlength: $$Props['maxlength'] = undefined
	export let pattern: $$Props['pattern'] = undefined
	export let step: $$Props['step'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let id: string
	let props: $$Props = {}
	let inputProps: $$Props = {}

	$: props = {
		required,
		label,
		hint,
		state,
		componentName,
		id,
	}

	$: inputProps = {
		placeholder,
		disabled,
		readonly,
		type,
		required,
		size,
		state,
		borderRounded,
		borderFlush,
		mask,
		maskOptions,
		name,
		min,
		max,
		minlength,
		maxlength,
		pattern,
		step,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot slot="label" name="label" />
	<svelte:fragment slot="group">
		<slot name="start">
			{#if $$slots['start-icon']}
				<El componentName="{componentName}-icon">
					<slot name="start-icon" />
				</El>
			{/if}
		</slot>
		<Input bind:id {components} {...inputProps} bind:value />
	
		<slot name="end">
			{#if $$slots['end-icon']}
				<El componentName="{componentName}-icon">
					<slot name="end-icon" />
				</El>
			{/if}
		</slot>
	</svelte:fragment>
	<slot slot="hint" name="hint" />
</FormField>
