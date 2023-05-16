<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { forwardEventsRegister } from '../internal'

	import { El } from '../el'
	import type { LabelProps } from './Label.types'

	forwardEventsRegister(get_current_component())

	type $$Props = LabelProps

	export let componentName: $$Props['componentName'] = 'label'
	export let required: $$Props['required'] = undefined

	let fore: $$Props['for'] = undefined
	export { fore as for }

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

<El tag="label" {...$$restProps} for={fore} {cssProps} {...props}>
	<slot />
</El>
