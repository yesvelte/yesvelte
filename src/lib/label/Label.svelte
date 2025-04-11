<script lang="ts">
	import { El } from '../el'
	import type { LabelProps } from './Label.types'

	type $$Props = LabelProps

	let { componentName = 'label', required, children, for: fore, ...restProps }: $$Props = $props()

	let props = $derived({
		...restProps,
		tag: 'label',
		for: fore,
		componentName,
		cssProps: {
			required,
		},
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
