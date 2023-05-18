<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	export let componentName: $$Props['componentName'] = 'modal-body'

	const components = [get_current_component(), ...($$props.components ?? [])]
</script>

<El {...$$restProps} {componentName} {components}>
	<slot />
</El>
