import type { Colors, ElProps } from '../el'

export interface RadioProps extends Partial<ElProps> {
	disabled?: boolean
	readonly?: boolean
	checked?: boolean
	description?: string
	name?: string
	label?: string
	color?: Colors
	inline?: boolean
	reverse?: boolean
	for?: string
}

export interface RadioGroupProps extends Partial<ElProps> {
	color?: Colors
	inline?: boolean
	reverse?: boolean
	items?: Array<any>
	name?: string
}
