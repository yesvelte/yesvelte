<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { FileUploadProps, FileUploadWrapperProps } from './FileUpload.types'

	type $$Props = FileUploadProps

	export let componentName: $$Props['componentName'] = 'input'
	export let disabled: $$Props['disabled'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let accept: $$Props['accept'] = undefined
	export let name: $$Props['name'] = undefined
	export let multiple: $$Props['multiple'] = undefined
	export let required: $$Props['required'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let files: $$Props['files'] = undefined
	export let id: $$Props['id'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
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
			required,
			tag: 'input',
			type: 'file',
		}
	}
</script>

{#if $$slots.start || $$slots.end}
	<El componentName="{componentName}-wrapper" {...$$restProps} cssProps={wrapperCssProps}>
		{#if $$slots.start}
			<El tag="span" componentName="{componentName}-icon">
				<slot name="start" />
			</El>
		{/if}
		<El {components} bind:id bind:element {...props} {cssProps} on:change={onChange} />
		{#if $$slots.end}
			<El tag="span" componentName="{componentName}-icon">
				<slot name="end" />
			</El>
		{/if}
	</El>
{:else}
	<El {...$$restProps} {components} bind:id bind:element {...props} {cssProps} on:change={onChange} />
{/if}
