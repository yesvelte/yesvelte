import type { Colors, ElProps } from '../el'

export const AVATAR_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const
export type AvatarSizes = (typeof AVATAR_SIZES)[number]

export const AVATAR_SHAPES = ['rounded', 'tile', 'circle', 'pill'] as const
export type AvatarShapes = (typeof AVATAR_SHAPES)[number]

export interface AvatarProps extends Partial<ElProps> {
	color?: Colors
	size?: AvatarSizes
	shape?: AvatarShapes
}
