<script lang="ts">
	import { Popup } from '../popup'
	import type { DropdownContext, DropdownMenuProps } from './Dropdown.types'
	import { getContext } from 'svelte'

	type $$Props = DropdownMenuProps

	let { componentName = 'dropdown-menu', children, ...restProps }: $$Props = $props()

	const context = getContext<DropdownContext>('DROPDOWN')

	let props: $$Props = $derived({
		...restProps,
		target: $context.target,
		componentName,
		trigger: 'click',
		autoClose: $context.autoClose,
		placement: $context.placement,
		cssProps: {},
	})
</script>

<Popup {...props}>
	{@render children?.()}
</Popup>
