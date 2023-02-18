import type { Colors, ElProps } from '../el'

export const AVATAR_SIZES = ['xs', 'sm', 'ep', 'md', 'lg', 'xl'] as const
export type AvatarSizes = (typeof AVATAR_SIZES)[number]

export interface AvatarProps extends Partial<ElProps> {
	color?: Colors
	image?: string | undefined
	pill?: boolean
	round?: boolean
	tile?: boolean
	size?: AvatarSizes
}
