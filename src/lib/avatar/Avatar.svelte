<script lang="ts">
	import { El } from '../el'

	import type { AvatarProps } from './Avatar.types'

	type $$Props = AvatarProps

	let {
		componentName = 'avatar',
		color = undefined,
		shape = undefined,
		size = undefined,
		children,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		tag: 'span',
		componentName,
		cssProps: {
			color,
			size,
			shape,
		},
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
