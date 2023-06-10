<!-- @css:dropdown -->
<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { Popup } from '../popup'
	import type { DropdownContext, DropdownMenuProps } from './Dropdown.types'
	import { getContext } from 'svelte'

	type $$Props = DropdownMenuProps

	export let componentName: $$Props['componentName'] = 'dropdown-menu'

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]
	const context = getContext<DropdownContext>('DROPDOWN')

	$: cssProps = {
		//
	}

	$: props = {
		target: $context.target,
		componentName,
		autoClose: $context.autoClose,
		placement: $context.placement,
	}
</script>

<Popup {components} trigger="click" {...$$restProps} {...props} {cssProps}>
	<slot />
</Popup>
