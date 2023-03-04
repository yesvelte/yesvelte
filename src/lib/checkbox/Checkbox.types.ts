import type { HTMLInputAttributes } from 'svelte/elements'
import type { Colors, ElProps } from '../el'

export type CheckboxProps = Partial<ElProps<HTMLInputElement> & HTMLInputAttributes> & {
	color?: Colors
	description?: string
	disabled?: boolean
	label?: string
	inline?: boolean
	reverse?: boolean
	checked?: boolean
	name?: string
	value?: any
	indeterminate?: boolean
}

export interface CheckboxGroupProps extends Partial<ElProps> {
	inline?: boolean
	color?: Colors
	items?: Array<any>
	reverse?: boolean
	value?: Array<any>
}
