<script lang="ts">
	import { El } from '../el'
	import type { TabListProps } from './Tab.types'

	type $$Props = TabListProps

	export let componentName: $$Props['componentName'] = 'tab-list'
	export let tag: $$Props['tag'] = 'ul'
	export let pills: $$Props['pills'] = undefined
	export let grow: $$Props['grow'] = undefined

	let cssProps: TabListProps = {}
	let props: TabListProps = {}
	$: {
		cssProps = {
			pills,
			grow,
		}
		props = {
			tag,
			componentName,
			role: 'tablist',
		}
	}
</script>

<El {...$$restProps} tabs={!pills} {...props} {componentName} {cssProps}>
	<slot />
</El>
