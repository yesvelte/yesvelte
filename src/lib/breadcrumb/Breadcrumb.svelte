<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { BreadcrumbProps } from './Breadcrumb.types'

	type $$Props = BreadcrumbProps

	export let componentName: $$Props['componentName'] = 'breadcrumb'
	export let separator: $$Props['separator'] = undefined

	const components = [get_current_component(), ...($$props.components ?? [])]

	let props: $$Props = {}
	let cssProps: $$Props = {}

	$: {
		cssProps = {
			separator,
		}

		props = {
			componentName,
		}
	}
</script>

<El {components} tag="nav" aria-label="breadcrumb">
	<El tag="ol" {...$$restProps} {cssProps} {...props}>
		<slot />
	</El>
</El>
