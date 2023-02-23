import { navigations, type Navigation } from './navigations'
export interface IHash {
	[details: string]: Navigation
}
const routeMap: IHash = {}

navigations.forEach((item) => {
	if (item.route) {
		routeMap[item.route] = item
	} else {
		item.children?.forEach((child) => {
			if (child.route) {
				routeMap[child.route] = child
			}
		})
	}
})

export function load(params: any) {
	const route = params.url.pathname
	let currentRout: Navigation = {}
	Object.keys(routeMap).forEach((k) => {
		if (route === k || route + '/' === k) {
			currentRout = routeMap[k]
		}
	})
	return {
		metaData: {
			title: currentRout?.title,
			description: currentRout?.description,
		},
	}
}
