<script lang="ts">
	import { El } from '../el'
	import type { ButtonProps } from './Button.types'

	type $$Props = ButtonProps

	// TODO
	// shape?: 'tile' | 'pill' | 'round' | 'fab'
	// ghost
	// icon
	// link
	// outline/outlined
	// ripple = boolean
	// expand = "block" | "full" | undefined
	// text
	// fill/contained
	// flat
	// depresed
	// rel
	// plain - remove bg
	// shaped
	// elevation

	export let active: $$Props['active'] = undefined
	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'button'
	export let disabled: $$Props['disabled'] = undefined
	export let ghost: $$Props['ghost'] = undefined
	export let href: $$Props['href'] = undefined
	// icon?: boolean
	// link?: boolean
	export let loading: $$Props['loading'] = undefined
	export let outline: $$Props['outline'] = undefined
	export let pill: $$Props['pill'] = undefined
	export let size: $$Props['size'] = undefined
	export let target: $$Props['target'] = undefined
	export let tile: $$Props['tile'] = undefined
	export let type: $$Props['type'] = undefined

	export let tag: $$Props['tag'] = 'button'

	let cssProps: ButtonProps = {}
	let props: ButtonProps = {}
	$: {
		cssProps = {
			active,
			color,
			disabled,
			ghost,
			loading,
			outline,
			pill,
			size,
			tile,
		}
		props = {
			componentName,
			href,
			role: 'button',
			tag: href ? 'a' : tag,
			target,
			type: type ?? 'button',
		}
	}
</script>

<El {...$$restProps} {cssProps} {...props} on:click>
	<slot />
</El>
