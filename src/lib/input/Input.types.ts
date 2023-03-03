import type { ElProps } from '../el'
import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements'

export const INPUT_SIZES = ['sm', 'md', 'lg'] as const
export type InputSizes = (typeof INPUT_SIZES)[number]

export const INPUT_STATES = ['valid', 'invalid'] as const
export type InputStates = (typeof INPUT_STATES)[number]

export interface InputWrapperProps extends Partial<ElProps> {
	size?: InputSizes
}

export type InputProps = Partial<ElProps<HTMLInputElement> & HTMLInputAttributes> & {
	size?: InputSizes
	state?: InputStates
	borderRounded?: boolean
	borderFlush?: boolean
	mask?: string
	maskOptions?: object
	value?: any
}
