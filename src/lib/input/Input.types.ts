import type { ElProps } from '../el'

export const INPUT_SIZES = ['sm', 'md', 'lg'] as const
export type InputSizes = (typeof INPUT_SIZES)[number]

export const INPUT_STATES = ['valid', 'invalid'] as const
export type InputStates = (typeof INPUT_STATES)[number]

export const INPUT_TYPES = ['text', 'password', 'email'] as const
export type InputTypes = (typeof INPUT_TYPES)[number]

export interface InputWrapperProps extends Partial<ElProps> {
	size?: InputSizes
}

export interface InputProps extends Partial<ElProps> {
	disabled?: boolean
	placeholder?: string
	readonly?: boolean
	size?: InputSizes
	value?: unknown
	state?: InputStates
	borderRounded?: boolean
	borderFlush?: boolean
	type?: InputTypes
	mask?: string
	maskOptions?: object
}
