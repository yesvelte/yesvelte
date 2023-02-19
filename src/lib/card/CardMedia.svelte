<script lang="ts">
	import { El } from '../el'
	import type { CardMediaProps } from './Card.types'

	type $$Props = CardMediaProps

	export let componentName: $$Props['componentName'] = 'card-media'
	export let elementPosition: $$Props['elementPosition'] = 'top'

	let cssProps: CardMediaProps = {}
	$: cssProps = { elementPosition }
</script>

<El {...$$restProps} {cssProps} {componentName}>
	<slot />
</El>
