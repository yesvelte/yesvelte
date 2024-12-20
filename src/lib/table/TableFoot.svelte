<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	let { tag = 'tfoot', componentName = 'table-foot', children, ...restProps }: $$Props = $props()
</script>

<El {...restProps} {componentName} {tag}>
	{@render children?.()}
</El>
