<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { El } from '../el'
	import type { DropdownContext, DropdownProps } from './Dropdown.types'

	type $$Props = DropdownProps

	export let componentName: $$Props['componentName'] = 'dropdown'
	export let placement: $$Props['placement'] = 'bottom'
	export let arrow: $$Props['arrow'] = true
	export let autoClose: $$Props['autoClose'] = 'outside'

	let targetEl: HTMLElement

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
	const context: DropdownContext = writable({})
	setContext('DROPDOWN', context)

	$: $context = {
		target: targetEl?.firstElementChild ?? undefined,
		placement,
		autoClose,
	}

	$: cssProps = {
		placement: placement?.split('-')[0],
		arrow,
	}
</script>

<El {components} {...$$restProps} {componentName} {cssProps}>
	<El componentName="{componentName}-target" bind:element={targetEl}>
		<slot name="target" />
	</El>
	<slot />
</El>
