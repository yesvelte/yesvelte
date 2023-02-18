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
	let otherProps: AvatarProps = {}
	$: {
		cssProps = {
			color,
			size,
			pill,
			round,
			tile,
		}
		otherProps = {
			componentName,
		}
	}
</script>

<El tag="span" {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
