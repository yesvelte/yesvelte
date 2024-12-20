<script lang="ts">
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { El } from '../el'
	import type { DropdownContext, DropdownProps } from './Dropdown.types'

	type $$Props = DropdownProps

	let {
		componentName = 'dropdown',
		placement = 'bottom',
		arrow = true,
		autoClose = 'outside',
		children,
		targetSnippet,
		...restProps
	}: $$Props = $props()

	let targetEl: HTMLElement | undefined = $state(undefined)

	const context: DropdownContext = writable({})
	setContext('DROPDOWN', context)

	$effect(() => {
		$context = {
			target: targetEl?.firstElementChild ?? undefined,
			placement,
			autoClose,
		}
		console.log('set context to ', $context)
	})

	let props: $$Props = $derived({
		...restProps,
		componentName,
		cssProps: { placement: placement?.split('-')[0], arrow },
	})
</script>

<El {...props}>
	<El componentName="{componentName}-target" bind:element={targetEl}>
		{@render targetSnippet?.()}
	</El>
	{@render children?.()}
</El>
