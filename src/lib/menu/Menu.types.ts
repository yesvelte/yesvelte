// menu types

import type { ElProps } from '../el'

export interface MenuItemProps extends Partial<ElProps> {
	divider?: boolean
	disabled?: boolean
	active?: boolean
	dropdown?: boolean
	icon?: string
	title?: string
}

export interface MenuProps extends Partial<ElProps> {
	show?: boolean
	//
}
