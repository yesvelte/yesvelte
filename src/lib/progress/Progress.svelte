<script lang="ts">
	import { El } from '../el'
	import type { ProgressProps } from './Progress.types'

	type $$Props = ProgressProps

	let { componentName = 'progress', size, separated, children, ...restProps }: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
		role: 'progressbar',
		cssProps: {
			size,
			separated,
		},
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
