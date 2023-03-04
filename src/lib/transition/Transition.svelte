<script lang="ts">
	import El from '$lib/el/El.svelte'
	import { createEventDispatcher, onMount, tick } from 'svelte'

	export let componentName: string = 'transition'

	export let element: HTMLDivElement | undefined = undefined
	const dispatch = createEventDispatcher()

	export let show: boolean = false

	let enterFrom: boolean = false
	let enterTo: boolean = false
	let entering: boolean = false
	let leaveFrom: boolean = false
	let leaveTo: boolean = false
	let leaving: boolean = false

	let shouldShow: boolean = show
	let shouldHide: boolean = !show

	let state = ''

	let onAfterTransition: (() => void) | undefined = undefined

	async function nextFrame() {
		return new Promise((resolve) => {
			requestAnimationFrame(() => {
				requestAnimationFrame(resolve)
			})
		})
	}

	async function enter() {
		dispatch('entering')
		shouldHide = false
		entering = true

		if (!onAfterTransition) {
			enterFrom = true
		}

		await nextFrame()

		if (onAfterTransition) {
			leaving = false
			leaveTo = false
		}
		enterTo = true
		enterFrom = false

		onAfterTransition = () => {
			entering = false
			enterTo = false
			shouldShow = true
			dispatch('entered')
		}
	}

	async function leave() {
		shouldShow = false
		dispatch('leaving')
		await tick()

		if (!onAfterTransition) {
			leaveFrom = true
		}
		leaving = true
		await nextFrame()
		leaveTo = true
		leaveFrom = false

		if (onAfterTransition) {
			entering = false
			enterTo = false
		}
		onAfterTransition = () => {
			leaving = false
			leaveTo = false
			shouldHide = true
			dispatch('leaved')
		}
	}

	function toggle(newShow: boolean) {
		if (newShow) {
			enter()
		} else {
			leave()
		}

		// if (newShow) {
		// 	leaveTo = false
		// 	leaveFrom = false
		// 	console.log('state: ', state)
		// 	setTimeout(() => {
		// 		// only enable from if no transition is running
		// 		shouldHide = false
		// 		state = 'hide=false'

		// 		if (!onAfterTransition) {
		// 			enterFrom = true // go to initial state
		// 			state = 'enterFrom=true'
		// 			console.log('state: ', state)
		// 		}

		// 		setTimeout(() => {
		// 			leaving = false
		// 			entering = true // enable transition
		// 			state = 'entering=true'
		// 			console.log('state: ', state)

		// 			setTimeout(() => {
		// 				state = 'enterTo=true;enterFrom=false'
		// 				console.log('state: ', state)

		// 				enterTo = true
		// 				enterFrom = false

		// 				onAfterTransition = () => {
		// 					state = 'enterTo=false;entering=false;show=true'
		// 					console.log('state: ', state)

		// 					enterTo = false
		// 					entering = false
		// 					shouldShow = true
		// 				}
		// 			}, 0)
		// 		}, 0)
		// 	}, 0)
		// } else {
		// 	enterTo = false
		// 	enterFrom = false

		// 	if (!onAfterTransition) {
		// 		leaveFrom = true
		// 		state = 'leaveFrom=true'
		// 		console.log('state: ', state)
		// 	}

		// 	await tick()
		// 	leaving = true
		// 	entering = false

		// 	shouldShow = false
		// 	state = 'leaving=true;show=false'
		// 	console.log('state: ', state)

		// 	await tick()

		// 	state = 'leaveFrom=false;leaveTo=true'
		// 	console.log('state: ', state)

		// 	leaveFrom = false
		// 	leaveTo = true

		// 	onAfterTransition = () => {
		// 		state = 'leaving=false;leaveTo=false;hide=true'
		// 		console.log('state: ', state)

		// 		leaveTo = false
		// 		leaving = false
		// 		shouldHide = true
		// 	}
		// }
	}

	onMount(() => {
		function transitionEndHandler() {
			if (onAfterTransition) {
				onAfterTransition()
				onAfterTransition = undefined
			}
		}

		if (element) {
			element.addEventListener('transitionend', transitionEndHandler)
		}

		return () => {
			if (element) {
				element.removeEventListener('transitionend', transitionEndHandler)
			}
		}
	})

	$: if (element) toggle(show)

	let cssProps: any
	$: cssProps = {
		enterFrom,
		enterTo,
		leaveFrom,
		leaveTo,
		entering,
		leaving,
		from: enterFrom || leaveTo,
		to: enterTo || leaveFrom,
		show: shouldShow,
		hide: shouldHide,
	}
</script>

<El bind:element {componentName} {cssProps}>
	<slot />
</El>
