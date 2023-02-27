import type { Colors, ElProps } from '../el'

export interface StatusProps extends Partial<ElProps> {
	color?: Colors
	lite?: boolean
}
