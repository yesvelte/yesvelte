<script lang="ts">
	import { El } from '../el'

	import type { AvatarListProps } from './AvatarList.types'

	type $$Props = AvatarListProps

	export let componentName: $$Props['componentName'] = 'avatar-list'
	export let stacked: $$Props['stacked'] = undefined

	let cssProps: AvatarListProps = {}
	let props: AvatarListProps = {}
	$: {
		cssProps = {
			stacked,
		}
		props = {
			componentName,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
