<script lang="ts">
	import FormField from './FormField.svelte'
	import { Switch, type SwitchProps } from '../switch'
	import type { FormFieldProps, FormSwitchProps } from './Form.types'

	type $$Props = FormSwitchProps

	export let componentName: $$Props['componentName'] = 'form-switch'
	export let required: $$Props['required'] = undefined
	export let innerProps: $$Props['innerProps'] = undefined

	export let checked: $$Props['checked'] = undefined
	export let value: $$Props['value'] = undefined

	let props: $$Props = {}
	let switchProps: $$Props['innerProps'] = {}

	$: {
		props = {
			required,
			componentName,
		}

		switchProps = {
			...innerProps,
			required,
		}
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Switch {...switchProps} bind:checked bind:value on:change>
		<slot />
	</Switch>
	<slot name="hint" />
</FormField>
