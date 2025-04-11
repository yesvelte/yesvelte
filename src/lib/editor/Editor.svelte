<script lang="ts">
	import { onMount } from 'svelte'
	import type { Quill, QuillOptionsStatic } from 'quill'
	import { El } from '../el'
	import type { EditorProps } from './Editor.types'
	import { Textarea } from '../textarea'

	type $$Props = EditorProps

	let {
		componentName = 'editor',
		value = $bindable(),
		id = $bindable(),
		placeholder,
		readonly,
		height = 'md',
		name,
		state: validationState,
		toolbar = [
			{ header: [1, 2, 3, 4, 5, 6, false] },
			'bold',
			'italic',
			'underline',
			'strike',
			'blockquote',
			'code-block',
		],
		...restProps
	}: $$Props = $props()

	let element: HTMLDivElement | undefined = $state()
	let instance: Quill | undefined = $state()
	let loaded = $state(false)

	$effect(() => {
		if (instance && value !== instance.root.innerHTML) {
			instance.root.innerHTML = value ?? ''
		}
	})

	let options = $derived({
		theme: 'snow',
		placeholder,
		readOnly: readonly,
		modules: {
			toolbar,
		},
	})

	function onChange(event: any) {
		value = instance.root.innerHTML
		console.log(restProps.onchanged)
		restProps.onchanged?.(value)
	}

	onMount(() => {
		import('quill').then((Quill) => {
			if (element && options) {
				instance = new Quill.default(element, options)
				instance.on('text-change', onChange)

				loaded = true
			}
		})

		return () => {
			if (instance) {
				instance.off('text-change', onChange)
				loaded = false
			}
		}
	})

	let cssProps = $derived({
		height,
		loaded,
		state: validationState,
	})
</script>

<El {cssProps} componentName="{componentName}-wrapper">
	<El bind:id {componentName} bind:element />
</El>

<!-- This can be used inside forms which has value of the editor -->
<Textarea bind:value d="none" {name} />
