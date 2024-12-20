<script lang="ts">
	import { El } from '../el'
	import type { AvatarListProps } from './AvatarList.types'

	type $$Props = AvatarListProps

	let { componentName = 'avatar-list', stacked, children, ...restProps }: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
		cssProps: {
			stacked,
		},
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
