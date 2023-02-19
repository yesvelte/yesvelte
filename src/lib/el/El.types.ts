// Theme Colors
export type ThemeColors =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark'

export type NamedColors =
	| 'blue'
	| 'azure'
	| 'indigo'
	| 'purple'
	| 'pink'
	| 'red'
	| 'orange'
	| 'yellow'
	| 'lime'
	| 'green'
	| 'teal'
	| 'cyan'

export type SocialMediaColors =
	| 'facebook'
	| 'twitter'
	| 'google'
	| 'youtube'
	| 'vimeo'
	| 'dribbble'
	| 'github'
	| 'instagram'
	| 'pinterest'
	| 'vk'
	| 'rss'
	| 'flickr'
	| 'bitbucket'
	| 'linkedin'
	| 'tabler'

export type Colors = ThemeColors | NamedColors | SocialMediaColors

export type TextColors = Colors

export type BackgroundColors = ThemeColors | NamedColors | SocialMediaColors | 'body'

export type Opacities = '10' | '25' | '50' | '75'
export type TextOpacities = '25' | '50' | '75'

// Display
export type DisplayRatioTypes = '1x1' | '4x3' | '16x9' | '21x9'
export type DisplayStickyTypes = 'top' | 'sm-top' | 'md-top' | 'lg-top' | 'xl-top'
export type DisplayFixedTypes = 'top' | 'bottom'
export type DisplayTypes =
	| 'none'
	| 'inline'
	| 'inline-block'
	| 'block'
	| 'grid'
	| 'table-cell'
	| 'table-row'
	| 'flex'
	| 'inline-flex'
	| 'table'

// shadow
export type ShaddowSizes = 'none' | 'sm' | 'lg' | boolean

// width sizes
export type Sizes = '25' | '50' | '75' | '100' | 'auto'
export type MaxSizes = '100'

// position
export type PositionsTypes = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
export type PositionValues = '0' | '50' | '100'

// border
export type BorderSizes = '0' | '1' | '2' | '3' | '4' | '5' | boolean
export type BorderRoundSizes = '0' | '1' | '2' | '3'
export type BorderRadiusPositions = 'top' | 'end' | 'bottom' | 'start' | 'circle' | 'pill'

// padding
export type PaddingSizes = '0' | '1' | '2' | '3' | '4' | '5'

// margin
export type MarginSizes = '0' | '1' | '2' | '3' | '4' | '5' | 'auto'

// gap
export type GapSizes = '0' | '1' | '2' | '3' | '4' | '5'

// Font
export type FontSizes = '1' | '2' | '3' | '4' | '5' | '6'
export type FontStyles = 'italic' | 'normal'
export type HeadingDisplaySizes = '1' | '2' | '3' | '4' | '5' | '6'
export type FontWeights = 'light' | 'lighter' | 'normal' | 'bold' | 'semibold' | 'bolder'

// Text
export type TextAligns = 'start' | 'end' | 'center'
export type TextWraps = 'wrap' | 'nowrap' | 'break'
export type TextLineHeights = '1' | 'sm' | 'base' | 'lg'
export type TextDecorations = 'none' | 'underline' | 'line-through'
export type TextTransforms = 'lowercase' | 'uppercase' | 'capitalize'
export type TextHeadings = '1' | '2' | '3' | '4' | '5' | '6'
export type OverflowTypes = 'auto' | 'hidden' | 'visible' | 'scroll'
export type TranslateMiddleTypes = 'x' | 'y' | 'xy'
export type FloatPositions = 'start' | 'end' | 'none'

// Vertical align
export type VerticalAligns = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-bottom' | 'text-top'

// Col Sizes and settings
export type ColSizes =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'
	| 'auto'
export type ColSizesBool =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'
	| 'auto'
	| boolean
export type ColOrders = '1' | '2' | '3' | '4' | '5' | 'first' | 'last'
export type OffsetSizes =
	| '0'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'
	| 'auto'

// Container Sizes and settings
export type ContainerMaxWidths = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid'

// Row sizes and settings
export type RowColSizes = '1' | '2' | '3' | '4' | '5' | '6' | 'auto'
export type RowGutterSizes = '0' | '1' | '2' | '3' | '4' | '5'

// Align items
export type AlignItemsTypes = 'start' | 'end' | 'center'

export type AlignSelfTypes = 'start' | 'end' | 'center'

export type JustifyContentTypes = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'

// HTML Tags
export type HTMLTags = keyof HTMLElementTagNameMap

