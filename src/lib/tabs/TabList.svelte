<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { TabListProps } from './Tab.types'

	type $$Props = TabListProps

	export let componentName: $$Props['componentName'] = 'tab-list'
	export let tag: $$Props['tag'] = 'ul'
	export let grow: $$Props['grow'] = undefined

	let cssProps: TabListProps = {}
	let props: TabListProps = {}
	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

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

<El {components} {...$$restProps} {...props} {componentName} {cssProps}>
	<slot />
</El>
