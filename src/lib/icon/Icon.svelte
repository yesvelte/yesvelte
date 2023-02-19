<script lang="ts">
	import 'iconify-icon'
	import { classname } from '../internal'
	import type { IconProps } from './Icon.types'

	type $$Props = IconProps

	export let componentName: $$Props['componentName'] = 'icon'
	export let color: $$Props['color'] = undefined
	export let filled: $$Props['filled'] = false
	export let name: $$Props['name'] = undefined
	export let pack: $$Props['pack'] = 'tabler'
	export let size: $$Props['size'] = undefined

	$: classes = classname(
		componentName,
		{
			color,
			filled,
			size,
		},
		$$props.class
	)
</script>

<iconify-icon icon="{pack}:{name}" {...$$restProps} class={classes} width="100%" height="100%" />
