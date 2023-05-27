<script lang="ts">
	import { El, type ElProps } from '../el'

	import { get_current_component } from 'svelte/internal'

	type $$Props = ElProps

	export let componentName: $$Props['componentName'] = 'accordion-title'

	const components = [
		{ component: get_current_component(), except: [] },
		...($$props.components ?? []),
	]

	$: otherProps = {
		componentName,
	}
</script>

<El {components} {...$$restProps} {...otherProps}>
	<slot />
</El>
