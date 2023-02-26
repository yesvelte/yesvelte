<script lang="ts">
	import { El } from '../el'
	import type { ButtonGroupProps } from './ButtonGroup.types'

	type $$Props = ButtonGroupProps

	export let componentName: $$Props['componentName'] = 'button-group'
	export let size: $$Props['size'] = undefined
	export let vertical: $$Props['vertical'] = undefined

	let cssProps: ButtonGroupProps = {}
	let props: ButtonGroupProps = {}
	$: {
		cssProps = {
			size,
			vertical,
		}
		props = {
			componentName,
		}
	}
</script>

<El role="group" {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
