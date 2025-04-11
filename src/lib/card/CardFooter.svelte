<script lang="ts">
	import { El } from '../el'
	import type { CardFooterProps } from './Card.types'

	type $$Props = CardFooterProps

	let { componentName = 'card-footer', transparent, children, ...restProps }: $$Props = $props()
</script>

<El {...restProps} {componentName} cssProps={{ transparent }}>
	{@render children?.()}
</El>
