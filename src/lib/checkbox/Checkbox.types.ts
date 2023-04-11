import type { Colors, ElProps } from '../el'

export interface CheckboxProps extends Partial<ElProps> {
	color?: Colors
	description?: string
	disabled?: boolean
	label?: string
	inline?: boolean
	reverse?: boolean
	checked?: boolean
	name?: string
	indeterminate?: boolean
}

export interface CheckboxGroupProps extends Partial<ElProps> {
	inline?: boolean
	color?: Colors
	items?: Array<any>
	name?: string
	key?: string | (any) => string | number
	reverse?: boolean
	value?: Array<any>
}
