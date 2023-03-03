import type { HTMLTextareaAttributes } from 'svelte/elements'
import type { ElProps } from '../el'

export const TEXTAREA_SIZES = ['sm', 'md', 'lg'] as const
export type TextareaSizes = (typeof TEXTAREA_SIZES)[number]

export const TEXTAREA_STATES = ['valid', 'invalid'] as const
export type TextareaStates = (typeof TEXTAREA_STATES)[number]

export type TextareaProps = Partial<ElProps<HTMLTextAreaElement> & HTMLTextareaAttributes> & {
	size?: TextareaSizes
	state?: TextareaStates
	borderRounded?: boolean
	borderFlush?: boolean
	value?: string
}
