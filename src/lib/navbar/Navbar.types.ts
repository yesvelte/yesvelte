import type { ElProps } from '../el'

export interface NavbarProps extends Partial<ElProps> {
	//
}

export interface NavbarItemProps extends Partial<ElProps> {
	//
	active?: boolean
	disabled?: boolean
	divider?: boolean
	href?: string
	icon?: string
}
