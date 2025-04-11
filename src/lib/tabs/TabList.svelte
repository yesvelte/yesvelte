<script lang="ts">
	import { El } from '../el'
	import type { TabListProps } from './Tab.types'

	type $$Props = TabListProps

	let { componentName = 'tab-list', tag = 'ul', grow, children, ...restProps }: $$Props = $props()

	let cssProps: TabListProps = $derived({
		grow,
	})

	let props: TabListProps = $derived({
		...restProps,
		cssProps,
		tag,
		componentName,
		role: 'tablist',
	})
</script>

<El {...props}>
	{@render children?.()}
</El>