export interface CssProps {
	// background properties
	bgColor?: BackgroundColors
	bgGradient?: boolean
	bgOpacity?: Opacities

	// border properties
	border?: BorderSizes
	borderTop?: BorderSizes
	borderStart?: BorderSizes
	borderEnd?: BorderSizes
	borderBottom?: BorderSizes
	borderColor?: Colors
	borderRadius?: BorderRadiusPositions
	borderRoundSize?: BorderRoundSizes
	borderOpacity?: Opacities

	// padding properties
	p?: PaddingSizes
	pt?: PaddingSizes
	pb?: PaddingSizes
	ps?: PaddingSizes
	pe?: PaddingSizes
	px?: PaddingSizes
	py?: PaddingSizes

	// margin properties
	m?: MarginSizes
	mt?: MarginSizes
	mb?: MarginSizes
	ms?: MarginSizes
	me?: MarginSizes
	mx?: MarginSizes
	my?: MarginSizes

	// gaps
	gap?: GapSizes

	// display properties
	clearfix?: boolean
	ratio?: DisplayRatioTypes
	sticky?: DisplayStickyTypes
	fixed?: DisplayFixedTypes
	d?: DisplayTypes
	dSm?: DisplayTypes
	dMd?: DisplayTypes
	dLg?: DisplayTypes
	dXl?: DisplayTypes
	dXxl?: DisplayTypes
	dPrint?: DisplayTypes

	// shadow
	shadow?: ShaddowSizes

	// sizing
	w?: Sizes
	h?: Sizes
	mw?: MaxSizes
	mh?: MaxSizes

	// position
	position?: PositionsTypes
	top?: PositionValues
	start?: PositionValues
	bottom?: PositionValues
	end?: PositionValues

	// Vertical aligh
	vAlign?: VerticalAligns

	// text
	textColor?: TextColors
	textAlign?: TextAligns
	textAlignSm?: TextAligns
	textAlignMd?: TextAligns
	textAlignLg?: TextAligns
	textAlignXl?: TextAligns
	textWrap?: TextWraps
	textTransform?: TextTransforms
	textDecoration?: TextDecorations
	lineHeight?: TextLineHeights
	textMuted?: boolean
	textLead?: boolean
	textHeading?: TextHeadings
	textTruncate?: boolean
	textOpacity?: TextOpacities

	// font
	fontSize?: FontSizes
	fontWeight?: FontWeights
	fontStyle?: FontStyles

	//Visibility
	hidden?: boolean

	// Float
	float?: FloatPositions
	floatSm?: FloatPositions
	floatMd?: FloatPositions
	floatLg?: FloatPositions
	floatXl?: FloatPositions
	floatXxl?: FloatPositions

	// container
	container?: ContainerMaxWidths

	// Col
	col?: ColSizesBool
	colSm?: ColSizesBool
	colMd?: ColSizesBool
	colLg?: ColSizesBool
	colXl?: ColSizesBool
	colXxl?: ColSizesBool

	// Col Order
	order?: ColOrders
	orderSm?: ColOrders
	orderMd?: ColOrders
	orderLg?: ColOrders
	orderXl?: ColOrders
	orderXxl?: ColOrders

	//Col Offset
	offset?: OffsetSizes
	offsetSm?: OffsetSizes
	offsetMd?: OffsetSizes
	offsetLg?: OffsetSizes
	offsetXl?: OffsetSizes
	offsetXxl?: OffsetSizes

	// Row
	row?: boolean | 'deck'
	rowCols?: RowColSizes
	rowColsSm?: RowColSizes
	rowColsMd?: RowColSizes
	rowColsLg?: RowColSizes
	rowColsXl?: RowColSizes
	rowColsXxl?: RowColSizes

	// Gutter
	g?: RowGutterSizes
	gSm?: RowGutterSizes
	gMd?: RowGutterSizes
	gLg?: RowGutterSizes
	gXl?: RowGutterSizes
	gXxl?: RowGutterSizes
	gx?: RowGutterSizes
	gy?: RowGutterSizes

	// Align Items
	alignItems?: AlignItemsTypes
	alignSelf?: AlignSelfTypes

	// Justify Content
	justifyContent?: JustifyContentTypes
}

export interface ElProps extends CssProps {
	id?: string
	class?: string
	tag?: HTMLTags
	element?: HTMLElement
	componentName?: string
	cssProps?: CssProps
	value?: unknown
	title?: string
	role?: string
}
