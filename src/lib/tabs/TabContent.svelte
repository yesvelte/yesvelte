<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	let { componentName = 'tab-content', children, ...restProps }: $$Props = $props()
</script>

<El {...restProps} {componentName}>
	{#if children}
		{@render children()}
	{/if}
</El>
