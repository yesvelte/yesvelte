import type { ElProps } from '../el'
import type { InputSizes, InputStates } from '../input'

export interface AutocompleteProps extends Partial<ElProps> {
	debounce?: number
	disabled?: boolean
	items?: (string | any)[]
	key?: string | ((item: any) => string)
	placeholder?: string
	size?: InputSizes
	state?: InputStates
	name?: string
	value?: string | any | any[]
	_slots?: Record<string, boolean>
	readonly?: boolean
}
