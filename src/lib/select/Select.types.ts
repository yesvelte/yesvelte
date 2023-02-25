import type { ElProps } from '../el'

export const SELECT_SIZES = ['sm', 'md', 'lg'] as const
export type SelectSizes = (typeof SELECT_SIZES)[number]

export const SELECT_STATES = ['valid', 'invalid'] as const
export type SelectStates = (typeof SELECT_STATES)[number]

export interface SelectProps extends Partial<ElProps> {
	size?: SelectSizes
	disabled?: boolean
	items?: Array<any>
	placeholder?: string
	state?: SelectStates
}
