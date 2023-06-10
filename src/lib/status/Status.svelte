<!-- @css:status -->
<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { StatusProps } from './Status.types'

	type $$Props = StatusProps

	export let componentName: $$Props['componentName'] = 'status'
	export let color: $$Props['color'] = undefined
	export let lite: $$Props['lite'] = undefined

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let props: $$Props = {}
	let cssProps: $$Props = {}

	$: {
		cssProps = {
			color,
			lite,
		}

		props = {
			componentName,
		}
	}
</script>

<El {components} tag="span" {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
