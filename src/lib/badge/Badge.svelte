<script lang="ts">
	import { El } from '../el'
	import type { BadgeProps } from './Badge.types'

	type $$Props = BadgeProps

	let {
		componentName = 'badge',
		tag = 'span',
		color,
		dot,
		ghost,
		href,
		outline,
		pill,
		tile,
		blink,
		notification,
		children,
		...restProps
	}: $$Props = $props()

	let props: BadgeProps = $derived({
		...restProps,
		href,
		tag: href ? 'a' : tag,
		componentName,
		cssProps: {
			notification,
			tile,
			pill,
			outline,
			ghost,
			dot,
			color,
			blink,
		},
	})
</script>

<El {...props}>
	{#if !dot}
		{@render children?.()}
	{/if}
</El>
