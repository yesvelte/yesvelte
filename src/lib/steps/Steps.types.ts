import type { Colors, ElProps } from '../el'

export interface StepsProps extends Partial<ElProps> {
	color?: Colors
	counter?: boolean
	vertical?: boolean
	items?: any[]
	active?: number
}

export interface StepItemProps extends Partial<ElProps> {
	beforeActive?: boolean
	afterActive?: boolean
	active?: boolean
	href?: string
	color?: Colors
}
