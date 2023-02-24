import type { ElProps } from '../el'
import type { InputProps, InputStates } from '../input'
import type { SwitchProps } from '../switch/Switch.types'

export interface FormFieldProps extends Partial<ElProps> {
	label?: string
	required?: boolean
	hint?: string
	state?: InputStates
}

export interface FormInputProps extends Partial<FormFieldProps>, Partial<InputProps> {}

export interface FormTextAreaProps extends Partial<FormInputProps> {
	rows?: number | string
}
export interface FormSwitchProps extends Partial<FormFieldProps>, Partial<SwitchProps> {}
