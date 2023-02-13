import type { Colors, ElProps } from '../el'

declare type DividerAlignments = 'start' | 'center' | 'end'
declare type DividerDirections = 'horizontal' | 'vertical'

export interface DividerProps extends Partial<ElProps> {
	color?: Colors
	alignment?: DividerAlignments
	direction?: DividerDirections
}
