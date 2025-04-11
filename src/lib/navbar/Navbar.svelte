<script lang="ts">
	import { El } from '../el'
	import type { NavbarProps } from './Navbar.types'

	type $$Props = NavbarProps

	let { componentName = 'navbar', theme, children, ...restProps }: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName: componentName + '-wrapper',
		cssProps: {
			theme,
		},
	})
</script>

<El {...props}>
	<El {componentName}>
		<El componentName="{componentName}-content" tag="ul">
			{@render children?.()}
		</El>
	</El>
</El>
