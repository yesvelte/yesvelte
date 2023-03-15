import type { ElProps } from '$lib/el'

export interface PaginationProps extends Partial<ElProps> {
	//
}

export interface PaginationItemProps extends Partial<ElProps> {
	href?: string
	active?: boolean
	disabled?: boolean
}
