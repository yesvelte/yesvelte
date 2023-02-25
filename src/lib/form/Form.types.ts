import type { ElProps } from '../el'
import type { InputProps, InputStates } from '../input'
import type { SwitchProps } from '../switch/Switch.types'
import type { RadioGroupProps } from '../radio/Radio.types'
import type { SelectProps } from '../select/Select.types'
import type { CheckboxProps, CheckboxGroupProps } from '../checkbox/Checkbox.types'

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

export interface FormRadioGroupProps extends Partial<FormFieldProps>, Partial<RadioGroupProps> {}

export interface FormSelectProps extends Partial<FormFieldProps>, Partial<SelectProps> {}

export interface FormCheckboxGroupProps
	extends Partial<FormFieldProps>,
		Partial<CheckboxGroupProps> {}

export interface FormCheckboxProps extends Partial<FormFieldProps>, Partial<CheckboxProps> {}
