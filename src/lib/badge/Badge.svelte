<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { BadgeProps } from './Badge.types'

	type $$Props = BadgeProps

	export let componentName: $$Props['componentName'] = 'badge'
	export let tag: $$Props['tag'] = 'span'
	export let color: $$Props['color'] = undefined
	export let dot: $$Props['dot'] = undefined
	export let ghost: $$Props['ghost'] = undefined
	export let href: $$Props['href'] = undefined
	export let outline: $$Props['outline'] = undefined
	export let pill: $$Props['pill'] = undefined
	export let tile: $$Props['tile'] = undefined
	export let blink: $$Props['blink'] = undefined
	export let notification: $$Props['notification'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let cssProps: BadgeProps = {}
	let props: BadgeProps = {}
	$: cssProps = {
		notification,
		tile,
		pill,
		outline,
		ghost,
		dot,
		color,
		blink,
	}

	$: props = {
		href,
		tag: href ? 'a' : tag,
		componentName,
	}
</script>

<El {components} {...$$restProps} {cssProps} {...props} tag={href ? 'a' : tag}>
	{#if !dot}
		<slot />
	{/if}
</El>
