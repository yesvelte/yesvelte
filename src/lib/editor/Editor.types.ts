import type { ElProps } from '../el'

type EditorToolbar = EditorToolbar[] | string | any

export interface EditorProps extends Partial<ElProps> {
	value?: unknown
	placeholder?: string
	readonly?: boolean
	name?: string
	state?: 'valid' | 'invalid'
	height?: 'sm' | 'md' | 'lg' | 'xl'
	toolbar?: EditorToolbar[]
}
