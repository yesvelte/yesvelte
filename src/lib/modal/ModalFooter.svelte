<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	let { componentName = 'modal-footer', children, ...restProps }: $$Props = $props()
</script>

<El {...restProps} {componentName}>
	{@render children()}
</El>
