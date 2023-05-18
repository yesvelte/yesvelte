<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	export let componentName: $$Props['componentName'] = 'fieldset'

	const components = [get_current_component(), ...($$props.components ?? [])]
	let cssProps: $$Props = {}
	let props: $$Props = {}
	$: {
		cssProps = {}
		props = {
			componentName,
		}
	}
</script>

<El {components} {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
