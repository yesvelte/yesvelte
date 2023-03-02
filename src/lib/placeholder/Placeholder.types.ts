import type { ElProps } from '../el'

type PlaceholderAnimations = 'glow' | 'wave'
type PlaceholderSizes = 'xs' | 'sm' | 'md' | 'lg'

export interface PlaceholderProps extends Partial<ElProps> {
	animation?: PlaceholderAnimations
	size?: PlaceholderSizes
}
