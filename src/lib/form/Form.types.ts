import type { ElProps } from '../el'
import type { InputProps, InputStates } from '../input'
import type { SwitchProps } from '../switch/Switch.types'
import type { RadioGroupProps } from '../radio/Radio.types'
import type { SelectProps } from '../select/Select.types'
import type { AutocompleteProps } from '../autocomplete/Autocomplete.types'
import type { CheckboxProps, CheckboxGroupProps } from '../checkbox/Checkbox.types'
import type { DatePickerProps } from '../date-picker/DatePicker.types'
import type { FileUploadProps } from '../file-upload/FileUpload.types'
import type { TextareaProps } from '$lib/textarea'

export interface FormFieldProps<T = undefined> extends Partial<ElProps> {
	label?: string
	required?: boolean
	hint?: string
	state?: InputStates
	innerProps?: T
}

export interface FormInputProps extends Partial<FormFieldProps<InputProps>> {
	value?: InputProps['value']
}

export interface FormTextAreaProps extends Partial<FormFieldProps<TextareaProps>> {
	value?: TextareaProps['value']
}

export interface FormSwitchProps extends Partial<FormFieldProps<SwitchProps>> {
	checked: SwitchProps['checked']
}

// export interface FormRadioGroupProps extends Partial<FormFieldProps>, Partial<RadioGroupProps> {}

// export interface FormSelectProps extends Partial<FormFieldProps>, Partial<SelectProps> {}

// export interface FormCheckboxGroupProps
// 	extends Partial<FormFieldProps>,
// 		Partial<CheckboxGroupProps> {}

// export interface FormCheckboxProps extends Partial<FormFieldProps>, Partial<CheckboxProps> {}
export interface FormDatePickerProps extends Partial<FormFieldProps<DatePickerProps>> {}
// export interface FormFileUploadProps extends Partial<FormFieldProps>, Partial<FileUploadProps> {}
// export interface FormAutocompleteProps
// 	extends Partial<FormFieldProps>,
// 		Partial<AutocompleteProps> {}
