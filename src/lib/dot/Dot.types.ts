import type { Colors, ElProps } from '../el'

export interface DotProps extends Partial<ElProps> {
	animated?: boolean
	color?: Colors
	indicator?: boolean
}
