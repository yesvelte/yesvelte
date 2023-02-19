<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	export let componentName: $$Props['componentName'] = 'fieldset'

	let cssProps: ElProps = {}
	let props: ElProps = {}
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
