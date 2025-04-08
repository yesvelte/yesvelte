<script lang="ts">
	import { El } from '../el'
	import type { FileUploadProps, FileUploadWrapperProps } from './FileUpload.types'

	type $$Props = FileUploadProps

	let {
		componentName = 'input',
		disabled,
		placeholder,
		accept,
		name,
		multiple,
		required,
		size,
		state: validationState,
		files = $bindable(),
		id = $bindable(),
		startSnippet,
		endSnippet,
		...restProps
	}: $$Props = $props()

	let element: HTMLInputElement | undefined = $state(undefined)

	function onchange(e: any) {
		restProps.onchange?.()
		files = e.target.files
	}

	let props: $$Props = $derived({
		componentName,
		placeholder,
		disabled,
		accept,
		name,
		multiple,
		required,
		tag: 'input',
		type: 'file',
		onchange,
		cssProps: {
			state: validationState,
			size,
		},
	})

	let wrapperCssProps: FileUploadWrapperProps = $derived({ size })
</script>

{#if startSnippet || endSnippet}
	<El componentName="{componentName}-wrapper" {...restProps} cssProps={wrapperCssProps}>
		{#if startSnippet}
			<El tag="span" componentName="{componentName}-icon">
				{@render startSnippet()}
			</El>
		{/if}
		<El bind:id bind:element {...props} />
		{#if endSnippet}
			<El tag="span" componentName="{componentName}-icon">
				{@render endSnippet()}
			</El>
		{/if}
	</El>
{:else}
	<El {...restProps} bind:id bind:element {...props} />
{/if}
