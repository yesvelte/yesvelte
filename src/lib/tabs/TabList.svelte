<script lang="ts">
	import { El } from '../el'
	import type { TabListProps } from './Tab.types'

	type $$Props = TabListProps

	export let componentName: $$Props['componentName'] = 'tab-list'
	export let tag: $$Props['tag'] = 'ul'
	export let grow: $$Props['grow'] = undefined

	let cssProps: TabListProps = {}
	let props: TabListProps = {}
	$: {
		cssProps = {
			grow,
		}
		props = {
			tag,
			componentName,
			role: 'tablist',
		}
	}
</script>

<El {...$$restProps} {...props} {componentName} {cssProps}>
	<slot />
</El>
