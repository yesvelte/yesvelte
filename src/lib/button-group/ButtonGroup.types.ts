import type { ElProps } from '../el'

export interface ButtonGroupProps extends Partial<ElProps> {
	size?: 'sm' | 'md' | 'lg'
	vertical?: boolean
}
