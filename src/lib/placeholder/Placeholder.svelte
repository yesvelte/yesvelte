<script lang="ts">
	import { El } from '../el'
	import type { PlaceholderProps } from './Placeholder.types'

	type $$Props = PlaceholderProps

	export let componentName: $$Props['componentName'] = 'placeholder'
	export let animation: $$Props['animation'] = undefined
	export let size: $$Props['size'] = undefined

	$: cssProps = {
		animation,
		size,
	}
</script>

<El {...$$restProps} {componentName} {cssProps}>
	<slot />
</El>
