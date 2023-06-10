	<!-- @css:label -->

<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { LabelProps } from './Label.types'

	type $$Props = LabelProps


	export let componentName: $$Props['componentName'] = 'label'
	export let required: $$Props['required'] = undefined

	let fore: $$Props['for'] = undefined
	export { fore as for }

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	let props: $$Props = {}
	let cssProps: $$Props = {}

	$: {
		cssProps = {
			required,
		}

		props = {
			componentName,
		}
	}
</script>

<El tag="label" {components} {...$$restProps} for={fore} {cssProps} {...props}>
	<slot />
</El>
