<!-- @css:avatar -->
<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { AvatarListProps } from './AvatarList.types'

	type $$Props = AvatarListProps

	export let componentName: $$Props['componentName'] = 'avatar-list'
	export let stacked: $$Props['stacked'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let cssProps: $$Props = {}
	let props: $$Props = {}
	$: {
		cssProps = {
			stacked,
		}
		props = {
			componentName,
		}
	}
</script>

<El {components} {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
