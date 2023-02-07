<script lang="ts" context="module">
	let globalCounter = 0
</script>

<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '../internal/forwardEventsBuilder'
	import { classname } from '../internal/classname'

	import type { CssProps, ElProps } from './El.types'

	type $$Props = Partial<ElProps>

	// default properties
	export let element: $$Props['element'] = undefined
	export let cssPrefix: $$Props['cssPrefix'] = 'el'
	export let id: $$Props['id'] = cssPrefix + '_' + globalCounter++
	export let style: $$Props['style'] = undefined
	export let tag: $$Props['tag'] = 'div'
	export let cssProps: $$Props['cssProps'] = {}
	export let value: $$Props['value'] = undefined

	// background properties
	export let bgColor: $$Props['bgColor'] = undefined
	export let bgGradient: $$Props['bgGradient'] = undefined
	export let bgOpacity: $$Props['bgOpacity'] = undefined

	//text
	export let textOpacity: $$Props['textOpacity'] = undefined

	// border properties
	export let border: $$Props['border'] = undefined
	export let borderTop: $$Props['borderTop'] = undefined
	export let borderStart: $$Props['borderStart'] = undefined
	export let borderEnd: $$Props['borderEnd'] = undefined
	export let borderBottom: $$Props['borderBottom'] = undefined
	export let borderColor: $$Props['borderColor'] = undefined
	export let borderRadius: $$Props['borderRadius'] = undefined
	export let borderRoundSize: $$Props['borderRoundSize'] = undefined
	export let borderOpacity: $$Props['borderOpacity'] = undefined

	// padding properties
	export let p: $$Props['p'] = undefined
	export let pt: $$Props['pt'] = undefined
	export let pb: $$Props['pb'] = undefined
	export let ps: $$Props['ps'] = undefined
	export let pe: $$Props['pe'] = undefined
	export let px: $$Props['px'] = undefined
	export let py: $$Props['py'] = undefined

	// margin properties
	export let m: $$Props['m'] = undefined
	export let mt: $$Props['mt'] = undefined
	export let mb: $$Props['mb'] = undefined
	export let ms: $$Props['ms'] = undefined
	export let me: $$Props['me'] = undefined
	export let mx: $$Props['mx'] = undefined
	export let my: $$Props['my'] = undefined

	// gap properties
	export let gap: $$Props['gap'] = undefined

	// display properties
	export let clearfix: $$Props['clearfix'] = undefined
	export let ratio: $$Props['ratio'] = undefined
	export let sticky: $$Props['sticky'] = undefined
	export let fixed: $$Props['fixed'] = undefined
	export let d: $$Props['d'] = undefined
	export let dSm: $$Props['dSm'] = undefined
	export let dMd: $$Props['dMd'] = undefined
	export let dLg: $$Props['dLg'] = undefined
	export let dXl: $$Props['dXl'] = undefined
	export let dXxl: $$Props['dXxl'] = undefined
	export let dPrint: $$Props['dPrint'] = undefined

	// shadow
	export let shadow: $$Props['shadow'] = undefined

	// sizing
	export let w: $$Props['w'] = undefined
	export let h: $$Props['h'] = undefined
	export let mw: $$Props['mw'] = undefined
	export let mh: $$Props['mh'] = undefined

	// position
	export let position: $$Props['position'] = undefined
	export let top: $$Props['top'] = undefined
	export let start: $$Props['start'] = undefined
	export let bottom: $$Props['bottom'] = undefined
	export let end: $$Props['end'] = undefined

	// Vertical aligh
	export let vAlign: $$Props['vAlign'] = undefined

	// text
	export let textColor: $$Props['textColor'] = undefined
	export let textAlign: $$Props['textAlign'] = undefined
	export let textAlignSm: $$Props['textAlignSm'] = undefined
	export let textAlignMd: $$Props['textAlignMd'] = undefined
	export let textAlignLg: $$Props['textAlignLg'] = undefined
	export let textAlignXl: $$Props['textAlignXl'] = undefined
	export let textWrap: $$Props['textWrap'] = undefined
	export let textTransform: $$Props['textTransform'] = undefined
	export let textDecoration: $$Props['textDecoration'] = undefined
	export let lineHeight: $$Props['lineHeight'] = undefined
	export let textMuted: $$Props['textMuted'] = undefined
	export let textLead: $$Props['textLead'] = undefined
	export let textHeading: $$Props['textHeading'] = undefined
	export let textTruncate: $$Props['textTruncate'] = undefined

	// font
	export let fontSize: $$Props['fontSize'] = undefined
	export let fontWeight: $$Props['fontWeight'] = undefined
	export let fontStyle: $$Props['fontStyle'] = undefined
	export let hidden: $$Props['hidden'] = undefined

	// float
	export let float: $$Props['float'] = undefined
	export let floatSm: $$Props['floatSm'] = undefined
	export let floatMd: $$Props['floatMd'] = undefined
	export let floatLg: $$Props['floatLg'] = undefined
	export let floatXl: $$Props['floatXl'] = undefined
	export let floatXxl: $$Props['floatXxl'] = undefined

	// container
	export let container: $$Props['container'] = undefined

	// max widths
	export let col: $$Props['col'] = undefined
	export let colSm: $$Props['colSm'] = undefined
	export let colMd: $$Props['colMd'] = undefined
	export let colLg: $$Props['colLg'] = undefined
	export let colXl: $$Props['colXl'] = undefined
	export let colXxl: $$Props['colXxl'] = undefined

	// order
	export let order: $$Props['order'] = undefined
	export let orderSm: $$Props['orderSm'] = undefined
	export let orderMd: $$Props['orderMd'] = undefined
	export let orderLg: $$Props['orderLg'] = undefined
	export let orderXl: $$Props['orderXl'] = undefined
	export let orderXxl: $$Props['orderXxl'] = undefined

	// offset
	export let offset: $$Props['offset'] = undefined
	export let offsetSm: $$Props['offsetSm'] = undefined
	export let offsetMd: $$Props['offsetMd'] = undefined
	export let offsetLg: $$Props['offsetLg'] = undefined
	export let offsetXl: $$Props['offsetXl'] = undefined
	export let offsetXxl: $$Props['offsetXxl'] = undefined

	// Row
	export let row: $$Props['row'] = undefined
	export let rowCols: $$Props['rowCols'] = undefined
	export let rowColsSm: $$Props['rowColsSm'] = undefined
	export let rowColsMd: $$Props['rowColsMd'] = undefined
	export let rowColsLg: $$Props['rowColsLg'] = undefined
	export let rowColsXl: $$Props['rowColsXl'] = undefined
	export let rowColsXxl: $$Props['rowColsXxl'] = undefined

	// Row gutters
	export let g: $$Props['g'] = undefined
	export let gSm: $$Props['gSm'] = undefined
	export let gMd: $$Props['gMd'] = undefined
	export let gLg: $$Props['gLg'] = undefined
	export let gXl: $$Props['gXl'] = undefined
	export let gXxl: $$Props['gXxl'] = undefined
	export let gx: $$Props['gx'] = undefined
	export let gy: $$Props['gy'] = undefined

	// Align items
	export let alignItems: $$Props['alignItems'] = undefined
	export let alignSelf: $$Props['alignSelf'] = undefined
	export let justifyContent: $$Props['justifyContent'] = undefined

	// Tab Index
	export let tabindex: $$Props['tabindex'] = undefined

	// forward events
	export let forwardEvents: (element: HTMLElement) => unknown = () => ({})

	let classes: string | undefined
	let defaultCssProps: CssProps
	let defaultCssPrefix = 'el'
	let otherProps = {}

	$: {
		forwardEvents = forwardEventsBuilder(get_current_component())
		defaultCssProps = {
			// background properties
			bgColor,
			bgGradient,
			bgOpacity,
			// border properties
			border,
			borderTop,
			borderStart,
			borderEnd,
			borderBottom,
			borderColor,
			borderRadius,
			borderRoundSize,
			borderOpacity,
			// padding properties
			p,
			pt,
			pb,
			ps,
			pe,
			px,
			py,
			// margin properties
			m,
			mt,
			mb,
			ms,
			me,
			mx,
			my,
			// gap properties
			gap,
			// display properties
			clearfix,
			ratio,
			sticky,
			fixed,
			d,
			dSm,
			dMd,
			dLg,
			dXl,
			dXxl,
			dPrint,
			// shadow
			shadow,
			// sizing
			w,
			h,
			mw,
			mh,
			// position
			position,
			top,
			start,
			bottom,
			end,
			// vertical align
			vAlign,
			// text
			textColor,
			textAlign,
			textAlignSm,
			textAlignMd,
			textAlignLg,
			textAlignXl,
			textWrap,
			textTransform,
			textDecoration,
			lineHeight,
			textMuted,
			textLead,
			textHeading,
			textTruncate,
			textOpacity,
			// fonts
			fontSize,
			fontWeight,
			fontStyle,
			hidden,
			float,
			floatSm,
			floatMd,
			floatLg,
			floatXl,
			floatXxl,
			// container
			container,
			// col layout
			col,
			colSm,
			colMd,
			colLg,
			colXl,
			colXxl,
			// Col Order
			order,
			orderSm,
			orderMd,
			orderLg,
			orderXl,
			orderXxl,
			// Col Offset
			offset,
			offsetSm,
			offsetMd,
			offsetLg,
			offsetXl,
			offsetXxl,
			//Row
			row,
			rowCols,
			rowColsSm,
			rowColsMd,
			rowColsLg,
			rowColsXl,
			rowColsXxl,
			// gutter
			g,
			gSm,
			gMd,
			gLg,
			gXl,
			gXxl,
			gx,
			gy,
			// align items
			alignItems,
			alignSelf,
			justifyContent,
		}
		classes = classname(defaultCssPrefix, defaultCssProps, '', true)
		if (cssPrefix) classes += ' ' + classname(cssPrefix, cssProps, $$props.class, true)

		otherProps = {
			id,
			class: classes,
			style,
			tabindex,
		}
	}
</script>

{#if $$slots.default}
	<svelte:element this={tag} use:forwardEvents bind:this={element} {...$$restProps} {...otherProps}>
		<slot />
	</svelte:element>
{:else if tag === 'input'}
	<input use:forwardEvents bind:this={element} {...$$restProps} {...otherProps} bind:value />
{:else if tag === 'textarea'}
	<textarea use:forwardEvents bind:this={element} {...$$restProps} {...otherProps} bind:value />
{:else}
	<svelte:element
		this={tag}
		use:forwardEvents
		bind:this={element}
		{...$$restProps}
		{...otherProps}
	/>
{/if}
