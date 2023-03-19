import type { ElProps } from '../el'
import type { PopupProps } from '../popup'

export interface PopoverProps extends PopupProps {
	title?: string
}

export interface PopoverHeaderProps extends Partial<ElProps> {}
export interface PopoverBodyProps extends Partial<ElProps> {}
