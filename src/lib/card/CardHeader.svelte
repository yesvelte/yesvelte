<script lang="ts">
	import { El } from '../el'

	import type { CardHeaderProps } from './Card.types'

	type $$Props = CardHeaderProps

	export let componentName: $$Props['componentName'] = 'card-header'
	export let light: $$Props['light'] = undefined

	let cssProps: CardHeaderProps = {}
	$: cssProps = { light }
</script>

<El {...$$restProps} {cssProps} {componentName}>
	<slot />
</El>
