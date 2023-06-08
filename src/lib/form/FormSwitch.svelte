<script lang="ts">
	import FormField from './FormField.svelte'
	import { Switch, type SwitchProps } from '../switch'
	import type { FormSwitchProps } from './Form.types'

	import { get_current_component } from 'svelte/internal'

	type $$Props = FormSwitchProps

	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let name: $$Props['name'] = undefined
	export let state: $$Props['state'] = undefined
	export let required: $$Props['required'] = undefined
	export let componentName: $$Props['componentName'] = 'form-switch'
	export let color: $$Props['color'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let description: $$Props['description'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined
	export let checked: $$Props['checked'] = undefined
	export let inline: $$Props['inline'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let id: string
	let props: $$Props = {}
	let switchProps: SwitchProps = {}

	$: {
		props = {
			required,
			label,
			hint,
			state,
			id,
			componentName,
		}

		switchProps = {
			color,
			inline,
			description,
			reverse,
			checked,
			disabled,
			name,
		}
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" slot="label" />
	<Switch
		bind:id
		{...switchProps}
		bind:checked
		bind:value
		{components}
		_slots={{ default: $$slots['default'], description: $$slots['description'] }}>
		<slot />
		<slot name="description" slot="description" />
	</Switch>
	<slot name="hint" slot="hint" />
</FormField>
