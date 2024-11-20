<script lang="ts">
	import { El } from '../el'
	import type { StatusProps } from './Status.types'

	type $$Props = StatusProps

	export let componentName: $$Props['componentName'] = 'status'
	export let color: $$Props['color'] = undefined
	export let lite: $$Props['lite'] = undefined

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

<El tag="span" {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
