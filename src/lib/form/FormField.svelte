<script lang="ts">
	import { El } from '../el'
	import { Label } from '../label'
	import type { FormFieldProps } from './Form.types'

	type $$Props = FormFieldProps

	export let componentName: $$Props['componentName'] = 'form-field'
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let required: $$Props['required'] = undefined
	export let state: $$Props['state'] = undefined
</script>

<El {...$$restProps} {componentName}>
	<slot name="label">
		{#if label}
			<Label {required}>{label}</Label>
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
