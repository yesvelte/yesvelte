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

{#if $$slots.start || $$slots.end}
	<El {components} componentName="{componentName}-wrapper" cssProps={{ size }}>
		{#if $$slots.start}
			<El tag="span" componentName="{componentName}-icon">
				<slot name="start" />
			</El>
		{/if}
		<El bind:id tag="textarea" bind:value {...$$restProps} {...props} {cssProps} />
		{#if $$slots.end}
			<El tag="span" componentName="{componentName}-icon">
				<slot name="end" />
			</El>
		{/if}
	</El>
{:else}
	<El bind:id tag="textarea" bind:value {...$$restProps} {...props} {cssProps} />
{/if}
