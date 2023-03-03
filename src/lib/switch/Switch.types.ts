import type { HTMLInputAttributes } from 'svelte/elements'
import type { Colors, ElProps } from '../el'

export type SwitchProps = Partial<ElProps<HTMLInputElement> & HTMLInputAttributes> & {
	color?: Colors
	inline?: boolean
	text?: string
	checked?: boolean
	reverse?: boolean
	// disabled?: boolean
	description?: string
	// type?: string
}
