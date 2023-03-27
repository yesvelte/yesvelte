<script lang="ts">
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
			placeholder,
			disabled,
			readonly,
			type,
			rows,
			name,
		}
	}
</script>

<El
	on:click
	on:change
	on:input
	on:focus
	on:blur
	componentName="{componentName}-wrapper"
	cssProps={{ size }}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<El tag="textarea" bind:value {...$$restProps} {...props} {cssProps} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
