import type { Colors, ElProps } from '../el'
import type { Writable } from 'svelte/store'

export type SliderKnobType = { value: number; connect: boolean; tooltip: boolean }

export type SliderContext = {
	register: (knob: SliderKnobType) => number
	unregister: (id: number) => void
	values: Writable<number[]>
	setValue: (id: number, newValue: number) => void
}

export interface SliderProps extends Partial<ElProps> {
	color?: Colors
	min?: number
	max?: number
	step?: number
	vertical?: boolean
	connect?: boolean
}

export interface SliderKnobProps extends Partial<ElProps> {
	connect?: boolean
	value?: number
	tooltip?: boolean
}
