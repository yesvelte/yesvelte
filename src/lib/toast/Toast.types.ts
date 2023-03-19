import type { ElProps } from '../el'

type ToastContainerPlacements =
	| 'top'
	| 'top-start'
	| 'top-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'middle'
	| 'middle-start'
	| 'middle-end'

export interface ToastProps extends Partial<ElProps> {
	show?: boolean
}

export interface ToastBodyProps extends Partial<ElProps> {
	//
}

export interface ToastContainerProps extends Partial<ElProps> {
	placement?: ToastContainerPlacements
}

export interface ToastHeaderProps extends Partial<ElProps> {
	showCloseButton?: boolean
}

export type ToastContext = {
	hide: () => void
}
