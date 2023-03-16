<script lang="ts">
	import { El } from '../el'
	import type { BreadcrumbItemProps } from './Breadcrumb.types'

	type $$Props = BreadcrumbItemProps

	export let componentName: $$Props['componentName'] = 'breadcrumb-item'
	export let active: $$Props['active'] = undefined
	export let href: $$Props['href'] = undefined

	let props: $$Props = {}
	let cssProps: $$Props = {}

	$: {
		cssProps = {
			active,
		}

		props = {
			tag: 'li',
			componentName,
			href,
			'aria-current': `${active ?? 'page'}`,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...props}>
	<El tag="a" componentName="breadcrumb-inner">
		<slot />
	</El>
</El>
