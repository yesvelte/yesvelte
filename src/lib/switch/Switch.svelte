<script lang="ts">
	import { El } from '../el'
	import { Label } from '../label'
	import type { SwitchProps } from './Switch.types'

	type $$Props = SwitchProps

	export let componentName: $$Props['componentName'] = 'switch'
	export let tag: $$Props['tag'] = 'input'
	export let id: $$Props['id'] = undefined
	export let color: $$Props['color'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let description: $$Props['description'] = undefined
	export let inline: $$Props['inline'] = undefined
	export let text: $$Props['text'] = undefined
	export let value: $$Props['value'] = false
	export let reverse: $$Props['reverse'] = false
	export let checked: $$Props['checked'] = false
	export let role: $$Props['role'] = 'switch'
	export let type: $$Props['type'] = 'checkbox'

	function onChange(event: any) {
		checked = event.target.checked
		value = event.target.checked
	}

	let props: $$Props = {}
	let cssProps: $$Props = {}
	let _for: string | undefined = undefined
	$: {
		_for = id
		cssProps = {
			color,
		}

		props = {
			tag,
			checked,
			componentName,
			text,
			role,
			disabled,
			type,
		}
	}
</script>

<El componentName="{componentName}-wrapper" cssProps={{ inline, reverse }}>
	<El bind:id {...$$restProps} {cssProps} {...props} on:change={onChange} on:change />
	{#if text || $$slots['default']}
		<Label for={_for} componentName="{componentName}-label">
			<slot>
				{text}
			</slot>
		</Label>
	{/if}
	{#if description || $$slots['description']}
		<El componentName="{componentName}-description">
			<slot name="description">
				{description}
			</slot>
		</El>
	{/if}
</El>
