import type { ElProps } from '../el'
import type { InputProps, InputStates } from '../input'

export interface FormFieldProps extends Partial<ElProps> {
	label?: string
	required?: boolean
	hint?: string
	state?: InputStates
}

export interface FormInputProps extends Partial<FormFieldProps>, Partial<InputProps> {}
