import { redirect } from '@sveltejs/kit'
import { navigations, type Navigation } from './navigations'
export interface IHash {
	[details: string]: Navigation
}
const routeMap: IHash = {}

navigations.forEach((item) => {
	if (!item.children) {
		routeMap[item.route] = item
	} else {
		item.children?.forEach((child) => {
			if (child.route) {
				routeMap[item.route + child.route] = child
			}
		})
	}
})

export function load(params: any) {
	if (params.url.pathname === '/docs') {
		throw redirect(307, '/docs/introduction')
	}

	const route = params.url.pathname
	let currentRout: Partial<Navigation> = {}
	Object.keys(routeMap).forEach((k) => {
		if (route === k || route + '/' === k) {
			currentRout = routeMap[k]
		}
	})

	let nextItem
	let prevItem

	navigations.forEach((navigation) => {
		if (route.startsWith(navigation.route)) {
			if (navigation.children) {
				for (let i = 0; i < navigation.children.length; i++) {
					const child = navigation.children[i]

					if (navigation.route + child.route === route) {
						prevItem = navigation.children[i - 1]
						nextItem = navigation.children[i + 1]

						if (nextItem) {
							nextItem.href = navigation.route + nextItem.route
						}

						if (prevItem) {
							prevItem.href = navigation.route + prevItem.route
						}
					}
				}
			} else if (route === navigation.route) {
				return true
			}
		}
	})

	return {
		metaData: {
			title: currentRout?.title,
			description: currentRout?.description,
		},
		links: {
			nextItem,
			prevItem,
		},
	}
}
