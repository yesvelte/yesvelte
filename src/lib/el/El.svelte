<script lang="ts" module>
	let globalCounter = 0
	const elComponentName = 'el'
	const elTagName = 'div'
</script>

<script lang="ts">
	import { onMount } from 'svelte'

	import { classname, createAnimationStore } from '../internal'
	import type { CssProps, ElProps } from './El.types'

	type $$Props = Partial<ElProps>

	// default properties
	let {
		element = $bindable(),
		componentName,
		id = $bindable(),
		tag = 'div',
		cssProps,
		value = $bindable(),
		title,
		tabindex,
		role,
		ariaCurrent,
		ariaLabel,
		ariaValuenow,
		style,
		show = $bindable(),
		gap,
		vAlign,
		shadow,
		hidden,
		bgColor,
		bgGradient,
		bgOpacity,
		border,
		borderTop,
		borderStart,
		borderEnd,
		borderBottom,
		borderColor,
		borderRadius,
		borderRoundSize,
		borderOpacity,
		p,
		pt,
		pb,
		ps,
		pe,
		px,
		py,
		m,
		mt,
		mb,
		ms,
		me,
		mx,
		my,
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
		w,
		h,
		mw,
		mh,
		position,
		top,
		start,
		bottom,
		end,
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
		fontSize,
		fontWeight,
		fontStyle,
		float,
		floatSm,
		floatMd,
		floatLg,
		floatXl,
		floatXxl,
		container,
		col,
		colSm,
		colMd,
		colLg,
		colXl,
		colXxl,
		order,
		orderSm,
		orderMd,
		orderLg,
		orderXl,
		orderXxl,
		offset,
		offsetSm,
		offsetMd,
		offsetLg,
		offsetXl,
		offsetXxl,
		row,
		rowCols,
		rowColsSm,
		rowColsMd,
		rowColsLg,
		rowColsXl,
		rowColsXxl,
		g,
		gSm,
		gMd,
		gLg,
		gXl,
		gXxl,
		gx,
		gy,
		alignItems,
		alignSelf,
		justifyContent,
		children,
		...restProps
	}: $$Props = $props()

	let animate: any | undefined = $state(undefined)

	$effect(() => {
		if (animate && show === false) {
			animate.leave()
		}

		if (animate && show === true) {
			animate.enter()
		}
	})

	let defaultCssProps: CssProps = $derived({
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
	})

	let classes: string | undefined = $state('')
	$effect(() => {
		classes =
			classname(elComponentName, defaultCssProps, restProps.class)?.replace('y-el ', '') ?? ''
	})

	let elProps = $derived.by(() => {
		let klass = classes
		if (componentName !== elComponentName) klass += ' ' + classname(componentName, cssProps)

		klass += $animate?.classes || ''

		const styles = `${style ? style + ';' : ''}${$animate?.styles || ''}` || undefined

		return {
			id,
			class: klass,
			title,
			tabindex,
			role,
			ariaCurrent,
			ariaLabel,
			ariaValuenow,
			style: styles,
		}
	})

	onMount(() => {
		if (element) {
			animate = createAnimationStore({
				element,
				componentName,
				show,
			})
		}
	})
</script>

{#if children}
	<svelte:element this={tag} bind:this={element} {...restProps} {...elProps}>
		{@render children?.()}
	</svelte:element>
{:else if tag === 'input'}
	{#if restProps.type === 'checkbox' || restProps.type === 'radio'}
		<input bind:this={element} {...restProps} {...elProps} />
	{:else}
		<input bind:this={element} {...restProps} {...elProps} bind:value />
	{/if}
{:else if tag === 'textarea'}
	<textarea bind:this={element} {...restProps} {...elProps} bind:value />
{:else}
	<svelte:element this={tag} bind:this={element} {...restProps} {...elProps} />
{/if}
