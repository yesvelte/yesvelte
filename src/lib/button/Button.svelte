<script lang="ts">
	import { El } from '../el'
	import type { ButtonProps } from './Button.types'

	type $$Props = ButtonProps

	export let outline: $$Props['outline'] = undefined
	export let href: $$Props['href'] = undefined
	export let componentName: $$Props['componentName'] = 'button'
	export let tag: $$Props['tag'] = 'button'
	export let type: $$Props['type'] = undefined
	export let value: $$Props['value'] = undefined
	export let size: $$Props['size'] = undefined
	export let toggle: $$Props['toggle'] = undefined
	export let color: $$Props['color'] = undefined
	export let ghost: $$Props['ghost'] = undefined
	export let loading: $$Props['loading'] = undefined
	export let active: $$Props['active'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let pill: $$Props['pill'] = undefined
	export let tile: $$Props['tile'] = undefined

	let cssProps: ButtonProps = {}
	let props: ButtonProps = {}
	$: {
		cssProps = {
			color,
			outline,
			size,
			toggle,
			ghost,
			loading,
			active,
			disabled,
			pill,
			tile,
		}
		props = {
			tag: href ? 'a' : tag,
			componentName,
			role: 'button',
			type: type ?? 'button',
			href,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...props} on:click>
	<slot>
		{#if value}
			{value}
		{/if}
	</slot>
</El>
