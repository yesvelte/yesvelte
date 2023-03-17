import type { Colors, ElProps } from '../el'

export interface SwitchProps extends Partial<ElProps> {
	color?: Colors
	inline?: boolean
	text?: string
	checked?: boolean
	reverse?: boolean
	disabled?: boolean
	description?: string
	type?: string
	name?: string
}
