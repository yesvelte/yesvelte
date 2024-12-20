<script lang="ts">
	import { El } from '../el'

	import type { CardMediaProps } from './Card.types'

	type $$Props = CardMediaProps

	let {
		componentName = 'card-media',
		elementPosition = 'top',
		children,
		...restProps
	}: $$Props = $props()
</script>

<El {...restProps} cssProps={{ elementPosition }} {componentName}>
	{@render children?.()}
</El>
