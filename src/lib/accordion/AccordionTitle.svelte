<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	export let componentName: $$Props['componentName'] = 'accordion-title'

	$: otherProps = {
		componentName,
	}
</script>

<El {...$$restProps} {...otherProps}>
	<slot />
</El>
