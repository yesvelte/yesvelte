import type { Colors, ElProps } from '../el'

export interface StepsProps extends Partial<ElProps> {
	color?: Colors
	counter?: boolean
	vertical?: boolean
	items?: any[]
	activeIndex?: number
	activeItem?: any
}

export interface StepItemProps extends Partial<ElProps> {
	active?: boolean
	href?: string
}
