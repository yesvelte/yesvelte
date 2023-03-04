import type { HTMLInputAttributes } from 'svelte/elements'
import type { Colors, ElProps } from '../el'

export type RadioProps = Partial<ElProps<HTMLInputElement> & HTMLInputAttributes> & {
	checked?: boolean
	description?: string
	label?: string
	color?: Colors
	inline?: boolean
	reverse?: boolean
	for?: string
	value?: any
}

export interface RadioGroupProps extends Partial<ElProps> {
	color?: Colors
	inline?: boolean
	reverse?: boolean
	items?: Array<any>
	name?: string
}
