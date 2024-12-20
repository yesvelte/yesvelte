<script lang="ts">
	import { El } from '../el'
	import type { ToastBodyProps } from './Toast.types'

	type $$Props = ToastBodyProps

	let { componentName = 'toast-body', children, ...restProps }: $$Props = $props()
</script>

<El {...restProps} {componentName}>
	{@render children?.()}
</El>
