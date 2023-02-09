import type { Colors, ElProps } from '../el'

// Button Types
declare type ButtonTypes = 'submit' | 'button' | 'reset' | undefined
declare type ButtonSizes = 'sm' | 'lg' | undefined
declare type ButtonValues = string | undefined

export interface ButtonProps extends Partial<ElProps> {
	color?: Colors
	outline?: boolean
	link?: boolean
	type?: ButtonTypes
	value?: ButtonValues
	size?: ButtonSizes
	loading?: boolean
	active?: boolean
	disabled?: boolean
	toggle?: boolean
	pill?: boolean
	tile?: boolean
	ghost?: boolean
	href?: string
	role?: string
}
