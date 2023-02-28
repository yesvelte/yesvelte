import type { Colors, ElProps } from '../el'

export interface StepsProps extends Partial<ElProps> {
	color?: Colors
	counter?: boolean
	vertical?: boolean
}

export interface StepItemProps extends Partial<ElProps> {
	active?: boolean
	href?: string
}
