	<!-- @css:textarea -->

<script lang="ts">
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
	export let id: $$Props['id'] = undefined

	let props: $$Props = {}
	let cssProps: $$Props = {}
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

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

<El {components} componentName="{componentName}-wrapper" cssProps={{ size }}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<El bind:id tag="textarea" bind:value {...$$restProps} {...props} {cssProps} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
