<script lang="ts">
	import { El } from '../el'
	import type { CardFooterProps } from './Card.types'

	type $$Props = CardFooterProps

	export let componentName: $$Props['componentName'] = 'card-footer'
	export let transparent: $$Props['transparent'] = undefined

	let cssProps: CardFooterProps = {}

	$: cssProps = { transparent }
</script>

<El {...$$restProps} {cssProps} {componentName}>
	<slot />
</El>
