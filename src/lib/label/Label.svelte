<script lang="ts">
	import { El } from '../el'
	import type { LabelProps } from './Label.types'

	type $$Props = LabelProps

	export let tag: $$Props['tag'] = 'label'
	export let componentName: $$Props['componentName'] = 'label'
	export let required: $$Props['required'] = false

	let fore: $$Props['for'] = undefined
	export { fore as for }

	let props: $$Props = { tag, componentName }
	let cssProps: $$Props = { required }

	$: {
		cssProps = {
			required,
		}

		props = {
			tag,
			componentName,
		}
	}
</script>

<El {...$$restProps} for={fore} {cssProps} {...props}>
	<slot />
</El>
