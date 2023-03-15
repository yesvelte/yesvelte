import type { ElProps } from '../el'

export const TEXTAREA_SIZES = ['sm', 'md', 'lg'] as const
export type TextareaSizes = (typeof TEXTAREA_SIZES)[number]

export const TEXTAREA_STATES = ['valid', 'invalid'] as const
export type TextareaStates = (typeof TEXTAREA_STATES)[number]

export interface TextareaProps extends Partial<ElProps> {
	disabled?: boolean
	placeholder?: string
	name?: string
	readonly?: boolean
	size?: TextareaSizes
	state?: TextareaStates
	borderRounded?: boolean
	borderFlush?: boolean
	rows?: number | string
	type?: string
}
