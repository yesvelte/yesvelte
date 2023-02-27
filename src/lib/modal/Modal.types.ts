import type { ElProps } from '../el'

export type ModalPlacements = 'top' | 'center'

const DIALOG_SIZES = ['sm', 'md', 'lg'] as const
export type ModalSizes = (typeof DIALOG_SIZES)[number]

export type ModalContext = {
	hide: (force: boolean) => void
}

export interface ModalProps extends Partial<ElProps> {
	open?: boolean
	dismissible?: boolean
	backdrop?: boolean
	absolute?: boolean
	placement?: ModalPlacements
	scrollable?: boolean
	persistent?: boolean
	size?: ModalSizes
	title?: string
}

export interface ModalBodyProps extends Partial<ElProps> {}
export interface ModalCloseProps extends Partial<ElProps> {}
export interface ModalFooterProps extends Partial<ElProps> {}
export interface ModalHeaderProps extends Partial<ElProps> {}
export interface ModalTitleProps extends Partial<ElProps> {}
