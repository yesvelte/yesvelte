<script lang="ts">
	import { Popup } from '../popup'
	import type { DropdownContext, DropdownMenuProps } from './Dropdown.types'
	import { getContext } from 'svelte'

	type $$Props = DropdownMenuProps

	export let componentName: $$Props['componentName'] = 'dropdown-menu'

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

<Popup {...$$restProps} {...props} {cssProps}>
	<slot />
</Popup>
