import type { Colors, ElProps } from '../el'

declare type progressSizes = 'sm' | 'md'

export interface ProgressProps extends Partial<ElProps> {
	size?: progressSizes
	separated?: boolean
}

export interface ProgressBarProps extends Partial<ElProps> {
	color?: Colors
	value?: string | number
	striped?: boolean | 'animated'
	label?: string
	indeterminate?: boolean
}
