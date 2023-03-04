import type { HTMLSelectAttributes } from 'svelte/elements'
import type { ElProps } from '../el'
import type { InputSizes, InputStates } from '../input'

export type AutocompleteProps = Partial<ElProps & HTMLSelectAttributes> & {
	debounce?: number
	items?: (string | any)[]
	key?: string | ((item: any) => string)
	size?: InputSizes
	state?: InputStates
	value?: string | any | any[]
}
