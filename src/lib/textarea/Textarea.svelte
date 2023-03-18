<script lang="ts">
	import { forwardEventsBuilder } from '$lib/internal'
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { TextareaProps } from './Textarea.types'

	type $$Props = TextareaProps

	export let componentName: $$Props['componentName'] = 'textarea'
	export let disabled: $$Props['disabled'] = undefined
	export let borderRounded: $$Props['borderRounded'] = undefined
	export let borderFlush: $$Props['borderFlush'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let readonly: $$Props['readonly'] = undefined
	export let rows: $$Props['rows'] = undefined
	export let name: $$Props['name'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let type: $$Props['type'] = undefined
	export let value: $$Props['value'] = undefined
	export let forwardEvents: $$Props['forwardEvents'] = forwardEventsBuilder(get_current_component())

	let props: $$Props = {}
	let cssProps: $$Props = {}

	$: {
		cssProps = {
			size,
			state,
			borderRounded,
			borderFlush,
		}

		props = {
			componentName,
			forwardEvents,
			placeholder,
			disabled,
			readonly,
			type,
			rows,
			name,
		}
	}
</script>

<El componentName="{componentName}-wrapper" cssProps={{ size }}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<El tag="textarea" bind:value {...$$restProps} {...props} {cssProps} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
