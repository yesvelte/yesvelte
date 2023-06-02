import type { ElProps } from '../el'

export const SELECT_SIZES = ['sm', 'md', 'lg'] as const
export type SelectSizes = (typeof SELECT_SIZES)[number]

export const SELECT_STATES = ['valid', 'invalid'] as const
export type SelectStates = (typeof SELECT_STATES)[number]

export interface SelectProps extends Partial<ElProps> {
	size?: SelectSizes
	value?: any | any[]
	name?: string
	disabled?: boolean
	items?: Array<any>
	multiple?: boolean
	key?: string | ((item: any) => string | number)
	placeholder?: string
	state?: SelectStates
}
