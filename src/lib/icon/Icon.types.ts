import type { Colors, ElProps } from '../el'

export const ICON_SIZES = [
	'auto',
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'1x',
	'2x',
	'3x',
	'4x',
	'5x',
	'6x',
	'7x',
	'8x',
	'9x',
] as const
export type IconSizes = (typeof ICON_SIZES)[number]

// TODO: complete this list
export const ICON_PACKS = ['tabler', 'mdi', 'fa-solid', 'la', 'bx'] as const
export type IconPacks = (typeof ICON_PACKS)[number] | string

export interface IconProps extends Partial<ElProps> {
	color?: Colors
	pack?: IconPacks
	name?: string
	size?: IconSizes
}
