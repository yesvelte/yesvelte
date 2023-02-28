<script lang="ts">
	import { El } from '../el'
	import type { StepItemProps } from './Steps.types'

	type $$Props = StepItemProps

	export let componentName: $$Props['componentName'] = 'step-item'
	export let href: $$Props['href'] = undefined
	export let active: $$Props['active'] = undefined

	let cssProps: object = {}
	let props: StepItemProps = {}
	$: {
		cssProps = {
			active,
		}
		props = {
			tag: href ? 'a' : 'span',
			componentName,
			href,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...props} on:click>
	<slot />
</El>
