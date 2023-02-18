<script lang="ts">
	import { El } from '../el'

	import type { AvatarProps } from './Avatar.types'

	type $$Props = AvatarProps

	export let componentName: $$Props['componentName'] = 'avatar'
	export let color: $$Props['color'] = 'primary'
	export let pill: $$Props['pill'] = undefined
	export let round: $$Props['round'] = undefined
	export let tile: $$Props['tile'] = undefined
	export let size: $$Props['size'] = 'ep'

	let cssProps: AvatarProps = {}
	let props: AvatarProps = {}
	$: {
		cssProps = {
			color,
			size,
			pill,
			round,
			tile,
		}
		props = {
			componentName,
		}
	}
</script>

<El tag="span" {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
