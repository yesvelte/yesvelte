import type { ElProps } from '$lib/el'
import type { PopupProps } from '$lib/popup'

export interface PopoverProps extends PopupProps {
	title?: string
}

export interface PopoverHeaderProps extends Partial<ElProps> {}
export interface PopoverBodyProps extends Partial<ElProps> {}
