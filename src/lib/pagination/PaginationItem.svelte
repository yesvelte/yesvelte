<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { El, type ElProps } from '../el'
	import type { PaginationItemProps } from './Pagination.types'

	type $$Props = PaginationItemProps

	export let componentName: $$Props['componentName'] = 'pagination-item'
	export let href: $$Props['href'] = undefined
	export let active: $$Props['active'] = undefined
	export let disabled: $$Props['disabled'] = undefined

	const dispatch = createEventDispatcher()
	function onClick() {
		if (disabled) return
		dispatch('click')
	}

	$: cssProps = {
		active,
		disabled,
	}

	let linkProps: Partial<ElProps>
	$: linkProps = {
		tag: 'a',
		href,
		componentName: componentName + '-link',
	}
</script>

<El {...$$restProps} {componentName} {cssProps} on:click={onClick}>
	<El {...linkProps}>
		<slot />
	</El>
</El>
