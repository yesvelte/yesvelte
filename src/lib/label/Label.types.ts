import type { ElProps } from '../el/El.types'

export interface LabelProps extends Partial<ElProps> {
	required?: boolean
	for?: string
}
