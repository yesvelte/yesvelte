<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import FormField from './FormField.svelte'
	import CheckboxGroup from '../checkbox/CheckboxGroup.svelte'
	import type { FormCheckboxGroupProps } from './Form.types'

	type $$Props = FormCheckboxGroupProps

	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'form-checkbox-group'
	export let inline: $$Props['inline'] = undefined
	export let items: $$Props['items'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined
	export let name: $$Props['name'] = undefined
	export let key: $$Props['key'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
	let checkboxGroupProps: $$Props = {}
	$: checkboxGroupProps = {
		color,
		inline,
		items,
		reverse,
		name,
		key,
	}
</script>

<FormField {...$$restProps} {componentName}>
	<slot name="label" />
	<CheckboxGroup {components} {...checkboxGroupProps} bind:value let:item let:index>
		<slot {index} {item}>{item}</slot>
	</CheckboxGroup>
	<slot name="hint" />
</FormField>
