import type { Writable } from 'svelte/store'

import type { ElProps } from '../el'

export interface AccordionsProps extends Partial<ElProps> {
	group?: string
	persistent?: boolean
}

export interface AccordionProps extends Partial<ElProps> {
	open?: boolean
	title?: string
}

export interface AccordionHeaderProps extends Partial<ElProps> {
	collapsed?: boolean
}

export type AccordionContext = Writable<{ open?: boolean }>

export type AccordionsContext = Writable<{ persistent: boolean; children: any[] }>
