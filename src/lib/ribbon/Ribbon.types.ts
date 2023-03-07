import type { BackgroundColors, ElProps } from '../el'

declare type RibbonPositions = undefined | 'top' | 'start' | 'end' | 'bottom'

export interface RibbonProps extends Partial<ElProps> {
	bgColor?: BackgroundColors
	elementPosition?: RibbonPositions
}
