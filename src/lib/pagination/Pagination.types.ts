import type { ElProps } from '$lib/el'

export interface PaginationProps extends Partial<ElProps> {
	hasFirst?: boolean
	hasLast?: boolean
	hasNext?: boolean
	hasPrev?: boolean
	from?: number
	to?: number
	value?: number
}

export interface PaginationItemProps extends Partial<ElProps> {
	href?: string
	active?: boolean
	disabled?: boolean
}
