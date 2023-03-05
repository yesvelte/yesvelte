import type { ElProps, Colors } from '../el'

type TableResponsiveTypes = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type TableSizes = 'sm' | 'md'

export interface TableProps extends Partial<ElProps> {
	color?: Colors
	hover?: boolean
	striped?: boolean | 'columns'
	wrap?: boolean
	size?: TableSizes
	responsive?: TableResponsiveTypes
}

export interface TableCellProps extends Partial<ElProps> {
	color?: Colors
	active?: boolean
	truncate?: boolean
}

export interface TableRowProps extends Partial<ElProps> {
	color?: Colors
	active?: boolean
}
