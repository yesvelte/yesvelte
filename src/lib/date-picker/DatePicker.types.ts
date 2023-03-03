import type { ILPConfiguration } from 'litepicker/dist/types/interfaces'
import type { HTMLInputAttributes } from 'svelte/elements'
import type { ElProps } from '../el'
import type { InputSizes, InputStates } from '../input/Input.types'

export type DatePickerProps = Partial<ElProps<HTMLInputElement> & HTMLInputAttributes> & {
	format?: string
	value?: Date | string | number | Array<Date | string | number>
	options?: Partial<ILPConfiguration>
	// disabled?: boolean
	// placeholder?: string
	size?: InputSizes
	state?: InputStates
	borderRounded?: boolean
	borderFlush?: boolean
}
