<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	let { componentName = 'accordion-title', children, ...restProps }: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
