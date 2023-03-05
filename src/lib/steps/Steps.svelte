<script lang="ts">
	import { El } from '../el'
	import type { StepsProps } from './Steps.types'

	type $$Props = StepsProps

	export let color: $$Props['color'] = undefined
	export let componentName: $$Props['componentName'] = 'steps'
	export let counter: $$Props['counter'] = undefined
	export let vertical: $$Props['vertical'] = undefined

	let cssProps: object = {}
	let props: StepsProps = {}
	$: {
		cssProps = {
			color,
			counter,
			vertical,
		}
		props = {
			componentName,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
