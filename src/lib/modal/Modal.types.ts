import type { ElProps } from '../el'

export type ModalPlacements = 'top' | 'center'

const DIALOG_SIZES = ['sm', 'md', 'lg'] as const
export type ModalSizes = (typeof DIALOG_SIZES)[number]

export interface ModalProps extends Partial<ElProps> {
	show?: boolean
	dismissible?: boolean
	backdrop?: boolean
	absolute?: boolean
	placement?: ModalPlacements
	scrollable?: boolean
	persistent?: boolean
	size?: ModalSizes
	title?: string
}
