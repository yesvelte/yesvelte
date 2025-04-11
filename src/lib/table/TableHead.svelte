<script lang="ts">
	import { setContext } from 'svelte'

	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	let { tag = 'thead', componentName = 'table-head', children, ...restProps }: $$Props = $props()

	setContext('TABLE:HEAD', true)

	let props: $$Props = $derived({
		...restProps,
		componentName,
		tag,
	})
</script>

<El {...props} {componentName} {tag}>
	{@render children?.()}
</El>
