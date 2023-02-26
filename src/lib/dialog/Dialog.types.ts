import type { ElProps } from '../el'

export type DialogPlacements = 'top' | 'center'

const DIALOG_SIZES = ['sm', 'md', 'lg'] as const
export type DialogSizes = (typeof DIALOG_SIZES)[number]

export type DialogContext = {
	hide: (force: boolean) => void
}

export interface DialogProps extends Partial<ElProps> {
	open?: boolean
	backdrop?: boolean
	absolute?: boolean
	placement?: DialogPlacements
	scrollable?: boolean
	persistent?: boolean
	size?: DialogSizes
}

export interface DialogBodyProps extends Partial<ElProps> {}
export interface DialogCloseProps extends Partial<ElProps> {}
export interface DialogContentProps extends Partial<ElProps> {}
export interface DialogFooterProps extends Partial<ElProps> {}
export interface DialogHeaderProps extends Partial<ElProps> {}
export interface DialogTitleProps extends Partial<ElProps> {}
