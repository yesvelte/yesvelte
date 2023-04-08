import type { ElProps } from '../el'

export interface TabsProps extends Partial<ElProps> {
	vertical?: boolean
}

export interface TabItemProps extends Partial<ElProps> {
	active?: boolean
	disabled?: boolean
}

export interface TabListProps extends Partial<ElProps> {
	grow?: boolean
	card?: boolean
	role?: string
}

export interface TabPanelProps extends Partial<ElProps> {
	role?: string
}

export type TabsContext = {
	registerTab: (tab: any) => void
	registerPanel: (pane: any) => void
	selectTab: (tab: any) => void
	selectedTab: any
	selectedPanel: any
}
