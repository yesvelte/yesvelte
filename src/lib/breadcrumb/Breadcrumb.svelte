<script lang="ts">
	import { El } from '../el'
	import type { BreadcrumbProps } from './Breadcrumb.types'

	type $$Props = BreadcrumbProps

	export let componentName: $$Props['componentName'] = 'breadcrumb'
	export let separator: $$Props['separator'] = undefined

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

<El tag="nav" aria-label="breadcrumb">
	<El tag="ol" {...$$restProps} {cssProps} {...props}>
		<slot />
	</El>
</El>
