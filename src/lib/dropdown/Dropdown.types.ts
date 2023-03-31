import type { PopupProps } from '../popup'
import type { ElProps } from '../el'
import type { Writable } from 'svelte/store'

export interface DropdownProps extends Partial<ElProps> {
	placement?: PopupProps['placement']
	autoClose?: PopupProps['autoClose']
	arrow?: boolean
}
export interface DropdownMenuProps extends Partial<ElProps> {
	//
}

export interface DropdownItemProps extends Partial<ElProps> {
	//
	active?: boolean
	disabled?: boolean
	divider?: boolean
	header?: boolean
	href?: string
}

export type DropdownContext = Writable<{
	target?: HTMLElement | Element
	placement?: DropdownProps['placement']
	autoClose?: DropdownProps['autoClose']
}>
