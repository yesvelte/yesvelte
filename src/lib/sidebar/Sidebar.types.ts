import type { ElProps } from '../el'

export interface SidebarProps extends Partial<ElProps> {
	theme?: 'dark' | 'light'
}

export interface SidebarItemProps extends Partial<ElProps> {
	icon?: string
	title?: string
	href?: string
	disabled?: boolean
	active?: boolean
}
