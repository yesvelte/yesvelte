<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = Partial<ElProps>

	let { componentName = 'card-title', children, ...restProps }: $$Props = $props()
</script>

<El {...restProps} {componentName}>
	{@render children?.()}
</El>
