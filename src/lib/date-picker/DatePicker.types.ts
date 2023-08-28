import type { ILPConfiguration } from 'litepicker/dist/types/interfaces'
import type { ElProps } from '../el'
import type { InputSizes, InputStates } from '../input/Input.types'

export interface DatePickerProps extends Partial<ElProps> {
	formatText?: (date: Date) => string
	value?: Date | string | number | Array<Date | string | number>
	text?: string
	options?: Partial<ILPConfiguration>
	disabled?: boolean
	placeholder?: string
	range?: boolean
	size?: InputSizes
	state?: InputStates
	name?: string
	borderRounded?: boolean
	borderFlush?: boolean
}
