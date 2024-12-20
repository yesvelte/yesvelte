<script lang="ts">
	import { El } from '../el'
	import type { ToastContainerProps } from './Toast.types'

	type $$Props = ToastContainerProps

	let { componentName = 'toast-container', placement, children, ...restProps } = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
		cssProps: {
			placement,
		},
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
