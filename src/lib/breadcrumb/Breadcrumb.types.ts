import type { ElProps } from '../el'

export interface BreadcrumbProps extends Partial<ElProps> {
	separator?: 'arrows' | 'bullets' | 'dots'
}

export interface BreadcrumbItemProps extends Partial<ElProps> {
	active?: boolean
	href?: string
}
