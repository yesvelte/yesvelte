<!-- @css:breadcrumbs -->
<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { BreadcrumbItemProps } from './Breadcrumb.types'

	type $$Props = BreadcrumbItemProps

	export let componentName: $$Props['componentName'] = 'breadcrumb-item'
	export let active: $$Props['active'] = undefined
	export let href: $$Props['href'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let props: $$Props = {}
	let cssProps: $$Props = {}

	$: {
		cssProps = {
			active,
		}

		props = {
			tag: 'li',
			componentName,
			'aria-current': `${active ?? 'page'}`,
		}
	}
</script>

<El {components} {...$$restProps} {cssProps} {...props}>
	{#if href}
		<El tag="a" {href} componentName="{componentName}-inner">
			<slot />
		</El>
	{:else}
		<slot />
	{/if}
</El>
