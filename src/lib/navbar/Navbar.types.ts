import type { ElProps } from '../el'

export interface NavbarProps extends Partial<ElProps> {
	//
}
export interface NavBrandProps extends Partial<ElProps> {
	//
	href?: string
}
export interface NavProps extends Partial<ElProps> {
	//
}

export interface NavTogglerProps extends Partial<ElProps> {
	//
}

export interface NavTogglerIconProps extends Partial<ElProps> {
	//
}

export interface NavItemProps extends Partial<ElProps> {
	//
	active?: boolean
	disabled?: boolean
	divider?: boolean
	href?: string
	icon?: string
}
