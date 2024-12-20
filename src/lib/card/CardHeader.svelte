<script lang="ts">
	import { El } from '../el'

	import type { CardHeaderProps } from './Card.types'

	type $$Props = CardHeaderProps

	let { componentName = 'card-header', light, children, ...restProps }: $$Props = $props()
</script>

<El {...restProps} cssProps={{ light }} {componentName}>
	{@render children?.()}
</El>
