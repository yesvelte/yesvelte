<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { El } from '../el'
	import type { FloatingProps } from './Floating.types'

	type $$Props = FloatingProps

	export let componentName: $$Props['componentName'] = 'floating'
	export let fixed: $$Props['fixed']
	export let offset: $$Props['offset'] = 0
	export let placement: $$Props['placement'] = 'end-bottom'

	const components = [get_current_component(), ...($$props.components ?? [])]

	let element: HTMLElement

	let cssProps: FloatingProps = {}
	let props: FloatingProps = {}
	$: cssProps = { fixed }

	$: props = { componentName }

	$: (() => {
		if (!element) return

		if (typeof window != 'object') return

		const rtl = getComputedStyle(element).getPropertyValue('direction').toLowerCase() == 'rtl'

		let p = placement || ''

		if (p.match(/^(top|bottom)$/)) p = `-${p}`

		let [x, y] = p.split('-')

		x ||= 'center'
		y ||= 'center'

		if (x.match(/start/)) x = rtl ? 'right' : 'left'
		if (x.match(/end/)) x = rtl ? 'left' : 'right'

		const centeredX = x == 'center'
		const centeredY = y == 'center'

		const X = !centeredX ? x : rtl ? 'right' : 'left'
		const Y = !centeredY ? y : 'top'

		const offsets = [offset]
			.flat()
			.map((offset) => (typeof offset == 'number' ? `${offset}px` : offset))

		const offsetX = offsets[0]
		const offsetY = offsets[1] ?? offsets[0]

		const style = {} as any

		style[X] = centeredX ? `calc(50% + ${offsetX})` : `calc(0px + ${offsetX})`
		style[Y] = centeredY ? `calc(50% + ${offsetY})` : `calc(0px + ${offsetY})`

		if (centeredX || centeredY) {
			style['transform'] = `translate(${centeredX ? `${rtl ? '' : '-'}50%` : '0'}, ${
				centeredY ? '-50%' : '0'
			})`
		}

		requestAnimationFrame(() => Object.assign(element.style, style))
	})()
</script>

<El {components} bind:element {...$$restProps} {cssProps} {...props}>
	<slot />
</El>
