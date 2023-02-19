import type { ElProps } from '../el'

export type OffcanvasPlacements = 'top' | 'end' | 'bottom' | 'start'

export interface OffcanvasProps extends Partial<ElProps> {
	placement?: OffcanvasPlacements
	scroll?: boolean
	backdrop?: boolean
	autoClose?: boolean
	show?: boolean
	close?: () => void
}

export interface OffcanvasBodyProps extends Partial<ElProps> {
	//
}

export interface OffcanvasHeaderProps extends Partial<ElProps> {
	title?: string
}
