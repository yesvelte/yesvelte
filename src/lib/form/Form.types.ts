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

export interface FormFieldProps<T = any> extends Partial<ElProps> {
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
	checked?: SwitchProps['checked']
	value?: SwitchProps['value']
}

export interface FormRadioGroupProps extends Partial<FormFieldProps<RadioGroupProps>> {
	value?: RadioGroupProps['value']
	items?: RadioGroupProps['items']
	inline?: RadioGroupProps['inline']
	reverse?: RadioGroupProps['reverse']
}

export interface FormSelectProps extends Partial<FormFieldProps<SelectProps>> {
	items?: SelectProps['items']
	value?: SelectProps['value']
}

export interface FormCheckboxGroupProps extends Partial<FormFieldProps<CheckboxGroupProps>> {
	items?: CheckboxGroupProps['items']
	value?: CheckboxGroupProps['value']
	inline?: CheckboxGroupProps['inline']
}

export interface FormCheckboxProps extends Partial<FormFieldProps<CheckboxProps>> {
	checked?: CheckboxProps['checked']
	value?: CheckboxProps['value']
	inline?: CheckboxProps['inline']
}
export interface FormDatePickerProps extends Partial<FormFieldProps<DatePickerProps>> {
	value?: DatePickerProps['value']
}
export interface FormFileUploadProps extends Partial<FormFieldProps<FileUploadProps>> {
	files?: FileUploadProps['files']
}
export interface FormAutocompleteProps extends Partial<FormFieldProps<AutocompleteProps>> {
	items?: AutocompleteProps['items']
	value?: AutocompleteProps['value']
	multiple?: AutocompleteProps['multiple']
}
