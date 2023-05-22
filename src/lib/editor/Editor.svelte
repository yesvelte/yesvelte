<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'
	import type { Quill, QuillOptionsStatic } from 'quill'
	import { El } from '../el'
	import type { EditorProps } from './Editor.types'
	import { Textarea } from '../textarea'
	import { get_current_component } from 'svelte/internal'

	type $$Props = EditorProps

	export let componentName: $$Props['componentName'] = 'editor'
	export let value: $$Props['value'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let readonly: $$Props['readonly'] = undefined
	export let height: $$Props['height'] = 'md'
	export let name: $$Props['name'] = undefined
	export let state: $$Props['state'] = undefined
	export let toolbar: $$Props['toolbar'] = [
		{ header: [1, 2, 3, 4, 5, 6, false] },
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'code-block',
	]

	const components = [get_current_component(), ...($$props.components ?? [])]
	const dispatch = createEventDispatcher()

	let element: HTMLDivElement
	let instance: Quill
	let loaded = false

	$: {
		if (instance && value !== instance.root.innerHTML) {
			instance.root.innerHTML = value ?? ''
		}
	}

	let options: QuillOptionsStatic = {}
	$: options = {
		theme: 'snow',
		placeholder,
		readOnly: readonly,
		modules: {
			toolbar,
		},
	}

	function onChange(event: any) {
		value = instance.root.innerHTML
		dispatch('changed', value)
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

	$: cssProps = {
		height,
		loaded,
		state,
	}
</script>

<!-- {components} -->
<El {cssProps} componentName="{componentName}-wrapper">
	<El {componentName} bind:element />
</El>

<!-- This can be used inside forms which has value of the editor -->
<Textarea bind:value d="none" {name} />
