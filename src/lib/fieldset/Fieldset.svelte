<script lang="ts">
	import { El } from '../el'
	import type { FieldsetProps } from './Fieldset.types'

	type $$Props = FieldsetProps

	export let componentName: $$Props['componentName'] = 'fieldset'

	let cssProps: FieldsetProps = {}
	let props: FieldsetProps = {}
	$: {
		cssProps = {}
		props = {
			componentName,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
