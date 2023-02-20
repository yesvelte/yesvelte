import type { Colors, ElProps } from '../el'

export interface ButtonProps extends Partial<ElProps> {
	active?: boolean
	color?: Colors
	disabled?: boolean
	ghost?: boolean
	href?: string
	icon?: boolean
	link?: boolean
	loading?: boolean
	outline?: boolean
	pill?: boolean
	size?: 'sm' | 'md' | 'lg'
	target?: '_blank' | '_self' | '_parent' | '_top'
	tile?: boolean
	type?: 'button' | 'reset' | 'submit'
}
