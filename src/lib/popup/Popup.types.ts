// export let target: HTMLElement | string | undefined = undefined
// export let placement: Placement | AlignedPlacement | undefined = undefined
// export let trigger: 'click' | 'hover' | 'focus' = 'click'
// export let offset: number = 8
// export let arrow: boolean = false
// export let componentName: string = 'popup'

import type { ElProps } from '../el'
import type { AlignedPlacement, Placement } from '@floating-ui/dom'

export interface PopupProps extends Partial<ElProps> {
	target?: HTMLElement | string
	placement?: Placement | AlignedPlacement
	trigger?: 'click' | 'hover' | 'focus'
	popupOffset?: number
	arrow?: boolean
}
