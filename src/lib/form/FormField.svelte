<!-- @css:form-field -->
<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import { Label } from '../label'
	import type { FormFieldProps } from './Form.types'
	import type { LabelProps } from '../label/Label.types'

	type $$Props = FormFieldProps

	export let componentName: $$Props['componentName'] = 'form-field'
	export let label: $$Props['label'] = undefined
	export let id: $$Props['id'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let required: $$Props['required'] = undefined
	export let state: $$Props['state'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
</script>

<El {components} {...$$restProps} {componentName}>
	<slot name="label">
		{#if label}
			<Label for={id} {required}>{label}</Label>
		{/if}
	</slot>
	<slot />
	<slot name="hint">
		{#if hint}
			<El componentName={componentName + '-hint'} cssProps={{ state }}>
				{hint}
			</El>
		{/if}
	</slot>
</El>
