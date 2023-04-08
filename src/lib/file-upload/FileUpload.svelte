<script lang="ts">
	import { El } from '../el'
	import type { FileUploadProps, FileUploadWrapperProps } from './FileUpload.types'

	type $$Props = FileUploadProps

	export let componentName: $$Props['componentName'] = 'input'
	export let disabled: $$Props['disabled'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let accept: $$Props['accept'] = undefined
	export let name: $$Props['name'] = undefined
	export let multiple: $$Props['multiple'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let files: $$Props['files'] = undefined

	let element: HTMLInputElement

	let props: $$Props = { componentName, placeholder, disabled }
	let cssProps: $$Props = { state }
	let wrapperCssProps: FileUploadWrapperProps = { size }

	const onChange = (e: any) => {
		files = e.target.files
	}

	$: {
		cssProps = {
			size,
			state,
		}

		props = {
			componentName,
			placeholder,
			disabled,
			accept,
			name,
			multiple,
			tag: 'input',
			type: 'file',
		}
	}
</script>

<El
	componentName="{componentName}-wrapper"
	on:click
	on:change
	on:input
	on:focus
	on:blur
	cssProps={wrapperCssProps}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<slot />
	<El bind:element {...$$restProps} {...props} {cssProps} on:change={onChange} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
