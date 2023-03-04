<script lang="ts">
	import { Checkbox } from '../checkbox'
	import type { FormCheckboxProps } from './Form.types'
	import FormField from './FormField.svelte'

	type $$Props = FormCheckboxProps

	export let componentName: $$Props['componentName'] = 'form-checkbox'
	export let innerProps: $$Props['innerProps'] = undefined
	export let required: $$Props['required'] = undefined

	export let value: $$Props['value'] = undefined
	export let checked: $$Props['checked'] = undefined

	export let inline: $$Props['inline'] = undefined

	$: props = {
		required,
		componentName,
	}

	$: checkboxProps = {
		...innerProps,
		inline,
		required,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Checkbox {...checkboxProps} bind:checked bind:value on:change>
		<slot />
	</Checkbox>
	<slot name="hint" />
</FormField>
