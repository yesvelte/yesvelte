import type { Colors, ElProps } from '../el'

export interface AlertProps extends Partial<ElProps> {
	color?: Colors
	dismissible?: boolean
	icon?: string
	important?: boolean
	open?: boolean
	title?: string
}
