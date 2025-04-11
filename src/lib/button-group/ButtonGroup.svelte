<script lang="ts">
	import { El } from '../el'
	import type { ButtonGroupProps } from './ButtonGroup.types'

	type $$Props = ButtonGroupProps

	let { componentName = 'button-group', size, vertical, children, ...restProps }: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
		role: 'group',
		cssProps: {
			size,
			vertical,
		},
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
