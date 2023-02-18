<script lang="ts">
	import { El } from '../el'

	import type { AvatarListProps } from './AvatarList.types'

	type $$Props = AvatarListProps

	export let componentName: $$Props['componentName'] = 'avatar-list'
	export let stacked: $$Props['stacked'] = undefined

	let cssProps: AvatarListProps = {}
	let otherProps: AvatarListProps = {}
	$: {
		cssProps = {
			stacked,
		}
		otherProps = {
			componentName,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
