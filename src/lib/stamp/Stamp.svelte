<script lang="ts">
	import { El } from '../el'
	import type { StampProps } from './Stamp.types'
	import { Icon } from '../icon'

	type $$Props = StampProps

	let {
		componentName = 'stamp',
		bgColor,
		textColor,
		iconPosition,
		size,
		icon,
		children,
		...restProps
	}: $$Props = $props()

	let props: $$Props = $derived({
		...restProps,
		componentName,
		cssProps: {
			size,
			iconPosition,
			bgColor,
			textColor,
		},
	})
</script>

<El {...props}>
	<Icon componentName={componentName + '-icon'} name={icon} />
</El>
