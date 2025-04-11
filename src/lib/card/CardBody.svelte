<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = Partial<ElProps>

	let { componentName = 'card-body', children, ...restProps }: $$Props = $props()
</script>

<El {...restProps} {componentName}>
	{@render children?.()}
</El>
